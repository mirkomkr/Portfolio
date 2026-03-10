import LittleLemon from "../assets/progetti/Little-Lemon-Meta-FrontEnd.webp";
import AppMeteo from "../assets/progetti/app-metep-clima-e-mare.webp";
import DtfItalia from "../assets/progetti/dtf-italia.webp";
import ToDoListReact from "../assets/progetti/to-do-list-react.webp";
import ToDoListVanillaJS from "../assets/progetti/to-do-list-vanilla-JS.webp";
import GeorgeRomero from "../assets/progetti/george-romero-tribute-page.webp";

export const projects = [
  {
    title: "DTF Italia",
    description:
      "E-commerce headless ad alte prestazioni per servizi di stampa professionale. Sviluppato con Next.js e Tailwind CSS, integrato con WooCommerce e AWS S3 per una gestione affidabile degli ordini. Focus su accessibilità e ottimizzazione SEO locale (Roma).",
    image: DtfItalia,
    altimage:
      "Screenshot del sito DTF Italia, e-commerce per la stampa professionale.",
    link: "https://www.dtfitalia.it/",
  },
  {
    title: "App Meteo",
    description:
      "App React per consultare meteo terrestri e marini in tempo reale su qualsiasi località. Integra le API Open-Meteo con fetch paralleli, ricerca con debounce e geolocalizzazione automatica. Ottimizzata con un sistema di cache su localStorage per ridurre le chiamate inutili. Stack: React 19, Vite, Tailwind CSS 4.",
    image: AppMeteo,
    altimage:
      "Screenshot dell'app meteo, fornisce dati meteo in tempo reale per mare e terra.",
    link: "https://meteo-clima-e-mare.vercel.app/",
  },
  {
    title: "To Do List React",
    description:
      "Todo List App App React per gestire le proprie attività quotidiane. Supporta aggiunta, modifica ed eliminazione dei task, con salvataggio automatico in localStorage. Costruita con React 19 e Vite 7, è strutturata in componenti modulari riutilizzabili.",
    image: ToDoListReact,
    altimage:
      "Screenshot dell'app To Do List React, permette di creare e gestire un elenco di task.",
    link: "https://react-todo-app-flax-omega.vercel.app/",
  },
  {
    title: "Little Lemon",
    description:
      "Capstone project del Meta Front-End Developer Certificate: sistema di prenotazione tavoli costruito con React, form validation, React Router e design responsive. Include test unitari e best practice di accessibilità.",
    image: LittleLemon,
    altimage:
      "Screenshot del sito Little Lemon, un capstone project per la certificazione Frontend Meta.",
    link: "https://little-lemon-capstone-meta-frontend.vercel.app/",
  },
  {
    title: "To Do List Vanilla JS",
    description:
      "App vanilla per gestire le attività quotidiane: aggiungi task con Invio, completali o eliminali, e filtra per stato. I dati persistono grazie al localStorage.",
    image: ToDoListVanillaJS,
    altimage:
      "Screenshot dell'app To Do List Vanilla JS, permette di creare e gestire un elenco di task.",
    link: "https://codepen.io/mirkomkr/full/PwYBxOo",
  },
  {
    title: "George A. Romero Tribute Page",
    description:
      "Pagina tributo a George A. Romero sviluppata in HTML e CSS. Design minimalista e completamente responsivo, progetto per la certificazione FreeCodeCamp.",
    image: GeorgeRomero,
    altimage:
      "Screenshot della tribute page di George A. Romero, progetto per la certificazione FreeCodeCamp.",
    link: "https://codepen.io/mirkomkr/full/xxvLqBJ",
  },
];
