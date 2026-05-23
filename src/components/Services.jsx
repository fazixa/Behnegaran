import { useLocale } from '../context/LocaleContext'
import useScrollReveal from '../hooks/useScrollReveal'

function ServiceCard({ service }) {
  return (
    <div className={`svc-card${service.alt ? ' alt' : ''}`}>
      <div className="svc-glow" />
      <div className="svc-num">{service.num}</div>
      <div className="svc-title">{service.title}</div>
      <div className="svc-desc">{service.description}</div>
    </div>
  )
}

export default function Services() {
  const { services, sections } = useLocale()
  const s = sections.services
  const ref = useScrollReveal()

  return (
    <div id="services" className="wrap reveal" ref={ref}>
      <div className="sec-head">
        <div>
          <div className="sec-lbl">{s.label}</div>
          <h2 className="sec-title">{s.title} <em>{s.em}</em></h2>
        </div>
      </div>

      <div className="svc-grid">
        {services.map((svc) => <ServiceCard key={svc.num} service={svc} />)}
      </div>
    </div>
  )
}
