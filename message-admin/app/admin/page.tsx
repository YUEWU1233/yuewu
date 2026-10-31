import { redirect } from "next/navigation";
import { requireAdmin } from "../../lib/server";
import { HttpError } from "../../lib/security";
import Inbox from "./inbox";

export default async function Admin() {
  try { await requireAdmin(); }
  catch (error) {
    if (error instanceof HttpError && (error.status === 401 || error.status === 403)) redirect("/login");
    return <section className="card"><h2>Configuration needed</h2><p>Check the server environment variables and Supabase availability, then reload this page. Setup instructions are in message-admin/README.md.</p><a href="/login">Sign in</a></section>;
  }
  return <Inbox />;
}
