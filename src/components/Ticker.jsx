import { useLocale } from '../context/LocaleContext'

export default function Ticker() {
  const { ticker } = useLocale()
  const doubled = [...ticker, ...ticker]

  return (
    <div className="ticker">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <div className="ticker-item" key={i}>
            <div className="ticker-dot" />
            <span>{item.name} · {item.formula}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
