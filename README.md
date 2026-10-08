# Simple CRM — marketing site

The public website for Simple CRM: the landing page and the legal pages (privacy policy, terms, DPA, subprocessors). The platform itself lives in the separate `SimpleCRM` repo and runs on its own host (`app.<domain>`).

SvelteKit 3 + Svelte 5 with `adapter-static`: every page is generated at build time into plain HTML in `build/`. There is no server and no database.

## Run it

```sh
nvm use        # Node 24 (see .nvmrc)
npm ci
npm run dev    # http://localhost:5180 (5173 is left to the CRM)
```

| Task                 | Command                    |
| -------------------- | -------------------------- |
| Type check           | `npm run check`            |
| Lint (prettier + es) | `npm run lint`             |
| Fix formatting       | `npm run format`           |
| Build                | `npm run build` → `build/` |
| Preview the build    | `npm run preview`          |

## Where things live

| Path                                                | What                                                                                    |
| --------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `src/lib/site.ts`                                   | Domain, app URL, company details, contact emails, list of legal pages. Edit this first. |
| `src/content/legal/*.md`                            | Legal texts in Markdown. Front matter: `title`, `updated` (YYYY-MM-DD).                 |
| `src/lib/legal.ts`                                  | Loads the Markdown, fills `{{tokens}}` from `site.ts`, renders it at build time.        |
| `src/routes/+page.svelte`                           | Landing page.                                                                           |
| `src/routes/legal/[doc]/`                           | One page per legal document (`/legal/privacy`, `/legal/terms`, …).                      |
| `src/routes/sitemap.xml/`, `src/routes/robots.txt/` | Generated from `site.ts`.                                                               |
| `src/lib/components/Seo.svelte`                     | Title, description, canonical URL and Open Graph tags.                                  |
| `src/lib/assets/brand/`, `static/`                  | Logos and icons copied from the SimpleCRM repo's brand folder.                          |
| `static/_headers`                                   | Security headers (Cloudflare Pages / Netlify format).                                   |

## Before going live

1. In `src/lib/site.ts`, set `url` and `appUrl` to the real domains and fill in the company details and emails.
2. In `src/content/legal/`, replace every `[PLACEHOLDER]`, remove the "Draft" notes, set `updated`, and have a lawyer review all four documents.
3. Check `subprocessors.md` against the real production setup (AWS region, Neon region, email provider).
4. Deploy (below), then set the Google Auth Platform → Branding page to:
   - Home page: `https://<domain>`
   - Privacy policy: `https://<domain>/legal/privacy`
   - Terms of service: `https://<domain>/legal/terms`
   - Authorized domain: `<domain>`

## Changing a legal document

Edit the Markdown file and set `updated` to today's date. For a significant change to the privacy policy or terms, email workspace admins before it takes effect (the documents promise [30] days' notice). Git history is the record of earlier versions.

## Deploy

Any static host works. Recommended: **Cloudflare Pages** connected to this repo.

- Build command: `npm run build`
- Output directory: `build`
- Environment variable: `NODE_VERSION=24.21.0`
- Add the custom domain (root and `www`), and redirect `www` to the root domain.

`static/_headers` is applied automatically by Cloudflare Pages and Netlify. On S3 + CloudFront, set the same headers with a CloudFront response headers policy.
