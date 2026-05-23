import { HashRouter, Routes, Route } from 'react-router-dom'
import LocaleContext from './context/LocaleContext'
import * as en from './locales/en'
import * as fa from './locales/fa'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LocaleContext.Provider value={en}>
              <HomePage />
            </LocaleContext.Provider>
          }
        />
        <Route
          path="/fa"
          element={
            <LocaleContext.Provider value={fa}>
              <HomePage />
            </LocaleContext.Provider>
          }
        />
      </Routes>
    </HashRouter>
  )
}
