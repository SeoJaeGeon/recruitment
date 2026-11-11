import { site, hero, about, benefits, positions, schedule, faq, footer } from './content.js'
import './App.css'

// public/images/ 아래 파일 경로 (GitHub Pages 하위 경로 대응)
const img = (name) => (name ? `${import.meta.env.BASE_URL}images/${name}` : '')

function ApplyButton() {
  return (
    <a className="btn" href={site.applyUrl} target="_blank" rel="noreferrer">
      {site.applyLabel}
    </a>
  )
}

export default function App() {
  document.title = site.title

  return (
    <div style={{ '--theme': site.themeColor }}>
      <header className="nav">
        {site.logo ? <img src={img(site.logo)} alt={site.logoText} className="logo" /> : <strong>{site.logoText}</strong>}
        <ApplyButton />
      </header>

      <section
        className="hero"
        style={hero.image ? { backgroundImage: `url(${img(hero.image)})` } : undefined}
      >
        <div className="wrap">
          {hero.badge && <span className="badge">{hero.badge}</span>}
          <h1>{hero.title}</h1>
          <p>{hero.subtitle}</p>
          <ApplyButton />
        </div>
      </section>

      <section className="wrap section about">
        <div>
          <h2>{about.title}</h2>
          <p>{about.body}</p>
        </div>
        {about.image && <img src={img(about.image)} alt="" />}
      </section>

      <section className="wrap section">
        <h2>{benefits.title}</h2>
        <div className="grid">
          {benefits.items.map((b) => (
            <div className="card" key={b.title}>
              <div className="icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <h2>{positions.title}</h2>
        <div className="grid">
          {positions.items.map((p) => (
            <div className="card" key={p.name}>
              <h3>
                {p.name} <small>{p.count}</small>
              </h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <h2>{schedule.title}</h2>
        <ol className="steps">
          {schedule.items.map((s) => (
            <li key={s.step}>
              <strong>{s.step}</strong>
              <span>{s.date}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap section">
        <h2>{faq.title}</h2>
        {faq.items.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>

      <section className="cta">
        <h2>{site.title}</h2>
        <ApplyButton />
      </section>

      <footer className="footer">
        <p>{footer.contact}</p>
        <p>{footer.copyright}</p>
      </footer>
    </div>
  )
}
