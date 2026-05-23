import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocale } from '../context/LocaleContext'

export default function Nav() {
  const { nav, meta } = useLocale()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="logo">
        <div className="logo-mark">BN</div>
        <span className="logo-text">{nav.logoText}<em>{nav.logoEm}</em></span>
      </a>

      <ul className="nav-links">
        {nav.links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <Link to={meta.switchTo.href} className="btn-ghost">{meta.switchTo.label}</Link>
        <a href="#contact" className="btn-pri">{nav.quickOrder}</a>
      </div>
    </nav>
  )
}
