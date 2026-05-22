# Pleroma — Deployment Notes

This document lists quick steps to build and deploy the Pleroma preview site.

Local build (Node.js >=18 recommended):

```bash
npm install
npm run build
npm run start
```

Environment tips:
- Set `NEXT_PUBLIC_SITE_URL` to your production domain so `sitemap.xml` and social links work correctly.
- Use a secure host (Vercel, Netlify, or a managed Node host) that supports Next.js App Router.

Vercel quick deploy:
1. Push to a GitHub repo.
2. Create a Vercel project linked to the repo.
3. Set environment variable `NEXT_PUBLIC_SITE_URL` to your site domain.
4. Deploy.

Security checklist (preview):
- No external anchor placeholders remain.
- Default CTAs are disabled until real endpoints are available.
- Add `Sentry` or similar only if you configure proper data collection and privacy statements.

Update before production:
- Replace `https://your-domain.com` in `public/robots.txt` and `src/app/sitemap.xml/route.ts`.
- Add analytics/tracking only with consent mechanisms.
- Verify `Privacy Policy` and `Terms` contents match legal guidance.
