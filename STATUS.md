# aitoolreviews.co — Build Status

**Date:** 2026-04-09  
**Built by:** Jarrod (cron job execution)

## What's Built

- `/index.html` — Homepage with hero, category grid, 6 featured review cards
- `/css/style.css` — Full responsive CSS system
- `/netlify.toml` — Deploy config for Cloudflare Pages / Netlify
- `/generate-articles.py` — Script that generates all articles (run to add more)
- `/articles/index.html` — All reviews listing page
- `/articles/` — 14 complete articles:
  1. jasper-ai-review-2026.html
  2. writesonic-review-2026.html
  3. copy-ai-review-2026.html
  4. rytr-review-2026.html
  5. anyword-review-2026.html (NEW)
  6. writesonic-vs-jasper-2026.html
  7. surfer-seo-review-2026.html
  8. best-ai-writing-tools-2026.html
  9. best-free-ai-writing-tools-2026.html
  10. best-ai-seo-tools-2026.html
  11. best-ai-automation-tools-2026.html
  12. best-ai-chatbots-2026.html
  13. notion-ai-review-2026.html
  14. best-ai-tools-for-small-business-2026.html
  15. best-ai-image-generators-2026.html
  16. best-ai-video-tools-2026.html

## Deploy to Cloudflare Pages (Free)

1. Push this folder to a GitHub repo:
   ```bash
   cd /home/shane/.openclaw/workspace/projects/aitoolreviews
   git init && git add -A && git commit -m "Initial build"
   gh repo create aitoolreviews --public --push --source .
   ```
   (requires `gh` CLI — or push manually via GitHub web UI)

2. Go to https://pages.cloudflare.com/
3. "Create a project" → Connect GitHub → Select the `aitoolreviews` repo
4. Build settings: leave blank (static site, no build command needed)
5. Deploy → Cloudflare will give you a URL like `aitoolreviews.pages.dev`

6. Point DNS: In Namecheap (where domain is registered):
   - Add CNAME record: `www` → `aitoolreviews.pages.dev`
   - Add A record: `@` → Cloudflare's IP (Cloudflare Pages will show you this)

## Affiliate Programs to Sign Up (Ranked by Payout)

| Priority | Program | Commission | Sign Up |
|---|---|---|---|
| 1 | Notion Affiliates | 50% first year | notion.so/affiliates |
| 2 | Copy.ai | 45% first month | copy.ai/affiliates |
| 3 | Writesonic | 30% recurring | writesonic.com/affiliates |
| 4 | Jasper | 25% recurring | jasper.ai/affiliates |
| 5 | Surfer SEO | 25% recurring | surferseo.com/affiliate |
| 6 | Make.com | 20% recurring | make.com/en/affiliate |
| 7 | Canva | up to $36/sub | canva.com/affiliates |
| 8 | Descript | $30/referral | descript.com/affiliates |

**After signing up:** Replace `?fpr=gravison` links in all articles with your real affiliate IDs. Run `grep -r "fpr=gravison" articles/` to find them all.

## Revenue Timeline

- **Month 1-2:** $0 (Google needs to index the site)
- **Month 3-4:** First organic visitors, possible first affiliate click
- **Month 4-6:** $20-100/month if a few articles rank for long-tail keywords
- **Month 6-12:** $100-500/month with 20+ indexed articles
- **Year 2+:** $500-2,000/month if content compounds and backlinks accumulate

## Next Actions to Maximize Revenue

1. **Add 38 more articles** — run `python3 generate-articles.py` after adding more article data to the script
2. **Submit sitemap to Google Search Console** — add property, submit `/articles/index.html`
3. **Sign up for all affiliate programs above**
4. **Add About and Contact pages** (`about.html`, `contact.html`)
5. **Point DNS** — aitoolreviews.co currently has no site (HTTP 000)
