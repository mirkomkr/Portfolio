import React from "react";
import { LuAppWindow, LuGithub, LuLinkedin, LuMessageCircleMore, LuFigma } from "react-icons/lu";

export default function Hero() {
  const handleContact = (e) => {
    e.preventDefault();
    // Dividi l'email in parti per confondere i bot
    const user = "mirkopasseri";
    const domain = "gmail.com"; // O il tuo dominio
    
    // Apre il client mail solo al click
    window.location.href = `mailto:${user}@${domain}`;
  };

    return (
        <section aria-label="Introduzione" className="bg-master text-primary flex flex-col text-center justify-center items-center md:items-end md:text-right gap-4 w-full min-h-screen max-w-7xl mx-auto px-8 md:px-24">
            
    {/* Titolo in Playfair Display */}
    <h1 className="text-6xl md:text-8xl font-bold mb-2 font-title leading-tight">
      Mirko Passeri
    </h1>
    
    {/* Sottotitolo con il tuo colore accent */}
    <h2 className="text-2xl md:text-3xl font-medium mb-8 text-accent/90 tracking-tight">
      Sviluppatore & Web Designer
    </h2>
            
            <nav>
                <ul className="grid grid-cols-2 md:grid-cols-4 justify-items-center items-center md:justify-end gap-6 md:gap-8 w-fit mx-auto md:mx-0 md:ml-auto mb-10">
                    <li>
                        <a href="#progetti" aria-label="Esplora i miei progetti" className="flex flex-col items-center gap-2 group transition-all">
                            <LuAppWindow aria-hidden="true" className="size-8 md:size-10 group-hover:text-accent transition-colors" />
                            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest">Progetti</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/mirko-passeri/" rel="noopener noreferrer" target="_blank" aria-label="Vai al mio profilo LinkedIn" className="flex flex-col items-center gap-2 group transition-all">
                            <LuLinkedin aria-hidden="true" className="size-8 md:size-10 group-hover:text-accent transition-colors" />
                            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest">LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/mirkomkr" rel="noopener noreferrer" target="_blank" aria-label="Vai al mio profilo GitHub" className="flex flex-col items-center gap-2 group transition-all">
                            <LuGithub aria-hidden="true" className="size-8 md:size-10 group-hover:text-accent transition-colors" />
                            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest">GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.figma.com/design/..." rel="noopener noreferrer" target="_blank" aria-label="Vai al mio progetto Figma" className="flex flex-col items-center gap-2 group transition-all">
                            <LuFigma aria-hidden="true" className="size-8 md:size-10 group-hover:text-accent transition-colors" />
                            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest">Figma</span>
                        </a>
                    </li>
                </ul>
            </nav>

<div className="flex flex-col gap-3 max-w-none text-lg md:text-xl text-primary">
        <p className="font-medium">Sono <strong>Mirko Passeri</strong>, Sviluppatore & Web Designer con base ad Anzio, IT.</p>
        <p className="font-medium">Progetto e sviluppo soluzioni digitali su misura per aiutare le persone a crescere online.</p>
        <p className="font-medium italic border-r-4 border-accent pr-4 md:border-r-0 md:border-r-accent">
            Soluzioni moderne, veloci e accessibili a tutti.
        </p>
    </div>

            <div className="mt-8">
                <button onClick={handleContact} 
                   className="inline-flex items-center gap-3 px-8 py-4 rounded-md bg-black text-white font-bold transition-all hover:bg-neutral-800 hover:-translate-y-1 shadow-xl">
                    <LuMessageCircleMore className="size-5" />
                    Contattami
                </button>
            </div>
        </section>
    );
}