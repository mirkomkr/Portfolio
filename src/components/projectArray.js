import LittleLemon from "../assets/progetti/Little-Lemon-Meta-FrontEnd.webp";
import AppMeteo from "../assets/progetti/app-metep-clima-e-mare.webp";
import DtfItalia from "../assets/progetti/dtf-italia.webp";
import ToDoListReact from "../assets/progetti/to-do-list-react.webp";
import ToDoListVanillaJS from "../assets/progetti/to-do-list-vanilla-JS.webp";
import AzzurroDiMare from '../assets/progetti/azzurro-di-mare.webp';

export const projects = [
  {
    title: 'Azzurro di Mare',
    description:
      'Progetto dimostrativo per un ristorante di pesce immaginario, sviluppato con Astro. Integra un form di prenotazione demo in Vue 3 e un’implementazione responsive, con attenzione ad accessibilità, performance, ottimizzazione delle immagini e a uno scenario di SEO tecnica e locale per Anzio e Nettuno.',
    image: AzzurroDiMare,
    altimage:
      'Screenshot del sito Azzurro di Mare, un progetto dimostrativo pensato come caso studio frontend per un ristorante di pesce immaginario tra Anzio e Nettuno.',
    classification: 'demo',
    classificationLabel: 'Caso studio demo',
    caseStudyLink: '/blog/caso-studio-sito-ristorante-azzurro-di-mare/',
    link: 'https://azzurro-di-mare.mirkopasseri.it/',
    lighthouseScore: 100,
  },
  {
    title: 'DTF Italia',
    description:
      'E-commerce headless per servizi di stampa professionale, con frontend Next.js e Tailwind CSS, integrazione WooCommerce, flussi di configurazione e ordine e upload dei file su AWS S3. Il lavoro comprende architettura frontend, performance, accessibilità e SEO tecnica locale per Roma.',
    image: DtfItalia,
    altimage: 'Screenshot del sito DTF Italia, e-commerce per la stampa professionale.',
    classification: 'client',
    classificationLabel: 'Progetto cliente attivo',
    link: 'https://www.dtfitalia.it/',
    lighthouseScore: 100,
  },
  {
    title: 'App Meteo',
    description:
      'App React per consultare meteo terrestri e marini in tempo reale su qualsiasi località. Integra le API Open-Meteo con fetch paralleli, ricerca con debounce e geolocalizzazione automatica. Ottimizzata con un sistema di cache su localStorage per ridurre le chiamate inutili. Stack: React 19, Vite, Tailwind CSS 4.',
    image: AppMeteo,
    altimage: "Screenshot dell'app meteo, fornisce dati meteo in tempo reale per mare e terra.",
    classification: 'personal',
    classificationLabel: 'Progetto personale',
    link: 'https://meteo-clima-e-mare.vercel.app/',
  },
  {
    title: 'To Do List React',
    description:
      'Todo List App App React per gestire le proprie attività quotidiane. Supporta aggiunta, modifica ed eliminazione dei task, con salvataggio automatico in localStorage. Costruita con React 19 e Vite 7, è strutturata in componenti modulari riutilizzabili.',
    image: ToDoListReact,
    altimage:
      "Screenshot dell'app To Do List React, permette di creare e gestire un elenco di task.",
    classification: 'personal',
    classificationLabel: 'Progetto personale',
    link: 'https://react-todo-app-flax-omega.vercel.app/',
  },
  {
    title: 'Little Lemon',
    description:
      'Capstone project del Meta Front-End Developer Certificate: sistema di prenotazione tavoli costruito con React, form validation, React Router e design responsive. Include test unitari e best practice di accessibilità.',
    image: LittleLemon,
    altimage:
      'Screenshot del sito Little Lemon, un capstone project per la certificazione Frontend Meta.',
    classification: 'educational',
    classificationLabel: 'Progetto formativo',
    link: 'https://little-lemon-capstone-meta-frontend.vercel.app/',
  },
  {
    title: 'To Do List Vanilla JS',
    description:
      'App vanilla per gestire le attività quotidiane: aggiungi task con Invio, completali o eliminali, e filtra per stato. I dati persistono grazie al localStorage.',
    image: ToDoListVanillaJS,
    altimage:
      "Screenshot dell'app To Do List Vanilla JS, permette di creare e gestire un elenco di task.",
    classification: 'personal',
    classificationLabel: 'Progetto personale',
    link: 'https://codepen.io/mirkomkr/full/PwYBxOo',
  },
];
