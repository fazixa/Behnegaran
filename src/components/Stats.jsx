import { useLocale } from '../context/LocaleContext'
import useScrollCounter from '../hooks/useScrollCounter'

function StatItem({ stat, first }) {
  const { value, ref } = useScrollCounter(stat.target)

  return (
    <div
      className="st"
      ref={ref}
      style={first ? { borderLeftColor: 'var(--cu)', borderRightColor: 'var(--cu)' } : undefined}
    >
      <div className="st-num">
        {value}<em>{stat.suffix}</em>
      </div>
      <div className="st-lbl">{stat.label}</div>
    </div>
  )
}

export default function Stats() {
  const { stats } = useLocale()

  return (
    <div className="stats-band">
      <div className="stats-inner">
        {stats.map((s, i) => (
          <StatItem key={i} stat={s} first={i === 0} />
        ))}
      </div>
    </div>
  )
}
