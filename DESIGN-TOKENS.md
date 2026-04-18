# AIToolReviews — Design Token Reference
**Version:** 1.0 (2026-04-17)
**Stylesheet:** `css/style.css` (single source of truth)
**Theme:** Light professional — clean white/green, "lab authority" aesthetic

## Token Table

| Token | CSS Variable | Usage |
|---|---|---|
| **Background** | `var(--bg)` | Page background (light) |
| **Background alt** | `var(--bg-alt)` | Alternate section bg |
| **Background dark** | `var(--bg-dark)` | Dark sections/hero |
| **Surface** | `var(--surface)` | Card/product box backgrounds |
| **Text** | `var(--text)` | Body text |
| **Text light** | `var(--text-light)` | Secondary/muted text |
| **Heading** | `var(--heading)` | H1/H2 text color |
| **Accent** | `var(--accent)` | CTAs, highlights, links |
| **Accent (hover)** | `var(--accent-hov)` | Hover state |
| **Accent light** | `var(--accent-light)` | Light tint of accent |
| **Accent pale** | `var(--accent-pale)` | Very light accent for backgrounds |
| **Border** | `var(--border)` | Dividers, card edges |
| **Border dark** | `var(--border-dark)` | Stronger borders |
| **Font** | `var(--font)` | Font stack |

## Rules

### MANDATORY for all new articles:
1. **No hard-coded hex in article HTML** — CSS variables only
2. **No inline `style="background:#2d6a4f"` nav bars** — these are layout elements, not inline styles
3. **No inline `style="color:#6b8f3c"` on links** — stylesheet handles link colors globally
4. **Approved inline style patterns:**
   ```html
   style="background:var(--bg);"
   style="background:var(--accent-pale);"
   style="color:var(--heading);"
   style="color:var(--text);"
   style="color:var(--accent);"
   style="border:1px solid var(--border);"
   style="border-left:4px solid var(--accent);"
   style="padding:16px;margin:20px 0;"
   ```

### Stylesheet path in articles: `/css/style.css` (absolute path, not relative `../`)

### Legacy Cleanup Policy (2026-04-17)
- **Unchanged legacy pages:** violations may remain as-is
- **Modified pages:** must not keep avoidable violations — reduce or eliminate during edit
- **New pages:** zero violations required
- Gate enforces this: use `update` mode flag when editing existing articles

### Pre-existing violations (at policy adoption): 106 instances
Mostly nav bars and CTA buttons in older articles with inline `background:#2d6a4f`. Do not add more.

## Gate
Run: `bash /home/shane/.openclaw/workspace/scripts/pipeline-gate.sh aitoolreviews <slug> <post-type>`
Note: stylesheet path is `/css/style.css` not `../style.css` — gate checks for `style.css` presence, both match.
