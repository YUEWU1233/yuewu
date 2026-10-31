This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

### Contact form

The homepage Contact section has a circular form icon that opens the message form
in a modal dialog. There is no separate Contact route or navigation item. Its
client component sends JSON to `https://yuewu-sooty.vercel.app/api/messages` after
Cloudflare Turnstile verification. The public Site key is configured in
`app/components/ContactForm.tsx`; no Supabase secret is included in the website.

In the separate Vercel `message-admin` project, configure these server variables
and redeploy after changing them:

- `ALLOWED_ORIGINS=https://yuewu1233.github.io` (add local development origins as needed).
- `TURNSTILE_HOSTNAMES=yuewu1233.github.io,localhost`.
- `TURNSTILE_SECRET_KEY`: the secret matching the Contact form's Site key.

Also allow those hostnames in the Cloudflare Turnstile widget. For local testing,
add `http://localhost:3000` to `ALLOWED_ORIGINS` and visit through `localhost`.
Only the origin is configured, without the `/yuewu` deployment path. See
`message-admin/README.md` for database and administrator configuration.

After both deployments, verify submission from the homepage Contact dialog and check
that the private admin inbox receives it. Messages are private, not public comments.

### Default Next.js hosting information

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
