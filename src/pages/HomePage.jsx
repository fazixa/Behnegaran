import { useLocale } from '../context/LocaleContext'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Knowledge from '../components/Knowledge'
import Cta from '../components/Cta'
import Footer from '../components/Footer'

export default function HomePage() {
  const { meta } = useLocale()

  return (
    <div dir={meta.dir} lang={meta.lang} className={meta.dir === 'rtl' ? 'rtl' : undefined}>
      <Nav />
      <Hero />
      <Ticker />
      <Categories />
      <Products />
      <Stats />
      <Services />
      <Knowledge />
      <Cta />
      <Footer />
    </div>
  )
}
