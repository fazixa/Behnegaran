import { useLocale } from '../context/LocaleContext'

export default function QuickOrderPanel() {
  const { quickOrder: qo } = useLocale()

  return (
    <div className="qo-panel ani d3">
      <div className="qo-title">{qo.title}</div>
      <div className="qo-sub">{qo.subtitle}</div>

      <div className="fg">
        <label>{qo.labelCategory}</label>
        <div className="fw">
          <select>
            {qo.categories.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div className="fg">
        <label>{qo.labelProduct}</label>
        <div className="fw">
          <select>
            {qo.products.map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>
      </div>

      <div className="fg-row">
        <div className="fg">
          <label>{qo.labelQty}</label>
          <input type="text" placeholder={qo.placeholderQty} />
        </div>
        <div className="fg">
          <label>{qo.labelUnit}</label>
          <div className="fw">
            <select>
              {qo.units.map((u) => <option key={u}>{u}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="fg">
        <label>{qo.labelName}</label>
        <input type="text" placeholder={qo.placeholderName} />
      </div>

      <div className="fg">
        <label>{qo.labelContact}</label>
        <input type="text" placeholder={qo.placeholderContact} />
      </div>

      <button className="qo-btn">{qo.btnText}</button>

      <div className="qo-note">
        <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        {qo.note}
      </div>
    </div>
  )
}
