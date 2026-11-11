import { useEffect, useState } from 'react'
import { site, text } from './content.js'
import './App.css'

// public/images/ 아래 파일 경로 (GitHub Pages 하위 경로 대응)
const img = (name) => (name ? `${import.meta.env.BASE_URL}images/${name}` : '')

// 첫 언어: ?lang=en 주소 > 지난번 선택 > 브라우저 언어 > 기본값
function initialLang() {
  const ok = (l) => l && text[l]
  const fromUrl = new URLSearchParams(location.search).get('lang')
  let saved = null
  try { saved = localStorage.getItem('lang') } catch { /* 저장소 막힘 */ }
  const fromBrowser = navigator.language?.slice(0, 2)
  return [fromUrl, saved, fromBrowser].find(ok) || site.defaultLang
}

export default function App() {
  const [lang, setLang] = useState(initialLang)
  const t = text[lang]

  useEffect(() => {
    document.title = t.title
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch { /* 저장소 막힘 */ }
  }, [lang, t])

  const apply = (
    <a className="btn" href={site.applyUrl} target="_blank" rel="noreferrer">
      {t.applyLabel}
    </a>
  )

  return (
    <div style={{ '--theme': site.themeColor }}>
      <header className="nav">
        {site.logo ? <img src={img(site.logo)} alt={site.logoText} className="logo" /> : <strong>{site.logoText}</strong>}
        <div className="nav-right">
          <div className="langs" role="group" aria-label="Language">
            {Object.entries(site.languages).map(([code, label]) => (
              <button key={code} onClick={() => setLang(code)} aria-pressed={code === lang}>
                {label}
              </button>
            ))}
          </div>
          {apply}
        </div>
      </header>

      <section
        className="hero"
        style={site.heroImage ? { backgroundImage: `url(${img(site.heroImage)})` } : undefined}
      >
        <div className="wrap">
          {t.hero.badge && <span className="badge">{t.hero.badge}</span>}
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
          {apply}
        </div>
      </section>

      <section className="wrap section about">
        <div>
          <h2>{t.about.title}</h2>
          <p>{t.about.body}</p>
        </div>
        {site.aboutImage && <img src={img(site.aboutImage)} alt="" />}
      </section>

      <section className="wrap section">
        <h2>{t.benefits.title}</h2>
        <div className="grid">
          {t.benefits.items.map((b, i) => (
            <div className="card" key={i}>
              <div className="icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <h2>{t.positions.title}</h2>
        <div className="grid">
          {t.positions.items.map((p, i) => (
            <div className="card" key={i}>
              <h3>
                {p.name} <small>{p.count}</small>
              </h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <h2>{t.schedule.title}</h2>
        <ol className="steps">
          {t.schedule.items.map((s, i) => (
            <li key={i}>
              <strong>{s.step}</strong>
              <span>{s.date}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap section">
        <h2>{t.faq.title}</h2>
        {t.faq.items.map((f, i) => (
          <details key={i}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>

      <section className="cta">
        <h2>{t.title}</h2>
        {apply}
      </section>

      <footer className="footer">
        <p>{t.footer.contact}</p>
        <p>{t.footer.copyright}</p>
      </footer>
    </div>
  )
}
