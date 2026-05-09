# Prompt Immagini Blog — mirkopasseri.it

---

## Design System Immagini (da rispettare su tutti i post)

Queste regole definiscono il **look & feel visivo** di tutte le immagini del blog. Ogni nuovo post deve seguire questo sistema per garantire coerenza.

### Token di design

| Elemento | Valore |
|---|---|
| **Sfondo** | `#333333` (dark, non nero puro) |
| **Colore principale elementi** | `#F5F5DC` cream/beige |
| **Colore accento** | `#4A6274` blu-grigio opaco |
| **Stile** | Flat illustration, minimalista, editoriale |
| **Texture** | Nessuna. Zero gradienti, zero ombre, zero pattern |
| **Testo** | Nessuno nell'immagine (l'alt text fa il lavoro SEO) |
| **Formato output** | 1200×630px — Open Graph standard |
| **Formato file** | WebP (convertire su squoosh.app dopo la generazione) |
| **Dimensione massima** | < 100KB dopo compressione |
| **Iconografia** | Semplice, geometrica, riconoscibile — NO illustrazioni complesse |
| **Connessioni** | Elementi collegati da linee sottili quando utile |

### Template prompt base

Ogni prompt deve seguire questa struttura:

```
A clean, minimal flat illustration for a blog post about [ARGOMENTO].
Dark background (#333333).
[DESCRIZIONE ELEMENTI GRAFICI — icone semplici, massimo 3-4 elementi]
[CONNESSIONI — linee sottili tra elementi, se utile]
Cream/beige (#F5F5DC) and muted blue-grey (#4A6274) color palette only.
No text, no gradients, no shadows. Professional, modern, editorial flat illustration style.
Wide format 1200x630px.
```

### Dove salvare

```
src/assets/blog/nome-del-post.webp
```

Il nome file deve corrispondere al frontmatter `image:` nel `.md`.

---

## Cartella destinazione e attivazione

