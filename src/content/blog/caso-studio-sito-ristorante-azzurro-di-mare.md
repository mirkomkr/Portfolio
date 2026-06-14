---
title: "Caso studio: sito demo per un ristorante di pesce"
description: "Come ho progettato un sito demo per un ristorante di pesce, con attenzione a performance, accessibilità, SEO tecnica e chiarezza dei contenuti."
pubDate: 2026-06-14
author: "Mirko Passeri"
tags:
  [
    "Caso studio frontend",
    "Astro",
    "Performance web",
    "Accessibilità web",
    "SEO tecnica",
    "Sito ristorante",
    "Realizzare sito web",
    "Anzio",
    "Nettuno",
    "Attività locali",
  ]
image: ../../assets/blog/cover-caso-studio-ristorante-azzurro-di-mare.webp
imageAlt: "Illustrazione minimal di un ristorante collegato a una finestra browser per rappresentare il caso studio Azzurro di Mare"
related:
  - cosa-vuol-dire-sito-lento
  - accessibilita-web
  - perche-la-tua-attivita-ha-bisogno-di-un-sito-web
faq:
  - q: "Azzurro di Mare è un ristorante reale?"
    a: "No. Azzurro di Mare è un progetto dimostrativo creato come caso studio frontend. Il ristorante è fittizio e non accetta prenotazioni reali. Serve a mostrare come potrebbe essere progettato un sito moderno per un’attività locale."

  - q: "Perché creare un sito demo per un ristorante?"
    a: "Perché un ristorante è un esempio concreto di attività locale con esigenze reali: presentare il menu, raccontare l’atmosfera, aiutare le persone a trovare informazioni utili da smartphone e guidarle verso una prenotazione o un contatto."

  - q: "Quali aspetti tecnici sono stati curati?"
    a: "Il progetto è stato costruito con attenzione a performance mobile, accessibilità, SEO tecnica, struttura dei contenuti, immagini ottimizzate, dati strutturati prudenti, header di sicurezza e navigazione chiara."

  - q: "Che tecnologia è stata usata?"
    a: "Il sito è stato realizzato con Astro, privilegiando un approccio statico, leggero e performante. L’obiettivo era ridurre JavaScript non necessario e costruire pagine veloci, accessibili e semplici da mantenere."

  - q: "Un sito per ristoranti deve essere per forza complesso?"
    a: "No. Molti ristoranti hanno bisogno prima di tutto di informazioni chiare: menu, posizione, atmosfera, orari, contatti e un percorso semplice verso la prenotazione. La complessità va aggiunta solo quando serve davvero."

  - q: "Questo tipo di approccio è utile anche per altre attività locali?"
    a: "Sì. La stessa logica può essere adattata a centri estetici, studi professionali, strutture ricettive, attività artigianali e piccole imprese che hanno bisogno di un sito chiaro, veloce e credibile."

---

## In parole normali

Un sito per un ristorante non dovrebbe limitarsi a “esserci”.

Dovrebbe aiutare una persona a capire subito che tipo di posto è, cosa propone, dove si trova, come consultare il menu e quale azione fare dopo: prenotare, chiamare, scrivere o approfondire.

Per questo ho creato **Azzurro di Mare**, un progetto dimostrativo pensato come caso studio frontend per un ristorante di pesce immaginario tra Anzio e Nettuno.

Il ristorante non è reale.
Il sito, invece, è costruito come se il problema fosse reale.

L’obiettivo non era fare una grafica bella e basta, ma progettare un’esperienza credibile, veloce, accessibile e misurabile.

---

## Perché partire da un ristorante

Un ristorante è un buon esempio di attività locale perché ha bisogni molto concreti.

Chi visita il sito spesso vuole risposte rapide:

* che tipo di cucina propone;
* com’è l’atmosfera;
* dove si trova;
* se il menu è consultabile da smartphone;
* come si prenota;
* se il sito sembra affidabile.

Sono domande semplici, ma molti siti le rendono più difficili del necessario.

Pagine lente, menu poco leggibili, immagini pesanti, testi confusi, pulsanti piccoli, informazioni sparse e poca attenzione alla navigazione mobile possono creare attrito proprio nel momento in cui una persona sta decidendo se contattare l’attività.

Il caso studio nasce da qui: mostrare come un sito vetrina locale possa essere costruito in modo più ordinato, tecnico e concreto.

---

## L’obiettivo del progetto

Azzurro di Mare è stato progettato per simulare un sito ristorante moderno, ma senza fingere che l’attività esista davvero.

Questo punto per me era importante: il progetto doveva essere chiaro anche dal punto di vista etico. Per questo il sito contiene note visibili che spiegano che si tratta di un progetto demo e che non accetta prenotazioni reali.

Gli obiettivi principali erano:

**1. Chiarezza dei contenuti.**
Il visitatore deve capire subito cosa sta guardando, dove andare e cosa può fare.

