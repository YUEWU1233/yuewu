# Portfolio message admin

独立的 Next.js 服务端应用，部署到 Vercel。原个人网站继续静态部署到 GitHub Pages。

## 1. 数据库准备

在 Supabase SQL Editor 执行 `supabase/setup.sql`。如果之前已经创建 messages 表，仍可执行：它会补齐后端角色权限和索引，不删除已有留言。

保持 Data API 开启，且 exposed schemas 中包含 public。不要给 anon 或 authenticated 授予 messages 表权限。此应用只通过服务端 secret key 操作留言。

在 Authentication > Users 创建自己的管理员账号，复制该用户的 UID。建议关闭允许新用户注册的选项；管理员权限仍由服务端 ADMIN_USER_ID 精确检查，不由是否注册决定。

## 2. 本地配置

在项目根目录的终端执行：

```powershell
cd message-admin
Copy-Item .env.example .env.local
```

编辑 `.env.local`：

| 变量 | 填什么 |
| --- | --- |
| SUPABASE_URL | 已提供的 https://sozuqebrhlucnqriyqwd.supabase.co |
| SUPABASE_PUBLISHABLE_KEY | Settings > API Keys 的 sb_publishable_… |
| SUPABASE_SECRET_KEY | Settings > API Keys 的 sb_secret_…，仅服务端使用 |
| ADMIN_USER_ID | Authentication > Users 中自己的 UID，不是邮箱 |
| ALLOWED_ORIGINS | 表单所在网页的 origin，例如 https://你的用户名.github.io；不含 /yuewu 路径，多个用逗号分隔 |
| TURNSTILE_SECRET_KEY | 公共留言接口所需的 Cloudflare Turnstile secret key |
| TURNSTILE_HOSTNAMES | 验证码允许的主机名，例如 localhost,你的用户名.github.io |

所有变量仅在服务端读取。不要加 NEXT_PUBLIC_ 前缀。`.env.local` 已被 Git 忽略，不要上传或粘贴秘密到聊天。

```powershell
npm install
npm run dev
```

打开 http://localhost:3001/login。输入 Supabase 用户的邮箱和密码。登录后进入 /admin。没有留言时显示空收件箱。

会话保存在 HttpOnly、SameSite=Strict cookie 中，生产环境仅 HTTPS；最长一小时，到期需重新登录，不自动刷新。每次查询或修改都会通过 Supabase 验证当前用户，并检查管理员 UID。不是只靠隐藏页面保护数据。

## 3. 部署到 Vercel

将代码提交到自己的 GitHub 仓库后，在 Vercel Add New > Project 导入该仓库：

- Root Directory：**message-admin**（不要选仓库根目录）。
- Framework Preset：Next.js。
- Node.js：24.x。
- Install Command：npm ci。
- Build Command：npm run build。
- Output Directory：保持框架默认，**不要填 out**。
- 在 Environment Variables 填入 `.env.local` 对应配置，至少为 Production 配置；预览环境按需单独配置。

Deploy 后打开提供的 https://…vercel.app/login。修改环境变量后需要重新部署。这里没有配置 output: export，因为 API 需要运行服务端代码。

## 4. 之后连接个人网站表单

当前没有修改个人网站添加表单。管理员后台可以先部署和验证。公共 POST 接口在 Turnstile 配置缺失时会拒绝保存，避免将没有防刷保护的接口直接开放。

创建 Cloudflare Turnstile widget，配置表单主机名。公开的 site key 用在个人网站 widget 上；secret key 只填到本应用的环境变量。访客完成验证后，表单发送：

```ts
await fetch("https://你的管理应用.vercel.app/api/messages", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, message, turnstileToken })
});
```

前端需要处理成功/失败，成功或失败重试时按 Turnstile 文档重置 widget 并获得新 token。不要发送管理员 cookie，不要在个人网站中放 secret key。CORS 只控制浏览器跨域访问，不能替代验证码或真正的权限检查。

## API

| 方法与路径 | 权限 | 用途 |
| --- | --- | --- |
| POST /api/login | 同源、管理员账号 | 设置会话 cookie |
| POST /api/logout | 同源 | 清除会话 |
| POST /api/messages | 允许的 Origin + 有效 Turnstile token | 创建留言 |
| GET /api/messages?offset=0 | 管理员 cookie | 每页最多 50 条，返回 messages 和 hasMore |
| PATCH /api/messages/:id | 同源、管理员 | body: {"is_read":true} |
| DELETE /api/messages/:id | 同源、管理员 | 永久删除 |

只接受白名单字段，限制实际请求体大小，校验 UUID 和文本长度。数据与认证请求不缓存。留言作为文本显示，不渲染访客提供的 HTML。

## 验证

```powershell
npm test
npm run lint
npm run build
node tests/smoke.mjs
```

smoke.mjs 运行本地模拟 Supabase 的 HTTP 测试，并检查未配置验证码时公开提交保持关闭（不连接真实项目，不创建真实留言）。本地代码检查不能代替真实项目联调：部署前需要验证登录、验证码通过后的提交、已读、删除，以及未登录/非管理员无法读取的行为。

第一版不含邮件通知、全文搜索、自动会话刷新或持久化请求限流。Turnstile 提供基本机器人防护，不是完整的限流系统。留言目前只能在管理员界面查看。可按需添加 Vercel 防火墙规则与独立限流存储。

依赖检查：新应用已升级到 Next.js 16.4.3，以消除初次安装报告的高危和严重问题。安装检查仍报告 15 项中等严重程度的依赖问题；未使用可能破坏兼容性的 audit fix --force。原网站的依赖版本没有修改。
