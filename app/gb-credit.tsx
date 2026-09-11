"use client";

import { useEffect, useState } from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const ICON = `${BASE_PATH}/images/gbco-icon.png`;

const GB_SITE = "https://gbcompanyltda.github.io/gbcompany-landingpage/";
const GB_WHATSAPP_NUMBER = "5511930968872";
const GB_WHATSAPP_DISPLAY = "(11) 93096-8872";
const GB_WHATSAPP_URL = `https://wa.me/${GB_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Vi o site da Fornaria & General Bacon desenvolvido pela GB Company e quero saber mais sobre os serviços de vocês."
)}`;

const SERVICES = [
  { title: "Landing pages", note: "Rápidas e feitas pra converter" },
  { title: "Software sob medida", note: "Sistemas web e desktop" },
  { title: "SaaS", note: "Plataformas com assinatura" },
  { title: "Aplicativos mobile", note: "iOS e Android" },
];

export default function GbCredit() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open]);

  return (
    <>
      <p className="gb-credit">
        Desenvolvido por{" "}
        <button
          type="button"
          className="gb-credit-btn"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
        >
          <img src={ICON} alt="" width={18} height={18} aria-hidden="true" />
          gbcompany
        </button>
      </p>

      <div
        className={`gb-modal-overlay${open ? " is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div
          className="gb-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gb-modal-title"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="gb-modal-close"
            onClick={() => setOpen(false)}
            aria-label="Fechar"
          >
            &times;
          </button>

          <div className="gb-modal-head">
            <img src={ICON} alt="" width={44} height={44} aria-hidden="true" />
            <div>
              <strong>GB Company</strong>
            </div>
          </div>

          <div className="gb-modal-body">
            <h3 id="gb-modal-title">Quem fez este site?</h3>
            <p>
              A <b>GB Company</b> é um estúdio de tecnologia que desenvolve
              software sob medida — de landing pages a plataformas completas —
              para negócios que querem crescer com mais eficiência.
            </p>

            <ul className="gb-services">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <strong>{s.title}</strong>
                  <span>{s.note}</span>
                </li>
              ))}
            </ul>

            <div className="gb-modal-cta">
              <a
                className="btn btn-solid"
                href={GB_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {GB_WHATSAPP_DISPLAY}
              </a>
              <a
                className="btn btn-line"
                href={GB_SITE}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver o site
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