**2. Performance mobile.**
Il sito deve caricarsi velocemente, soprattutto da smartphone.

**3. Accessibilità.**
Navigazione, testi, immagini, form e struttura devono essere pensati per essere usabili dal maggior numero possibile di persone.

**4. SEO tecnica.**
Title, description, canonical, sitemap, robots, dati strutturati e meta social devono essere configurati correttamente.

**5. Credibilità visiva.**
Il progetto deve avere un’identità coerente senza ricorrere a effetti pesanti o scelte grafiche inutili.

---

## Lo stack: Astro e approccio statico

Per questo progetto ho scelto **Astro**, perché era adatto all’obiettivo: costruire un sito leggero, statico e orientato ai contenuti.

Un sito ristorante non ha sempre bisogno di un’app complessa. Spesso ha bisogno di pagine veloci, ben organizzate e semplici da consultare.

L’approccio è stato quindi:

* HTML semantico;
* CSS organizzato;
* immagini ottimizzate;
* poco JavaScript;
* attenzione alla navigazione da tastiera;
* struttura chiara delle pagine;
* contenuti pensati per utenti reali, non solo per Lighthouse.

La parte interattiva, come il percorso di prenotazione demo, è stata trattata con prudenza: il form serve a mostrare il flusso, non a inviare richieste reali a un ristorante inesistente.

---

## Le pagine principali

Il progetto è stato organizzato intorno a poche pagine essenziali:

**Homepage.**
Presenta il concept, l’atmosfera del ristorante demo, il menu, la location immaginaria e il percorso verso la prenotazione.

**Menu.**
Mostra come potrebbero essere organizzati antipasti, primi, secondi e informazioni utili, con testi leggibili anche da mobile.

**Il ristorante.**
Racconta l’identità del progetto e l’atmosfera del locale immaginario.

**Location.**
Usa Anzio e Nettuno come scenario del caso studio, senza indicare una sede reale.

**Prenotazione.**
Simula un flusso di prenotazione, dichiarando chiaramente che non viene inviata nessuna richiesta reale.

**Caso studio.**
Raccoglie le scelte progettuali e tecniche alla base del lavoro.

**Crediti immagini e note demo.**
Servono a mantenere trasparenza su immagini, natura fittizia del progetto e uso dimostrativo del sito.

---

## Performance: il punto più interessante

La parte più interessante del progetto è stata l’ottimizzazione mobile.

Dopo le prime verifiche, il sito era già leggero: poco peso pagina, poche richieste, nessun JavaScript superfluo e tempi server molto bassi.

Eppure il risultato mobile non era ancora allineato alla qualità della build.

Il problema non era Astro.
Non era nemmeno un sito “pesante”.

Il collo di bottiglia era più sottile: una competizione di rete tra immagine hero, font esterni e risorse above-the-fold.

La soluzione non è stata rifare il sito, ma intervenire in modo mirato:

* rimozione del preload del foglio CSS di Google Fonts;
* mantenimento del caricamento asincrono dei font;
* aggiunta di una variante intermedia dell’immagine hero;
* mantenimento di `loading="eager"` e `fetchpriority="high"` sulla hero;
* nessun lazy loading sull’immagine principale;
* nessun redesign artificiale solo per migliorare il punteggio.

Dopo questa micro-ottimizzazione, la homepage ha raggiunto un risultato molto più coerente con il tipo di progetto.

---

## Risultato tecnico finale

L’audit finale sulla URL pubblica ha restituito:

* Performance mobile: 99;
* Performance desktop: 98;
* Accessibilità: 100;
* SEO: 100;
* Best Practices: 100;
* punteggio URL: A, 100/100.

Le metriche mobile principali sono risultate:

* LCP: 1.9 s;
* FCP: 1.1 s;
* TBT: 0 ms;
* CLS: 0.051;
* peso pagina: circa 0.40 MB;
* richieste totali: 10.

Questi numeri non sono un trofeo fine a sé stesso.

Servono a dimostrare una cosa concreta: anche un sito visivo, con immagini e identità editoriale, può restare veloce se viene progettato con attenzione.

---

## Accessibilità: non come aggiunta finale

Nel progetto ho curato l’accessibilità fin dalla struttura.

Questo significa usare HTML semantico, una gerarchia chiara dei titoli, testi leggibili, link comprensibili, immagini con testi alternativi, skip link per saltare al contenuto principale e controlli pensati per la navigazione da tastiera.

Gli audit automatici non sostituiscono una verifica manuale completa, ma sono utili per intercettare problemi evidenti.

Nel caso di Azzurro di Mare, Lighthouse non ha rilevato problemi automatici di accessibilità sulla homepage.

Questo non vuol dire “accessibilità perfetta”.
Vuol dire che la base tecnica è solida e che il progetto è stato costruito con attenzione.

---

## SEO tecnica e dati strutturati

