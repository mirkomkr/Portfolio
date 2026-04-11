---
title: "Cosa vuol dire che un sito è 'lento' e perché importa"
description: "Hai mai abbandonato un sito perché ci metteva troppo ad aprirsi? Ecco cosa succede tecnicamente in quei secondi di attesa — e perché Google penalizza i siti lenti."
pubDate: 2026-02-20
author: "Mirko Passeri"
tags: ["performance web", "core web vitals", "velocità sito", "SEO"]
---

## Tre secondi

Tre secondi. È tutto il tempo che un utente medio è disposto ad aspettare prima di abbandonare una pagina web.

Non tre minuti. Non trenta secondi. Tre secondi dall'apertura del link al momento in cui qualcosa di utile appare sullo schermo.

Se il tuo sito ci mette di più, stai perdendo visitatori — e probabilmente non lo sai nemmeno, perché chi va via non ti avverte.

---

## Cosa succede in quei secondi

Quando apri un sito, il tuo browser deve fare molte cose prima di mostrarti qualcosa:

- Trovare il server dove il sito è ospitato
- Scaricare il codice HTML della pagina
- Scaricare tutti i file CSS che definiscono i colori e il layout
- Scaricare le immagini e i video
- Eseguire il codice JavaScript che aggiunge le funzionalità interattive

Se uno di questi passaggi è lento — server lontano, file troppo grandi, troppo codice da eseguire — il risultato è quello che tutti conoscono: lo schermo bianco, la rotella che gira, il dito che torna indietro.

---

## Perché importa più di quanto pensi

La lentezza di un sito non è solo fastidiosa — ha conseguenze concrete per chi ha un'attività.

**Perdi clienti prima ancora che ti conoscano.**
Un utente che aspetta tre secondi ha già una percezione negativa. Uno che aspetta cinque ha già chiuso la scheda. Quella prima impressione — anche solo visiva, anche solo di velocità — dice qualcosa sulla cura che metti in quello che fai.

**Google lo penalizza direttamente.**
Dal 2021, Google usa la velocità come uno dei segnali per decidere come classificare i siti nei risultati di ricerca. Un sito lento scala in basso. Un sito veloce ha un vantaggio diretto.

**Peggiora su mobile e connessioni lente.**
Un sito che si carica in due secondi su fibra ottica può impiegarci otto su uno smartphone con rete 4G in zona coperta male. E la maggior parte delle ricerche avviene da mobile.

---

## Come si misura la velocità: i Core Web Vitals

Google ha creato tre metriche standard per misurare l'esperienza di caricamento di un sito. Si chiamano **Core Web Vitals** e compaiono nel punteggio di PageSpeed Insights.

**LCP — Largest Contentful Paint**
Misura quanto tempo ci vuole perché l'elemento principale della pagina (di solito l'immagine o il titolo più grande) sia visibile. Il riferimento di Google è sotto i 2,5 secondi. Traduzione umana: *quando vedo finalmente qualcosa di utile?*

**CLS — Cumulative Layout Shift**
Misura quanto il contenuto si sposta mentre la pagina si carica. Hai presente quando stai per cliccare un bottone e tutto si sposta in basso e finisci per cliccare qualcos'altro? Quello è CLS alto. Traduzione umana: *la pagina si muove mentre leggo?*

**INP — Interaction to Next Paint**
Misura quanto ci vuole prima che la pagina risponda a un'azione (click, tocco, digitazione). Traduzione umana: *quando clicco, succede qualcosa subito?*

---

## Le cause più comuni di un sito lento

Non tutti i rallentamenti hanno la stessa causa. Alcune delle più frequenti:

- **Immagini non ottimizzate** — una foto da 5MB caricata su una pagina invece di una versione compressa da 100KB fa una differenza enorme
- **Troppe animazioni JavaScript** — effetti visivi belli ma pesanti che il browser deve calcolare in tempo reale
- **Server lento o lontano** — un hosting economico con server in America per un sito italiano introduce latenza evitabile
- **Font non ottimizzati** — caricare cinque varianti di un carattere tipografico solo per usarne due
- **Plugin e script di terze parti** — chat bot, strumenti di analisi, widget social che si caricano prima del contenuto principale

---

## Non è solo questione di tecnica

Un sito veloce non serve solo a Google. Serve alle persone reali che lo visitano.

L'anziano con una connessione lenta. Chi ti cerca da un treno. Chi ha uno smartphone di tre anni fa. Un sito che si carica in un secondo funziona per tutti. Un sito che si carica in sei secondi esclude silenziosamente una parte dei tuoi potenziali clienti.

---

*Vuoi sapere com'è la situazione del tuo sito? Scrivimi dalla pagina [contatti](/contatti) e facciamo un'analisi insieme.*

---

> **Nota tecnica:** i Core Web Vitals sono misurabili con [PageSpeed Insights](https://pagespeed.web.dev/), [Lighthouse](https://developers.google.com/web/tools/lighthouse) e [Chrome DevTools](https://developer.chrome.com/docs/devtools/). Questo sito ottiene sistematicamente 95+ sia su mobile che desktop, grazie all'architettura Astro (zero JavaScript non necessario, HTML statico, immagini ottimizzate al build time via `astro:assets`). Il framework emette HTML puro senza runtime client-side, riducendo drasticamente il Time to First Byte e il Total Blocking Time.
