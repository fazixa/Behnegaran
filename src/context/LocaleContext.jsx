import { createContext, useContext } from 'react'
import * as en from '../locales/en'

const LocaleContext = createContext(en)

export const useLocale = () => useContext(LocaleContext)

export default LocaleContext
