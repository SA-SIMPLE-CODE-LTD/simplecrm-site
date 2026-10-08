# Simple CRM — marketing site

The public website for Simple CRM: the landing page and the legal hub at `/legal` (terms, acceptable use, copyright, privacy, cookies, DPA, subprocessors, security), organized like monday.com's. The platform itself lives in the separate `SimpleCRM` repo and runs on its own host (`app.simplecrms.com`).

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

| Path                                                | What                                                                                       |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `src/lib/site.ts`                                   | Domain, app URL, company details, contact emails, legal pages and groups. Edit this first. |
| `src/content/legal/*.md`                            | Legal texts in Markdown. Front matter: `title`, `updated` (YYYY-MM-DD).                    |
| `src/lib/legal.ts`                                  | Loads the Markdown, fills `{{tokens}}` from `site.ts`, renders it at build time.           |
| `src/routes/+page.svelte`                           | Landing page.                                                                              |
| `src/routes/legal/+page.svelte`                     | The legal hub: documents by group, FAQ, contact addresses.                                 |
| `src/routes/legal/[doc]/`                           | One page per legal document (`/legal/privacy`, `/legal/terms`, …).                         |
| `src/routes/sitemap.xml/`, `src/routes/robots.txt/` | Generated from `site.ts`.                                                                  |
| `src/lib/components/Seo.svelte`                     | Title, description, canonical URL and Open Graph tags.                                     |
| `src/lib/assets/brand/`, `static/`                  | Logos and icons copied from the SimpleCRM repo's brand folder.                             |
| `static/_headers`                                   | Security headers (Cloudflare Pages / Netlify format).                                      |

## Contact emails

Everything goes to one Gmail inbox, `simplecodesa@gmail.com`, through "+tag" addresses: `simplecodesa+support@gmail.com`, `+billing`, `+privacy`, `+legal`, `+security`, `+abuse`. Gmail delivers them all to the same inbox. To label them, add a filter in Gmail for each address (Settings → Filters → "To: simplecodesa+support@gmail.com" → Apply label "Support"). To change an address, edit `SITE.email` in `site.ts`. `{{supportEmail}}`-style tokens in the Markdown follow it, and the build fails on a token that `site.ts` does not define.

## Before going live

1. In `src/lib/site.ts`, fill in the company's registered address (the domain is set: `simplecrms.com`, app at `app.simplecrms.com`).
2. Have a lawyer review all eight documents in `src/content/legal/`, and set `updated` when they are final. The texts follow the legal points of monday.com's documents, in our own words.
3. Check every statement on `security.md` and in the DPA's Annex 2 is true in production (backups, MFA on production access, encryption at rest, region).
4. Check `subprocessors.md`, `privacy.md` section 4.1 and `security.md` against the real production setup. They assume AWS Tel Aviv (`il-central-1`), Neon in Frankfurt, Cloudflare in front of the app and Resend for email.
5. Deploy (below), then set the Google Auth Platform → Branding page to:
   - Home page: `https://simplecrms.com`
   - Privacy policy: `https://simplecrms.com/legal/privacy`
   - Terms of service: `https://simplecrms.com/legal/terms`
   - Authorized domain: `simplecrms.com`

## Changing a legal document

Edit the Markdown file and set `updated` to today's date. For a significant change to the privacy policy or terms, email workspace admins before it takes effect (the documents promise 30 days' notice). Git history is the record of earlier versions.

## Deploy

Hosted on **Cloudflare Workers** (static assets, no server code), connected to this repo: every push to `main` deploys.

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy` (reads `wrangler.jsonc`, which uploads `build/` as static assets)
- Environment variable: `NODE_VERSION=24.21.0`
- Custom domains: `simplecrms.com` and `www.simplecrms.com`, with a redirect rule from `www` to the root domain.

`static/_headers` sets the security headers, and `build/404.html` is served for unknown paths. To test the deployed setup locally: `npm run build && npx wrangler dev`.
