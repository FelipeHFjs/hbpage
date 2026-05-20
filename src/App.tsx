import "./App.css";

function App() {
  return (
    <main className="birthday-page">
      <div className="sparkles" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <section className="hero-card">
        <p className="eyebrow">Hoy se celebra en grande</p>
        <h1>Feliz Cumpleanos, Carnal</h1>
        <p className="subtitle">
          Que este nuevo ano te regale pura buena vibra, metas cumplidas y
          aventuras que se vuelvan historias legendarias.
        </p>

        <div
          className="cake"
          role="img"
          aria-label="Pastel de cumpleanos con velas"
        >
          <div className="flames">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="layer top"></div>
          <div className="layer mid"></div>
          <div className="layer bottom"></div>
        </div>

        <div className="message-grid">
          <article>
            <h2>Alegria</h2>
            <p>Que tu sonrisa siempre suene mas fuerte que la musica.</p>
          </article>
          <article>
            <h2>Suerte</h2>
            <p>Que cada paso valiente te abra una puerta chingona.</p>
          </article>
          <article>
            <h2>Familia</h2>
            <p>Que nunca te falte la banda que te quiere y te cuida.</p>
          </article>
        </div>
      </section>

      <p className="footer-note">
        Hoy toca festejarte, carnal: risas, abrazos y pastel doble.
      </p>
    </main>
  );
}

export default App;
