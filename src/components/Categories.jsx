import { useLocale } from '../context/LocaleContext'
import useScrollReveal from '../hooks/useScrollReveal'

const icons = {
  flask: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="var(--cu)" strokeWidth="1.4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15a2.25 2.25 0 01.45 1.317 24.094 24.094 0 01-1.77 4.5 24.094 24.094 0 01-1.77-4.5A2.25 2.25 0 0118 15m-12 0a2.25 2.25 0 00-.45 1.317 24.094 24.094 0 001.77 4.5 24.094 24.094 0 001.77-4.5A2.25 2.25 0 006 15" />
    </svg>
  ),
  bolt: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="var(--cu)" strokeWidth="1.4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  building: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="var(--cu)" strokeWidth="1.4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
    </svg>
  ),
}

export default function Categories() {
  const { categories, sections } = useLocale()
  const s = sections.categories
  const ref = useScrollReveal()

  return (
    <div id="categories" className="wrap reveal" ref={ref}>
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

      <div className="cat-grid">
        {categories.map((cat) => (
          <a href="#" className="cat-card" key={cat.id}>
            <div className="cat-icon">{icons[cat.icon]}</div>
            <div className="cat-name">{cat.name}</div>
            <div className="cat-desc">{cat.description}</div>
            <div className="cat-count">{cat.count}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
