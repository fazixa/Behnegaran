import { useLocale } from '../context/LocaleContext'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Cta() {
  const { cta } = useLocale()
  const ref = useScrollReveal()

  return (
    <div id="contact" className="cta-band reveal" ref={ref}>
      <div className="cta-inner">
        <div>
          <h2 className="cta-title">{cta.title}</h2>
          <p className="cta-desc">{cta.desc}</p>
        </div>
        <div className="cta-actions">
          <a href="#" className="btn-cta">
            {cta.btnText}
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <div className="cta-tel">
            {cta.telPrefix} <a href={cta.telHref}>{cta.tel}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
