import type { CSSProperties } from "react";

function Sk({
  w,
  h,
  className = "",
  style,
}: {
  w?: string | number;
  h?: string | number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={`sk ${className}`}
      style={{ width: w, height: h, ...style }}
    />
  );
}

export default function PageSkeleton() {
  return (
    <div id="site-skeleton" aria-hidden="true">
      <div className="sk-header">
        <div className="nav-row">
          <Sk className="sk-brand" />
          <span className="sk-navlinks">
            <Sk w="64px" h="12px" />
            <Sk w="80px" h="12px" />
            <Sk w="86px" h="12px" />
          </span>
          <Sk className="sk-btn" w="118px" />
        </div>
      </div>

      <div className="wrap sk-wrap">
        <section className="hero">
          <div>
            <Sk h="2.6rem" w="88%" className="sk-title" />
            <Sk h="2.6rem" w="68%" className="sk-title" />
            <div style={{ marginTop: "1.3em" }}>
              <Sk h=".95rem" w="94%" className="sk-line" />
              <Sk h=".95rem" w="86%" className="sk-line" />
              <Sk h=".95rem" w="55%" className="sk-line" />
            </div>
            <div className="cta-row" style={{ marginTop: 28 }}>
              <Sk className="sk-btn" w="132px" />
              <Sk className="sk-btn" w="168px" />
              <Sk className="sk-btn" w="136px" />
            </div>
            <div className="stat-row" style={{ marginTop: 34 }}>
              <Sk w="180px" h="1rem" />
              <Sk w="150px" h="1rem" />
            </div>
          </div>
          <div className="hero-photo">
            <Sk className="sk-photo" />
          </div>
        </section>

        <section className="route">
          <div className="route-head">
            <div>
              <Sk w="160px" h=".72rem" />
              <Sk w="260px" h="1.5rem" className="sk-title" />
            </div>
            <Sk w="340px" h=".9rem" />
          </div>
          <div className="road" role="list">
            {[0, 1, 2, 3].map((i) => (
              <div className="stop" role="listitem" key={i}>
                <Sk w="9px" h="9px" style={{ borderRadius: "50%", margin: "0 auto 10px" }} />
                <Sk w="70%" h=".72rem" style={{ margin: "0 auto" }} />
              </div>
            ))}
          </div>
        </section>

        <section className="story">
          <div>
            <Sk w="140px" h=".72rem" />
            <Sk w="80%" h="2rem" className="sk-title" style={{ marginTop: ".5em" }} />
            <div style={{ marginTop: "1.2em" }}>
              <Sk h=".95rem" w="96%" className="sk-line" />
              <Sk h=".95rem" w="90%" className="sk-line" />
              <Sk h=".95rem" w="70%" className="sk-line" />
            </div>
            <div className="badge-row">
              <Sk w="130px" h="1.9rem" style={{ borderRadius: 99 }} />
              <Sk w="140px" h="1.9rem" style={{ borderRadius: 99 }} />
              <Sk w="110px" h="1.9rem" style={{ borderRadius: 99 }} />
            </div>
          </div>
          <div className="story-photo">
            <Sk className="sk-photo" style={{ aspectRatio: "6/5" }} />
          </div>
        </section>

        <section id="cardapio-sk">
          <div className="menu-head">
            <Sk w="110px" h=".72rem" style={{ margin: "0 auto" }} />
            <Sk w="60%" h="2rem" className="sk-title" style={{ margin: ".4em auto 0" }} />
            <Sk w="46%" h=".9rem" style={{ margin: "14px auto 0" }} />
          </div>
          <div className="menu-cta">
            <Sk w="220px" h="3.2rem" />
          </div>
        </section>

        <section id="avaliacoes-sk">
          <div className="rev-top">
            <div className="rating-card">
              <Sk w="110px" h=".72rem" />
              <Sk w="90px" h="4.6rem" style={{ marginTop: 8 }} />
              <div style={{ display: "flex", gap: 4, margin: "14px 0 10px" }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Sk key={i} w="20px" h="20px" />
                ))}
              </div>
              <Sk w="80%" h=".85rem" />
              <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <Sk w="70%" h=".85rem" />
                <Sk w="60%" h=".85rem" />
              </div>
            </div>
            <div className="quote-grid">
              {[0, 1, 2, 3].map((i) => (
                <div className="quote-card" key={i}>
                  <Sk h=".95rem" w="94%" className="sk-line" />
                  <Sk h=".95rem" w="80%" className="sk-line" />
                  <Sk h=".95rem" w="55%" className="sk-line" style={{ marginBottom: 14 }} />
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Sk w="90px" h=".72rem" />
                    <Sk w="70px" h=".72rem" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="localizacao-sk">
          <div className="loc-grid">
            <div className="loc-card">
              <Sk w="130px" h=".72rem" />
              <Sk w="70%" h="2rem" className="sk-title" style={{ marginTop: ".5em" }} />
              <div className="info-list">
                {[0, 1, 2, 3].map((i) => (
                  <div className="info-row" key={i}>
                    <Sk w="20px" h="20px" />
                    <div style={{ flex: 1 }}>
                      <Sk w="90px" h=".7rem" />
                      <Sk w="80%" h=".95rem" style={{ marginTop: 6 }} />
                      <Sk w="60%" h=".82rem" style={{ marginTop: 6 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="map-card">
              <Sk w="100%" style={{ aspectRatio: "4/3" }} />
              <div className="btn-row">
                <Sk className="sk-btn" w="190px" />
                <Sk className="sk-btn" w="168px" />
              </div>
            </div>
          </div>
        </section>

        <div className="sk-footer">
          <div className="foot-grid">
            <div>
              <Sk w="220px" h="1.1rem" />
              <Sk w="280px" h=".82rem" style={{ marginTop: 8 }} />
            </div>
            <div style={{ display: "flex", gap: 20 }}>
              <Sk w="110px" h=".85rem" />
              <Sk w="80px" h=".85rem" />
              <Sk w="110px" h=".85rem" />
            </div>
          </div>
          <div className="foot-bottom">
            <Sk w="240px" h=".72rem" />
            <Sk w="160px" h=".72rem" />
          </div>
        </div>
      </div>
    </div>
  );
}
