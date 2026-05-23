import { useLocale } from '../context/LocaleContext'
import QuickOrderPanel from './QuickOrderPanel'

export default function Hero() {
  const { hero } = useLocale()

  return (
    <div className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow" />
      </div>

      <div className="hero-inner">
        <div>
          <div className="hero-chip ani d1">
            <div className="hero-chip-dot" />
            <span>{hero.chip}</span>
          </div>

          <h1 className="hero-title ani d2">
            {hero.titleLine1}
            <span className="accent">{hero.accent}</span>
            <span className="ghost">{hero.ghost}</span>
          </h1>

          <p className="hero-desc ani d3">{hero.desc}</p>

          <div className="hero-btns ani d4">
            <a href="#categories" className="btn-hero">
              {hero.btnCatalog}
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contact" className="btn-hero-outline">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {hero.btnQuote}
            </a>
          </div>

          <div className="hero-stats ani d5">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <div className="hstat-val">{s.num}<em>{s.suffix}</em></div>
                <div className="hstat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <QuickOrderPanel />
      </div>
    </div>
  )
}
