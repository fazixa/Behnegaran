import { useLocale } from '../context/LocaleContext'

export default function Footer() {
  const { footer, nav } = useLocale()

  return (
    <footer>
      <div className="foot-grid">
        <div>
          <a href="#" className="logo">
            <div className="logo-mark">BN</div>
            <span className="logo-text">{nav.logoText}<em>{nav.logoEm}</em></span>
          </a>
          <p className="foot-desc">{footer.desc}</p>
          <div className="foot-social">
            <a href="#" aria-label="Instagram">
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {footer.columns.map((col) => (
          <div key={col.title}>
            <div className="foot-col-h">{col.title}</div>
            <ul className="foot-links">
              {col.links.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="foot-bottom">
        <div className="foot-copy">{footer.copyright}</div>
        <div className="foot-badge">
          <div className="foot-badge-dot" />
          {footer.badge}
        </div>
      </div>
    </footer>
  )
}
