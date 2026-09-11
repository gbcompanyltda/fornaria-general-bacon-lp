"use client";

import { useEffect, useRef, useState } from "react";

const WHATSAPP_URL = "https://wa.me/5582991741699";

export default function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      // Perto do topo: sempre visível.
      if (y < 80) {
        setHidden(false);
      } else if (delta > 6) {
        // Rolando para baixo: esconde.
        setHidden(true);
      } else if (delta < -6) {
        // Rolando para cima: mostra.
        setHidden(false);
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site${hidden ? " is-hidden" : ""}`}>
      <div className="nav-row">
        <a className="brandmark" href="#top">
          <span className="ribbon">
            Fornaria <b>&amp; General Bacon</b>
          </span>
        </a>
        <nav className="links">
          <a href="#cardapio">Cardápio</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href="#localizacao">Localização</a>
        </nav>
        <a
          className="btn btn-solid"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
