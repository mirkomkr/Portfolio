---
title: "Cos'è l'accessibilità web (e perché riguarda anche la tua attività)"
description: "Dal 2025 esiste una legge europea che riguarda i siti web. Ma l'accessibilità non è solo burocrazia: è il modo in cui il tuo sito parla a tutti i tuoi clienti, non solo ad alcuni."
pubDate: 2026-05-20
author: "Mirko Passeri"
tags:
  [
    "accessibilità web",
    "WCAG",
    "European Accessibility Act",
    "Realizzare sito web",
    "Anzio",
    "Nettuno",
    "Pomezia",
    "Latina",
    "Aprilia",
  ]
image: ../../assets/blog/accessibilita-web.webp
imageAlt: "Illustrazione minimal: laptop connesso a icone che rappresentano utenti con diverse esigenze di accessibilità"
---

## In parole normali

"Accessibilità web" suona come un termine tecnico per addetti ai lavori. Non lo è.

Vuol dire semplicemente questo: un sito web accessibile funziona bene per chiunque lo visiti — indipendentemente da come naviga, che dispositivo usa, che difficoltà ha o non ha.

Non è una funzione extra da aggiungere alla fine. È un modo di costruire le cose fin dall'inizio.

---

## La legge entrata in vigore nel 2025

Nel giugno 2025 è entrato in vigore in Italia il **European Accessibility Act (EAA)**, la direttiva europea che stabilisce requisiti minimi di accessibilità per prodotti e servizi digitali — inclusi i siti web.

Non è una legge rivolta solo ai grandi portali istituzionali. Riguarda chiunque metta un servizio digitale a disposizione del pubblico nell'Unione Europea.

Cosa vuol dire concretamente? Che un sito web deve essere utilizzabile anche da chi ha disabilità visive, uditive, motorie o cognitive. Non è una raccomandazione — è un requisito.

---

## Chi sono le persone che escludi senza saperlo

Ecco dove molti si perdono: pensano che "accessibilità" significhi "sito per persone con gravi disabilità". In realtà, le situazioni in cui un sito inaccessibile crea problemi sono molto più comuni di quanto si creda.

**Le barriere visive non riguardano solo chi non vede.**
Testo piccolo e colori a basso contrasto creano problemi a chiunque legga sotto il sole, agli anziani, a chi usa uno schermo mediocre. Sono milioni di persone.

**Le barriere motorie non riguardano solo chi ha disabilità motorie.**
Chi naviga con una mano sola mentre porta la spesa, chi ha le dita fredde e fatica a cliccare pulsanti piccoli — sono situazioni normalissime che un sito mal costruito rende frustranti.

**Le barriere cognitive non riguardano solo chi ha difficoltà cognitive.**
Pagine dense di testo senza struttura, menù incomprensibili, form che non spiegano gli errori — sono problemi per chiunque abbia fretta o non sia particolarmente esperto di tecnologia.

Tutte persone reali. Tutti tuoi potenziali clienti.

---

## Perché Google premia i siti accessibili

Non è un caso. Google valuta l'accessibilità come un segnale di qualità per due motivi precisi.

Il primo è strutturale: un sito accessibile ha HTML semantico corretto, testo alternativo per le immagini, struttura dei titoli logica. Sono le stesse cose che aiutano Google a capire di cosa parla il sito.

Il secondo è pragmatico: Google vuole mostrare ai suoi utenti siti che funzionano per tutti. Un sito che esclude una parte degli utenti è, per definizione, un sito di qualità inferiore.

Il risultato: siti accessibili tendono a posizionarsi meglio. Non è magia — è una conseguenza diretta di come funzionano i motori di ricerca.

---

## 5 cose concrete che rendono un sito accessibile (o no)

**1. Il contrasto dei colori.**
Il testo deve essere leggibile su qualsiasi sfondo. Esistono standard precisi (ratio minimo 4.5:1 per testo normale). Testo grigio chiaro su sfondo bianco — comune nei design moderni — spesso non supera questa soglia.

**2. Il testo alternativo sulle immagini.**
Ogni immagine che porta informazione deve avere un testo alternativo (`alt`) descrittivo. Non "immagine1.jpg" — una descrizione reale di cosa mostra. È quello che leggono i lettori di schermo e quello che Google indicizza.

**3. La navigazione da tastiera.**
Un sito deve potersi usare completamente senza mouse. Chi non può usare un mouse deve poter navigare con Tab, Invio e le frecce. Questo si rompe spessissimo nei siti costruiti senza attenzione.

**4. I form con etichette.**
Un campo di testo senza etichetta visibile è inutilizzabile per chi usa un lettore di schermo. Ogni campo deve avere un `<label>` collegato correttamente — non solo un placeholder che scompare quando scrivi.

**5. La struttura dei titoli.**
I titoli (H1, H2, H3...) non sono solo questione di dimensione del font. Definiscono la gerarchia del contenuto — per i lettori di schermo, per Google, e per chiunque scannerizzi la pagina cercando informazioni.

---

## Non è un costo extra: è qualità

Quando un sito è costruito correttamente dall'inizio, l'accessibilità non è un costo aggiuntivo — è una conseguenza naturale di fare le cose bene.

Il problema arriva quando si tenta di "aggiungere l'accessibilità" a un sito già costruito male. In quel caso sì, diventa lavoro extra. Ma è lo stesso tipo di problema che si ha quando si cerca di sistemare le fondamenta di una casa già costruita.

Ho conseguito la certificazione **WAI0.1x — Introduction to Web Accessibility**, rilasciata da W3C e edX, per integrare questo principio in ogni progetto — non come requisito da spuntare, ma come modo di ragionare fin dalla prima riga di codice.

---

_Se vuoi sapere se il tuo sito attuale ha problemi di accessibilità, scrivimi dalla pagina [contatti](/contatti)._

---

> **Nota tecnica:** lo standard di riferimento è WCAG 2.1 livello AA, ora richiesto dal EAA. Comprende 50 criteri di successo organizzati su tre principi: Percepibile, Utilizzabile, Comprensibile, Robusto (POUR). Gli strumenti di audit automatico (Axe, Lighthouse Accessibility) coprono circa il 30-40% dei problemi reali — il restante richiede test manuali e testing con screen reader (NVDA, VoiceOver). In Astro, l'accessibilità parte da HTML semantico nativo: niente `<div>` cliccabili, `<button>` per le azioni, `<a>` per la navigazione, `role` e `aria-*` solo quando il markup nativo non è sufficiente.
