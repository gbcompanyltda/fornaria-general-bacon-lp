const WHATSAPP_URL = "https://wa.me/5582991741699";
const MAPS_URL =
  "https://www.google.com/maps/place/Fornaria+Pizzaria+%26+General+Bacon/@-9.1887895,-35.3139382,19z/data=!4m6!3m5!1s0x701470038973acf:0xfceed5347215c7d2!8m2!3d-9.1889386!4d-35.3138771!16s%2Fg%2F11y2yhhd10";
const INSTAGRAM_URL = "https://www.instagram.com/fornariaegeneralbaconpatacho/";

export default function Home() {
  return (
    <>
      <header className="site">
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

      <main className="wrap" id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div>
            <p className="eyebrow">
              Rota Ecológica dos Milagres · Porto de Pedras, AL
            </p>
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
                <strong>R$ 40–140</strong> por pessoa
              </span>
              <span>
                <strong>Aberto</strong> até meia-noite
              </span>
            </div>
          </div>
          <div className="hero-photo">
            <div className="frame">
              <img
                src="/images/hero-facade.jpg"
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
              Na AL-101, entre Barra de Camaragibe e São Miguel dos Milagres —
              quem segue pro litoral norte passa praticamente na porta.
            </p>
          </div>
          <div className="road" role="list">
            <div className="stop" role="listitem">
              <div className="dot" />
              <span>Barra de Camaragibe</span>
            </div>
            <div className="stop here" role="listitem">
              <span className="pin">você está aqui</span>
              <div className="dot" />
              <span>Porto de Pedras</span>
            </div>
            <div className="stop" role="listitem">
              <div className="dot" />
              <span>Praia do Patacho</span>
            </div>
            <div className="stop" role="listitem">
              <div className="dot" />
              <span>Tatuamunha</span>
            </div>
            <div className="stop" role="listitem">
              <div className="dot" />
              <span>São Miguel dos Milagres</span>
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
                src="/images/dish-picanha.jpg"
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
            <div>
              <p className="eyebrow">Cardápio</p>
              <h2 id="menu-title">Direto da chapa, do forno e da brasa</h2>
            </div>
            <p>
              Um recorte do que mais sai — cardápio completo à mesa e no
              WhatsApp.
            </p>
          </div>

          <div className="menu-grid">
            <div>
              <div className="menu-cat">
                <div className="menu-cat-title">
                  <h3>Burguers artesanais</h3>
                  <span className="num">180g</span>
                </div>
                <p className="menu-cat-sub">
                  Carne moída selecionada, bem-justinha, vira uma delícia que
                  é o hambúrguer de 180g com opções de recheio.
                </p>

                <div className="menu-item">
                  <span className="mi-name">
                    General X
                    <span className="mi-desc">
                      Pão, burger 200g, queijo muçarela, presunto, ovo,
                      alface, tomate, maionese e bacon… claro!
                    </span>
                  </span>
                  <span className="mi-price">R$ 40,00</span>
                </div>
                <div className="menu-item">
                  <span className="mi-name">
                    Cheddar
                    <span className="mi-desc">
                      Pão, burger 200g, muito queijo cheddar, bacon e
                      maionese
                    </span>
                  </span>
                  <span className="mi-price">R$ 40,00</span>
                </div>
                <div className="menu-item">
                  <span className="mi-name">
                    Brie
                    <span className="mi-desc">
                      Pão, burger 200g, saboroso queijo brie, champignon
                      refogado na manteiga trufada, maionese e geleia de
                      pimenta
                    </span>
                  </span>
                  <span className="mi-price">R$ 45,00</span>
                </div>
                <div className="menu-item">
                  <span className="mi-name">
                    Dacasa
                    <span className="mi-desc">
                      Maionese de gorgonzola, queijo muçarela, rúcula e
                      tomate seco — combinação perfeita
                    </span>
                  </span>
                  <span className="mi-price">R$ 40,00</span>
                </div>
                <div className="menu-item">
                  <span className="mi-name">
                    Manteigão
                    <span className="mi-desc">
                      Pão, burger 200g, queijo manteiga, geleia de bacon e…
                      bacon!
                    </span>
                  </span>
                  <span className="mi-price">R$ 40,00</span>
                </div>
                <div className="menu-item">
                  <span className="mi-name">
                    Cordeiro
                    <span className="mi-desc">
                      Pão, burger 150g, queijo, maionese de ervas e bacon
                    </span>
                  </span>
                  <span className="mi-price">R$ 45,00</span>
                </div>
                <div className="menu-item">
                  <span className="mi-name">
                    Gorgonzola
                    <span className="mi-desc">
                      Pão, burger 200g, queijo gorgonzola, geleia de morango
                      e pimenta
                    </span>
                  </span>
                  <span className="mi-price">R$ 45,00</span>
                </div>
                <div className="menu-item">
                  <span className="mi-name">
                    Generalzinho
                    <span className="mi-desc">
                      Pão, burger 180g, e muito queijo acompanhado
                    </span>
                  </span>
                  <span className="mi-price">R$ 35,00</span>
                </div>
                <div className="menu-item">
                  <span className="mi-name">
                    Wagyu
                    <span className="mi-desc">
                      Pão, burger 200g, muçarela com salada
                    </span>
                  </span>
                  <span className="mi-price">R$ 55,00</span>
                </div>
                <div className="menu-item">
                  <span className="mi-name">
                    Burguer extra
                    <span className="mi-desc">120g avulso · 180g avulso</span>
                  </span>
                  <span className="mi-price">R$ 15,00 / R$ 23,00</span>
                </div>
              </div>

              <div className="menu-cat">
                <div className="menu-cat-title">
                  <h3>Smash artesanais</h3>
                  <span className="num">120g</span>
                </div>
                <div className="menu-item">
                  <span className="mi-name">
                    Simples
                    <span className="mi-desc">Um burguer 120g</span>
                  </span>
                  <span className="mi-price">R$ 30,00</span>
                </div>
                <div className="menu-item">
                  <span className="mi-name">
                    Duplo
                    <span className="mi-desc">Dois burguers 120g</span>
                  </span>
                  <span className="mi-price">R$ 35,00</span>
                </div>
                <div className="menu-item">
                  <span className="mi-name">
                    Triplo
                    <span className="mi-desc">Três burguers 120g</span>
                  </span>
                  <span className="mi-price">R$ 40,00</span>
                </div>
                <div className="menu-note">
                  <strong>Recheios do smash:</strong> Bacon (pão brioche,
                  muçarela, maionese, salada e bacon) · Cheddar Bacon (pão
                  brioche, cheddar e bacon) · Espetacular (pão, maionese,
                  molho de cheddar com farofa de bacon).
                </div>
              </div>

              <div className="menu-cat">
                <div className="menu-cat-title">
                  <h3>Para compartilhar</h3>
                  <span className="num">2–4 pessoas</span>
                </div>
                <div className="menu-item">
                  <span className="mi-name">
                    Picanha argentina ou uruguaia
                    <span className="mi-desc">
                      Acompanha arroz, feijão tropeiro, vinagrete, farofa e
                      cebola marinada · para 2 ou 4 pessoas
                    </span>
                  </span>
                </div>
                <div className="menu-item">
                  <span className="mi-name">
                    Risoto de frutos do mar
                    <span className="mi-desc">
                      Um dos pratos mais pedidos da casa
                    </span>
                  </span>
                </div>
                <div className="menu-item">
                  <span className="mi-name">
                    Risoto de carne com funghi
                    <span className="mi-desc">
                      Citado pelos clientes entre os favoritos
                    </span>
                  </span>
                </div>
                <div className="menu-note">
                  + <strong>pizzas artesanais no forno a lenha</strong>,
                  pratos executivos e sobremesas — cardápio completo à mesa e
                  pelo WhatsApp.
                </div>
              </div>
            </div>

            <div className="menu-photo-card">
              <div className="frame">
                <img
                  src="/images/cardapio-burguers.jpg"
                  alt="Página do cardápio impresso da Fornaria Pizzaria com a lista de burguers artesanais e preços"
                  width={645}
                  height={635}
                />
              </div>
              <figcaption>
                Direto do nosso cardápio impresso — burguers artesanais e
                smash.
              </figcaption>
            </div>
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
              <svg
                className="map-svg"
                viewBox="0 0 360 220"
                role="img"
                aria-label="Mapa esquemático da AL-101 mostrando a Fornaria entre Barra de Camaragibe e Praia do Patacho"
              >
                <rect x="0" y="0" width="360" height="220" fill="var(--surface)" />
                <path
                  d="M20 190 C 90 150, 120 90, 190 70 S 300 40, 340 20"
                  fill="none"
                  stroke="var(--border)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <path
                  d="M20 190 C 90 150, 120 90, 190 70 S 300 40, 340 20"
                  fill="none"
                  stroke="var(--text-muted)"
                  strokeWidth="1.4"
                  strokeDasharray="1 10"
                  strokeLinecap="round"
                  opacity=".7"
                />
                <g fontFamily="var(--font-mono), monospace" fontSize="9" fill="var(--text-muted)">
                  <circle cx="20" cy="190" r="4" fill="var(--text-muted)" />
                  <text x="30" y="193">
                    Barra de Camaragibe
                  </text>
                  <circle cx="190" cy="70" r="4" fill="var(--accent-2)" />
                  <text x="200" y="73">
                    Praia do Patacho
                  </text>
                  <circle cx="340" cy="20" r="4" fill="var(--text-muted)" />
                  <text x="290" y="34">
                    S. Miguel dos Milagres
                  </text>
                </g>
                <g>
                  <circle cx="150" cy="105" r="8" fill="var(--accent)" />
                  <circle cx="150" cy="105" r="14" fill="var(--accent)" opacity=".22" />
                  <text
                    x="163"
                    y="102"
                    fontFamily="var(--font-fraunces), serif"
                    fontStyle="italic"
                    fontSize="12"
                    fill="var(--text)"
                  >
                    Fornaria &amp; General Bacon
                  </text>
                  <text
                    x="163"
                    y="116"
                    fontFamily="var(--font-mono), monospace"
                    fontSize="9"
                    fill="var(--text-muted)"
                  >
                    AL-101 · Porto de Pedras
                  </text>
                </g>
              </svg>
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
        <p className="foot-copy">
          © 2026 Fornaria Pizzaria &amp; General Bacon · Forno a lenha, brasa
          e fumê na Rota dos Milagres.
        </p>
      </footer>

      <div className="sticky-cta" role="complementary" aria-label="Ações rápidas">
        <a className="btn btn-solid" href={WHATSAPP_URL} target="_blank" rel="noopener">
          WhatsApp
        </a>
        <a className="btn btn-line" href={MAPS_URL} target="_blank" rel="noopener">
          Como chegar
        </a>
      </div>
    </>
  );
}
