import { useLocale } from '../context/LocaleContext'
import useScrollReveal from '../hooks/useScrollReveal'

function ArticleCard({ article }) {
  return (
    <a href="#" className={`art-card${article.featured ? ' featured' : ''}`}>
      <div className="art-img">
        <div className="art-dots" />
        {article.featured && (
          <>
            <div className="art-line" style={{ left: '25%' }} />
            <div className="art-line" style={{ left: '50%', background: 'rgba(107,191,168,.2)' }} />
            <div className="art-line" style={{ left: '75%' }} />
          </>
        )}
        <span className="art-tag">{article.tag}</span>
      </div>
      <div className="art-body">
        <div className="art-date">{article.date}</div>
        <div className="art-title">{article.title}</div>
        <div className="art-excerpt">{article.excerpt}</div>
      </div>
    </a>
  )
}

export default function Knowledge() {
  const { articles, sections } = useLocale()
  const s = sections.knowledge
  const ref = useScrollReveal()

  return (
    <div id="knowledge" className="wrap reveal" ref={ref} style={{ paddingTop: 0 }}>
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

      <div className="art-grid">
        {articles.map((a) => <ArticleCard key={a.id} article={a} />)}
      </div>
    </div>
  )
}
