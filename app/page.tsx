import SiteHeader from "./site-header";
import GbCredit from "./gb-credit";

const ASSET_PREFIX = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${ASSET_PREFIX}${path}`;

const WHATSAPP_URL = "https://wa.me/5582991741699";
const WHATSAPP_MENU_URL = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Olá! Vim do site do General Bacon e gostaria de saber o cardápio 🙂"
)}`;
const MAPS_URL =
  "https://www.google.com/maps/place/Fornaria+Pizzaria+%26+General+Bacon/@-9.1889386,-35.3138771,18z/data=!4m6!3m5!1s0x701470038973acf:0xfceed5347215c7d2!8m2!3d-9.1889386!4d-35.3138771!16s%2Fg%2F11y2yhhd10";
const INSTAGRAM_URL = "https://www.instagram.com/fornariaegeneralbaconpatacho/";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="wrap" id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div>
            <h1 id="hero-title">
              <span className="hero-sign">
                <span className="l1">Fornaria Pizzaria</span>
                <span className="l2">&amp; General Bacon</span>
              </span>
            </h1>
            <p className="lead">
              Forno a lenha, brasa e fumê a poucos passos da Praia do Patacho.
              A parada certa pra quem viaja pela AL-101 com fome de pizza,
              smash burger ou uma picanha pra dividir.
            </p>
            <div className="cta-row">
              <a className="btn btn-solid" href="#cardapio">
                Ver cardápio
              </a>
              <a
                className="btn btn-line"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
              >
                Chamar no WhatsApp
              </a>
              <a className="btn btn-line" href="#localizacao">
                Como chegar
              </a>
            </div>
            <div className="stat-row">
              <span>
                <strong>3,8 ★</strong> · 144 avaliações no Google
              </span>
              <span>
                <strong>Aberto</strong> até meia-noite
              </span>
            </div>
          </div>
          <div className="hero-photo">
            <div className="frame">
              <img
                src={asset("/images/hero-facade.jpg")}
                alt="Fachada da Fornaria Pizzaria & General Bacon, com as placas General Bacon e Fornaria Pizzaria, mesas de madeira e plantas tropicais na entrada"
                width={900}
                height={1080}
              />
            </div>
            <div className="tag">
              <b>Direto na AL-101</b>
              Fachada reconhecível de longe — sinalização própria pra quem
              passa de carro pela rota.
            </div>
          </div>
        </section>

        <section className="route" aria-labelledby="route-title">
          <div className="route-head">
            <div>
              <p className="eyebrow">A caminho das praias</p>
              <h2
                id="route-title"
                style={{ fontSize: "1.5rem", marginTop: ".3em" }}
              >
                Bem no meio da Rota dos Milagres
              </h2>
            </div>
            <p>
              Na AL-101, entre São Miguel dos Milagres e Porto de Pedras —
              quem segue pro litoral norte passa praticamente na porta.
            </p>
          </div>
          <div className="road" role="list">
            <div className="stop" role="listitem">
              <div className="dot" />
              <span>São Miguel dos Milagres</span>
            </div>
            <div className="stop" role="listitem">
              <div className="dot" />
              <span>Tatuamunha</span>
            </div>
            <div className="stop here" role="listitem">
              <span className="pin">nós estamos aqui</span>
              <div className="dot" />
              <span>Praia do Patacho</span>
            </div>
            <div className="stop" role="listitem">
              <div className="dot" />
              <span>Porto de Pedras</span>
            </div>
          </div>
        </section>

        <section className="story" aria-labelledby="story-title">
          <div>
            <p className="eyebrow">Nossa cozinha</p>
            <h2 id="story-title">
              Do forno à brasa,{" "}
              <em className="accent-word">tudo na mesma casa</em>
            </h2>
            <p>
              A Fornaria nasceu do forno a lenha; o General Bacon, da brasa e
              do fumê. Debaixo do mesmo teto de madeira, viraram uma coisa só
              — pizzas, burgers artesanais e carnes nobres pra quem chega com
              fome de verdade depois de um dia de praia.
            </p>
            <p>
              Servimos também picanha argentina e uruguaia pra compartilhar,
              risotos autorais e pratos executivos — sempre com ingredientes
              selecionados e aquele acabamento que só se vê perto do mar.
            </p>
            <div className="badge-row">
              <span className="pill">Refeição no local</span>
              <span className="pill">Retirada na porta</span>
              <span className="pill">Forno a lenha</span>
            </div>
          </div>
          <figure className="story-photo">
            <div className="frame">
              <img
                src={asset("/images/dish-picanha.jpg")}
                alt="Picanha argentina fatiada na tábua, acompanhada de feijão tropeiro, servida na Fornaria Pizzaria & General Bacon"
                width={800}
                height={560}
              />
            </div>
            <figcaption>
              Picanha argentina ou uruguaia — para 2 ou 4 pessoas, com arroz,
              feijão tropeiro, vinagrete, farofa e cebola marinada.
            </figcaption>
          </figure>
        </section>

        <section id="cardapio" aria-labelledby="menu-title">
          <div className="menu-head">
            <p className="eyebrow">Cardápio</p>
            <h2 id="menu-title">Direto da chapa, do forno e da brasa</h2>
            <p>
              Burguers artesanais, smash, pizzas no forno a lenha, risotos e
              muito mais — chama a gente no WhatsApp que a gente manda o
              cardápio completo na hora.
            </p>
          </div>

          <div className="menu-cta">
            <a
              className="btn btn-solid menu-cta-btn"
              href={WHATSAPP_MENU_URL}
              target="_blank"
              rel="noopener"
            >
              Ver Cardápio
            </a>
          </div>
        </section>

        <section id="avaliacoes" aria-labelledby="rev-title">
          <div className="rev-top">
            <div className="rating-card">
              <p className="eyebrow">Avaliações</p>
              <div className="rating-big">3,8</div>
              <div className="stars" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="var(--accent)">
                  <path d="M10 1.5l2.47 5.4 5.93.56-4.48 3.98 1.35 5.81L10 14.9l-5.27 3.35 1.35-5.81L1.6 7.46l5.93-.56L10 1.5z" />
                </svg>
                <svg viewBox="0 0 20 20" fill="var(--accent)">
                  <path d="M10 1.5l2.47 5.4 5.93.56-4.48 3.98 1.35 5.81L10 14.9l-5.27 3.35 1.35-5.81L1.6 7.46l5.93-.56L10 1.5z" />
                </svg>
                <svg viewBox="0 0 20 20" fill="var(--accent)">
                  <path d="M10 1.5l2.47 5.4 5.93.56-4.48 3.98 1.35 5.81L10 14.9l-5.27 3.35 1.35-5.81L1.6 7.46l5.93-.56L10 1.5z" />
                </svg>
                <svg viewBox="0 0 20 20">
                  <defs>
                    <clipPath id="star4clip">
                      <rect x="0" y="0" width="16" height="20" />
                    </clipPath>
                  </defs>
                  <path
                    d="M10 1.5l2.47 5.4 5.93.56-4.48 3.98 1.35 5.81L10 14.9l-5.27 3.35 1.35-5.81L1.6 7.46l5.93-.56L10 1.5z"
                    fill="var(--border)"
                  />
                  <path
                    clipPath="url(#star4clip)"
                    d="M10 1.5l2.47 5.4 5.93.56-4.48 3.98 1.35 5.81L10 14.9l-5.27 3.35 1.35-5.81L1.6 7.46l5.93-.56L10 1.5z"
                    fill="var(--accent)"
                  />
                </svg>
                <svg viewBox="0 0 20 20" fill="var(--border)">
                  <path d="M10 1.5l2.47 5.4 5.93.56-4.48 3.98 1.35 5.81L10 14.9l-5.27 3.35 1.35-5.81L1.6 7.46l5.93-.56L10 1.5z" />
                </svg>
              </div>
              <p className="rating-sub">
                144 avaliações no Google · desde as primeiras semanas de rota
              </p>
              <div className="rating-links">
                <a href={MAPS_URL} target="_blank" rel="noopener">
                  Ver todas as avaliações no Google Maps →
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener">
                  @fornariaegeneralbaconpatacho no Instagram →
                </a>
              </div>
            </div>

            <div className="quote-grid">
              <div className="quote-card">
                <p className="q">
                  &quot;Atendimento ao telefone foi muito gentil, a pizza saiu
                  em tempo record, super recheada e saborosa… se a fome
                  bater, peçam sem medo.&quot;
                </p>
                <div className="who">
                  <span>Retirada na porta</span>
                  <span>Google · 7 meses atrás</span>
                </div>
              </div>
              <div className="quote-card">
                <p className="q">
                  &quot;O lanche da casa é enorme — gostamos bastante. Se
                  soubesse que era tão grande, tinha pedido só um pra
                  dividir.&quot;
                </p>
                <div className="who">
                  <b>André Luiz Gandolfo</b>
                  <span>Local Guide · Google</span>
                </div>
              </div>
              <div className="quote-card">
                <p className="q">
                  &quot;Ambiente, comida, serviço — tudo bastante honesto e
                  acima da média da região.&quot;
                </p>
                <div className="who">
                  <span>Avaliação</span>
                  <span>Google</span>
                </div>
              </div>
              <div className="quote-card">
                <p className="q">&quot;Lugar espetacular 👏👏&quot;</p>
                <div className="who">
                  <b>betobarreiros</b>
                  <span>Instagram</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="localizacao" aria-labelledby="loc-title">
          <div className="loc-grid">
            <div className="loc-card">
              <p className="eyebrow">Localização</p>
              <h2 id="loc-title">Bem na rota, fácil de achar</h2>
              <div className="info-list">
                <div className="info-row">
                  <span className="ico" aria-hidden="true">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M12 21s7-6.4 7-12a7 7 0 10-14 0c0 5.6 7 12 7 12z" />
                      <circle cx="12" cy="9" r="2.4" />
                    </svg>
                  </span>
                  <div className="val">
                    <span className="lbl">Endereço</span>
                    AL-101, Porto de Pedras, AL, 57945-000
                    <small>Praia do Patacho — Rota Ecológica dos Milagres</small>
                  </div>
                </div>
                <div className="info-row">
                  <span className="ico" aria-hidden="true">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 2 .7 3a2 2 0 01-.4 2.1L8 10.3a16 16 0 006 6l1.5-1.5a2 2 0 012.1-.4c1 .3 2 .5 3 .7a2 2 0 011.7 2z" />
                    </svg>
                  </span>
                  <div className="val">
                    <span className="lbl">Telefone / WhatsApp</span>
                    <a
                      href="tel:+5582991741699"
                      style={{ textDecoration: "none" }}
                    >
                      (82) 99174-1699
                    </a>
                  </div>
                </div>
                <div className="info-row">
                  <span className="ico" aria-hidden="true">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3.3 2" />
                    </svg>
                  </span>
                  <div className="val">
                    <span className="lbl">Horário</span>
                    Funciona até meia-noite
                    <small>
                      Horário pode variar por dia — confira o horário
                      atualizado no Google Maps antes de ir.
                    </small>
                  </div>
                </div>
                <div className="info-row">
                  <span className="ico" aria-hidden="true">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M3 7h18M3 12h18M3 17h18" />
                    </svg>
                  </span>
                  <div className="val">
                    <span className="lbl">Como funciona</span>
                    Refeição no local · Retirada na porta
                    <small>R$ 40–140 por pessoa, segundo clientes</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="map-card">
              <iframe
                className="map-frame"
                src="https://www.google.com/maps?q=-9.1889386,-35.3138771&z=17&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da Fornaria Pizzaria & General Bacon"
              />
              <div className="btn-row">
                <a
                  className="btn btn-solid"
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener"
                >
                  Abrir no Google Maps
                </a>
                <a
                  className="btn btn-line"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              Fornaria <em>&amp; General Bacon</em>
            </div>
            <p className="foot-meta">
              AL-101, Porto de Pedras, AL, 57945-000 — na Rota Ecológica dos
              Milagres, perto da Praia do Patacho.
            </p>
          </div>
          <div className="foot-links">
            <a href="tel:+5582991741699">(82) 99174-1699</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener">
              Instagram
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener">
              Google Maps
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          <p className="foot-copy">
            © 2026 Fornaria Pizzaria &amp; General Bacon · Forno a lenha, brasa
            e fumê na Rota dos Milagres.
          </p>
          <GbCredit />
        </div>
      </footer>
    </>
  );
}
