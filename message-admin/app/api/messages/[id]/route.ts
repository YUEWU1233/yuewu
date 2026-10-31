import { database, failure, json, requireAdmin, requireSameOrigin } from "../../../../lib/server";
import { HttpError, readJson, validId } from "../../../../lib/security";

type Context = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, context: Context) {
  try {
    requireSameOrigin(request);
    await requireAdmin();
    const id = validId((await context.params).id);
    const body = await readJson(request, 1024) as Record<string, unknown> | null;
    if (!body || typeof body.is_read !== "boolean") throw new HttpError(400, "is_read must be a boolean.");
    const response = await database(`?id=eq.${id}&select=id`, { method: "PATCH", headers: { Prefer: "return=representation" }, body: JSON.stringify({ is_read: body.is_read }) });
    if (!(await response.json()).length) throw new HttpError(404, "Message not found.");
    return json({ ok: true });
  } catch (error) { return failure(error); }
}

export async function DELETE(request: Request, context: Context) {
  try {
    requireSameOrigin(request);
    await requireAdmin();
    const id = validId((await context.params).id);
    const response = await database(`?id=eq.${id}&select=id`, { method: "DELETE", headers: { Prefer: "return=representation" } });
    if (!(await response.json()).length) throw new HttpError(404, "Message not found.");
    return json({ ok: true });
  } catch (error) { return failure(error); }
}
