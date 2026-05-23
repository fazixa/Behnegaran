import { useLocale } from '../context/LocaleContext'
import useScrollReveal from '../hooks/useScrollReveal'

const icons = {
  flask: (color) => (
    <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke={`var(--${color})`} strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082" />
    </svg>
  ),
  sun: (color) => (
    <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke={`var(--${color})`} strokeWidth="1.2">
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    </svg>
  ),
  bolt: (color) => (
    <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke={`var(--${color})`} strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  moon: (color) => (
    <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke={`var(--${color})`} strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
}

function ProductCard({ product }) {
  return (
    <div className="prod-card">
      <div className="prod-img">
        <div className="prod-img-ico">{icons[product.icon]?.(product.iconColor)}</div>
        <span className={`badge badge-${product.badgeType}`}>{product.badge}</span>
      </div>
      <div className="prod-body">
        <div className="prod-cat">{product.category}</div>
        <div className="prod-name">{product.name}</div>
        <div className="prod-formula">{product.formula}</div>
        <div className="prod-foot">
          <div>
            <div className="prod-spec-lbl">{product.specLabel}</div>
            <div className="prod-spec-val">{product.specValue}</div>
          </div>
          <button className="prod-btn">{product.btnText}</button>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  const { products, sections } = useLocale()
  const s = sections.products
  const ref = useScrollReveal()

  return (
    <div className="wrap reveal" ref={ref} style={{ paddingTop: 0 }}>
      <div className="sec-head">
        <div>
          <div className="sec-lbl">{s.label}</div>
          <h2 className="sec-title">{s.title} <em>{s.em}</em></h2>
        </div>
        <a href="#" className="sec-lnk">
          {s.link}
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      <div className="prod-grid">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