Per la SEO tecnica ho lavorato sugli elementi fondamentali:

* title chiaro;
* meta description descrittiva;
* canonical;
* sitemap;
* robots.txt;
* Open Graph;
* Twitter Card;
* dati strutturati JSON-LD;
* struttura heading ordinata;
* contenuti coerenti con il contesto locale.

Un punto importante: non ho usato schema `Restaurant` o `LocalBusiness`.

Sarebbe stato scorretto, perché Azzurro di Mare non è un ristorante reale.

Ho usato invece dati strutturati più prudenti, come `WebSite` e `WebPage`, per descrivere correttamente il sito senza inventare informazioni commerciali reali, recensioni, indirizzi o orari.

Questa è una scelta tecnica, ma anche professionale: la SEO non deve diventare un modo per dichiarare cose false.

---

## Sicurezza e qualità tecnica

Anche su un sito statico ha senso curare alcuni dettagli tecnici.

Sul progetto sono stati configurati diversi header di sicurezza:

* `Strict-Transport-Security`;
* `X-Frame-Options`;
* `X-Content-Type-Options`;
* `Referrer-Policy`;
* `Permissions-Policy`.

Non è stata aggiunta una Content Security Policy rigida in questa fase, perché avrebbe richiesto una configurazione più attenta rispetto ai font esterni e alle risorse caricate.

Meglio non aggiungere una CSP fragile solo per poter dire “c’è”.

La sicurezza, come la performance, non dovrebbe essere cosmetica.

---

## Confronto con siti reali del settore

Per dare un contesto al lavoro, ho confrontato la homepage demo con alcune URL reali di ristoranti della zona.

Il confronto non è un giudizio sul valore dell’attività o sulla qualità del ristorante.
È un’analisi tecnica automatizzata sulla singola URL presa in esame.

Il risultato ha mostrato un vantaggio del progetto demo su diversi aspetti:

* performance mobile;
* accessibilità automatica;
* SEO tecnica;
* best practices;
* header di sicurezza;
* immagini ottimizzate;
* meta social;
* dati strutturati.

Questo non significa che un sito demo “valga più” di un’attività reale.

Significa che ci sono margini tecnici concreti su cui molte attività locali possono lavorare per migliorare la propria presenza online.

---

## Cosa dimostra questo caso studio

Questo progetto dimostra che un sito per attività locale può essere:

**Veloce.**
Non serve caricare decine di script o immagini enormi per raccontare bene un’attività.

**Chiaro.**
Le persone devono trovare subito informazioni, percorsi e azioni principali.

**Accessibile.**
Un sito fatto bene deve poter essere usato dal maggior numero possibile di persone.

**Misurabile.**
Le scelte tecniche possono essere verificate con audit, metriche e controlli concreti.

**Credibile.**
Anche un progetto demo deve essere trasparente, non fingere dati reali e non usare scorciatoie SEO scorrette.

---

## Non solo codice: metodo

La parte più importante del progetto non è stata “scrivere codice”.

È stata prendere decisioni.

Quale struttura usare.
Quali contenuti mostrare.
Quali informazioni evitare perché non reali.
Quali immagini ottimizzare.
Quali metriche leggere.
Quali problemi ignorare perché non prioritari.
Quali micro-interventi fare senza stravolgere tutto.

Questo è il tipo di lavoro che considero importante in un progetto web: non solo produrre pagine, ma costruire un sistema chiaro, utile e verificabile.

---

## Conclusione

Azzurro di Mare è un progetto dimostrativo, ma nasce da problemi reali.

Molte attività locali hanno bisogno di siti più chiari, più veloci e più affidabili. Non sempre serve una piattaforma complessa. Spesso serve un sito costruito bene, con attenzione ai contenuti, alla struttura, alle performance e all’esperienza delle persone.

Questo caso studio è un esempio di come affronto un progetto: non partendo solo dall’estetica, ma da obiettivi concreti, qualità tecnica e cura dell’esperienza utente.

Puoi vedere il progetto qui: [Azzurro di Mare](https://azzurro-di-mare.mirkopasseri.it/).

---

*Se hai un’attività locale e vuoi capire se il tuo sito comunica in modo chiaro, veloce e professionale, puoi scrivermi dalla pagina [contatti](/contatti/).*

---

> **Nota tecnica:** i risultati citati derivano da audit Lighthouse/MirkoBot sulla singola URL analizzata e non da un crawl completo del sito né da dati reali utenti CrUX. Le metriche lab sono utili per individuare problemi tecnici e confrontare scenari controllati, ma non sostituiscono test manuali, verifica da dispositivi reali e analisi del comportamento degli utenti. Il progetto Azzurro di Mare è un caso studio dimostrativo: per questo sono stati usati dati strutturati prudenti come `WebSite` e `WebPage`, evitando schema `Restaurant`, `LocalBusiness`, recensioni, orari o indirizzi non reali.
