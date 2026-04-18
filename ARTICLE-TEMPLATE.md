# AIToolReviews — Article Template Standard
**Version:** 1.0 (2026-04-17 — design tokens, color rules, structure)
**Applies to:** All article types (buying-guide, how-to, reference, comparison)

---

## STAGE 2 HARD RULES

### ❌ DESIGN TOKEN RULES — mandatory:
All colors in article HTML **MUST** use CSS variables. See `DESIGN-TOKENS.md`.

**Approved inline patterns:**
```html
style="background:var(--bg);"
style="background:var(--accent-pale);"
style="background:var(--surface);"
style="color:var(--heading);"
style="color:var(--text);"
style="color:var(--accent);"
style="border:1px solid var(--border);"
style="border-left:4px solid var(--accent);"
```

**FORBIDDEN — hard-coded colors:**
```html
❌ style="background: #2d6a4f;"
❌ style="color: white;"   <!-- use var(--white) or omit if inherited -->
❌ style="background: #e9f5db;"
❌ style="color: #666;"
❌ <nav style="background: #2d6a4f; ...">   <!-- nav must use CSS classes only -->
```

**Critical:** Inline nav/footer styling is FORBIDDEN. Nav and footer must use CSS class-based styling only. Do not add `style=` attributes to `<nav>` or `<footer>` elements.

### ❌ BANNED WORDS:
- `seamlessly`
- `game-changer`
- `click here` / `read more` / `here` (as anchor text)

### ✅ INTERNAL LINKS — minimum 3:
Link to existing AIToolReviews articles. Descriptive anchor text only.

---

## MANDATORY HTML STRUCTURE

### HEAD:
```html
<!DOCTYPE html>
<html lang="en">
<head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-KHVMG4P4YP"></script>
<script>
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag("js", new Date());
 gtag("config", "G-KHVMG4P4YP");
</script>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>[TITLE] — AIToolReviews</title>
  <meta name="description" content="[150-160 char description]" />
  <link rel="canonical" href="https://aitoolreviews.co/articles/[SLUG].html" />
  <link rel="stylesheet" href="/css/style.css" />
</head>
```

**Note:** Stylesheet is `/css/style.css` (absolute path from root) — NOT `../style.css`

### NAV:
```html
<nav>
  <div class="nav-inner">
    <a href="/" class="nav-logo">AIToolReviews<span>.co</span></a>
    <ul class="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/#reviews">Reviews</a></li>
      <li><a href="/#guides">Guides</a></li>
    </ul>
  </div>
</nav>
```

### ARTICLE HEADER:
```html
<div class="article-header">
  <div class="container">
    <p class="section-label">[Category]</p>
    <h1>[ARTICLE H1]</h1>
    <p class="article-meta">Updated [Month Year] · [N] min read</p>
  </div>
</div>
```

### ARTICLE WRAPPER:
```html
<article class="article-body">
  <!-- ALL CONTENT HERE -->
</article>
```

### FOOTER:
```html
<footer>
  <div class="container">
    <div class="footer-links">
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms of Service</a>
      <a href="/contact">Contact</a>
    </div>
    <p>© 2026 AIToolReviews.co. All rights reserved.</p>
  </div>
</footer>
```

---

## GATE
```bash
bash /home/shane/.openclaw/workspace/scripts/pipeline-gate.sh aitoolreviews <slug> <post-type>

# Existing article update:
bash /home/shane/.openclaw/workspace/scripts/pipeline-gate.sh aitoolreviews <slug> <post-type> update
```
Post types: `buying-guide` | `how-to` | `reference` | `location`

**Note:** Gate checks for `style.css` in stylesheet link — `/css/style.css` matches.