Genera ogni immagine alla dimensione **1200x630px** (formato Open Graph).
Dopo la generazione: converti in WebP su [squoosh.app](https://squoosh.app) → salva in `src/assets/blog/` → decommenta la riga `# image:` nel frontmatter del post.

---

## Come si attiva l'immagine in un post

Nel frontmatter di ogni `.md` trovi già questa riga commentata:

```yaml
# image: ../../assets/blog/nome-file.webp
# ↑ Genera l'immagine con il prompt nel piano, salvala in src/assets/blog/, poi decommenta questa riga
```

Quando hai il file WebP pronto:
1. Salvalo in `src/assets/blog/nome-file.webp`
2. Rimuovi il `#` dalla riga `image:` nel frontmatter
3. Fai `npm run build` per verificare

Astro genera automaticamente i srcset per 320px, 640px e 1200px da una singola sorgente.

---

## POST 1 — "Perché la tua attività ha bisogno di un sito web"
**File:** `perche-la-tua-attivita-ha-bisogno-di-un-sito-web.webp`

```
A clean, minimal flat illustration for a blog post about why a local business needs a website.
Dark background (#333333).
Center: a simple smartphone icon showing a website/browser screen.
Left side: a small shop/storefront icon.
Right side: a Google search bar icon with a location pin.
Thin connecting lines between elements.
Cream/beige (#F5F5DC) and muted blue-grey (#4A6274) color palette only.
No text, no gradients, no shadows. Professional, modern, editorial flat illustration style.
Wide format 1200x630px.
```

---

## POST 2 — "Social media vs sito web: perché non sono la stessa cosa"
**File:** `social-media-vs-sito-web.webp`

```
A clean, minimal flat illustration contrasting social media and a website.
Dark background (#333333).
Left half: a smartphone icon with simplified social media icons (heart, share, comment).
Center: a thin vertical dividing line.
Right half: a desktop browser window icon showing a clean webpage.
Cream/beige (#F5F5DC) and muted blue-grey (#4A6274) color palette only.
No text, no gradients. Professional, modern, editorial flat illustration style.
Wide format 1200x630px.
```

---

## POST 3 — "Cosa vuol dire che un sito è 'lento' e perché importa"
**File:** `cosa-vuol-dire-sito-lento.webp`

```
A clean, minimal flat illustration about website loading speed.
Dark background (#333333).
Left: a simple speedometer/gauge icon pointing to the slow zone.
Right: a browser window icon with a circular loading spinner in the center.
Small clock icon above the browser. Thin connecting line between elements.
Cream/beige (#F5F5DC) and muted blue-grey (#4A6274) color palette only.
No text, no gradients. Professional, modern, editorial flat illustration style.
Wide format 1200x630px.
```

---

## POST 4 — "L'AI può fare il mio sito web? La risposta onesta"
**File:** `lai-puo-fare-il-mio-sito-web.webp`

```
A clean, minimal flat illustration about AI and web development.
Dark background (#333333).
Left: a simple robot/AI head icon.
Right: a browser window icon with three lines of code inside.
Center: a human hand icon positioned between the two, as a connector.
Thin lines connecting all elements.
Cream/beige (#F5F5DC) and muted blue-grey (#4A6274) color palette only.
No text, no gradients. Professional, modern, editorial flat illustration style.
Wide format 1200x630px.
```

---

## POST 5 — "Quanto costa un sito web? La risposta onesta (2026)"
**File:** `quanto-costa-un-sito-web.webp`

```
A clean, minimal flat illustration about website pricing.
Dark background (#333333).
Center-left: a simple price tag icon.
Connected by thin lines to three icons on the right:
  - a laptop/browser icon (website)
  - a speedometer icon (performance)
  - a magnifying glass with upward arrow icon (SEO)
Cream/beige (#F5F5DC) and muted blue-grey (#4A6274) color palette only.
No text, no gradients. Professional, modern, editorial flat illustration style.
Wide format 1200x630px.
```

---

## POST 6 — "Cos'è l'accessibilità web (e perché riguarda anche la tua attività)"
**File:** `accessibilita-web.webp`

```
A clean, minimal flat illustration about web accessibility.
Dark background (#333333).
Center: a simple laptop icon.
Around it, three small user icons connected by thin lines:
  - top-left: figure with a cane (mobility)
  - top-right: figure with sound/visual waves near the eye (visual)
  - bottom: figure with a thought bubble (cognitive)
Cream/beige (#F5F5DC) and muted blue-grey (#4A6274) color palette only.
No text, no gradients. Professional, modern, editorial flat illustration style.
Wide format 1200x630px.
```

---

## POST 7 — "Perché il tuo sito non si trova su Google (e come rimediare)"
**File:** `perche-il-sito-non-si-trova-su-google.webp`

```
A clean, minimal flat illustration about a website not appearing on Google.
Dark background (#333333).
Center: a magnifying glass icon overlapping a browser window.
Inside the browser: a simple "empty state" ghost icon or a broken page icon.
Small Google-style search bar icon above.
Cream/beige (#F5F5DC) and muted blue-grey (#4A6274) color palette only.
No text, no gradients. Professional, modern, editorial flat illustration style.
Wide format 1200x630px.
```

---

## Checklist per ogni immagine

- [ ] Genera con il prompt (1200x630px)
- [ ] Converti in WebP su [squoosh.app](https://squoosh.app) (target: < 100KB)
- [ ] Rinomina con il nome file indicato sopra
- [ ] Salva in `src/assets/blog/`
- [ ] Decommenta la riga `image:` nel frontmatter del post
- [ ] Verifica con `npm run build`

---

## POST 8 — "Google Business Profile: cos'è, a cosa serve e come usarlo"
**File:** `google-business-profile.webp`

```
A clean, minimal flat illustration for a blog post about Google Business Profile and local search visibility.
Dark background (#333333).
Center: a simple map location pin icon (teardrop shape).
Left: a small storefront/shop icon with a simplified facade.
Right: three horizontal star icons in a row (representing reviews).
Bottom center: a simplified smartphone showing a map screen.
Thin connecting lines between all elements.
Cream/beige (#F5F5DC) and muted blue-grey (#4A6274) color palette only.
No text, no gradients, no shadows. Professional, modern, editorial flat illustration style.
Wide format 1200x630px.
```

