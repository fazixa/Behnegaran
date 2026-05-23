export const meta = {
  dir: 'rtl',
  lang: 'fa',
  switchTo: { label: 'English', href: '/' },
}

export const nav = {
  logoText: 'بهنه',
  logoEm: 'گران',
  links: [
    { label: 'محصولات', href: '#categories' },
    { label: 'خدمات',   href: '#services' },
    { label: 'دانش‌نامه', href: '#knowledge' },
    { label: 'تماس',    href: '#contact' },
  ],
  exportInquiry: 'استعلام صادرات',
  quickOrder: 'سفارش سریع',
}

export const hero = {
  chip: 'تأمین‌کننده مواد شیمیایی B2B با گواهینامه ISO',
  titleLine1: 'مواد',
  accent: 'صنعتی.',
  ghost: 'دقت.',
  desc: 'مواد شیمیایی، کشاورزی و معدنی با کیفیت برتر برای صنایعی که به ثبات نیاز دارند. زنجیره تأمین مطمئن، کیفیت تأیید شده، لجستیک آماده صادرات.',
  btnCatalog: 'مشاهده کاتالوگ',
  btnQuote: 'دریافت استعلام',
  stats: [
    { num: '500', suffix: '+', label: 'محصول' },
    { num: '15',  suffix: '',  label: 'سال تجربه' },
    { num: '40',  suffix: '+', label: 'کشور' },
  ],
}

export const quickOrder = {
  title: 'سفارش سریع',
  subtitle: 'استعلام در کمتر از ۲ ساعت کاری ارسال می‌شود',
  labelCategory: 'دسته محصول',
  labelProduct: 'محصول',
  labelQty: 'مقدار',
  labelUnit: 'واحد',
  labelName: 'شرکت / نام',
  labelContact: 'تلفن یا ایمیل',
  placeholderQty: 'مثلاً ۵۰۰۰',
  placeholderName: 'نام شرکت شما',
  placeholderContact: '۰۲۱ …',
  categories: ['مواد شیمیایی', 'کودهای کشاورزی', 'مواد معدنی'],
  products: ['سود سوزآور (NaOH)', 'اسید سولفوریک (H₂SO₄)', 'اسید سیتریک (C₆H₈O₇)', 'سولفات سدیم (Na₂SO₄)'],
  units: ['کیلوگرم', 'تن', 'MT'],
  btnText: '← درخواست استعلام',
  note: 'دارای گواهینامه ISO · استعلام امن',
}

export const ticker = [
  { name: 'سود سوزآور',    formula: 'NaOH' },
  { name: 'اسید سولفوریک', formula: 'H₂SO₄' },
  { name: 'سولفات آمونیوم', formula: '(NH₄)₂SO₄' },
  { name: 'اسید سیتریک',   formula: 'C₆H₈O₇' },
  { name: 'بنتونیت',       formula: 'Al₂H₂O₁₂Si₄' },
  { name: 'اوره',          formula: 'CH₄N₂O' },
  { name: 'پرلیت',         formula: 'SiO₂' },
  { name: 'سنگ آهک',       formula: 'CaCO₃' },
  { name: 'سولفات سدیم',   formula: 'Na₂SO₄' },
  { name: 'زئولیت',        formula: '(Si,Al)O₄' },
]

export const sections = {
  categories: { label: '/ ۰۱ — دسته‌بندی‌ها',  title: 'آنچه',       em: 'تأمین می‌کنیم',  link: 'همه دسته‌ها' },
  products:   { label: '/ ۰۲ — محصولات',        title: 'پرفروش‌ترین', em: 'محصولات',       link: 'کاتالوگ کامل' },
  services:   { label: '/ ۰۳ — خدمات',          title: 'فراتر از',    em: 'تأمین' },
  knowledge:  { label: '/ ۰۴ — دانش‌نامه',      title: 'بینش‌های',    em: 'صنعتی',         link: 'همه مقالات' },
}

export const categories = [
  {
    id: 'chemical',
    name: 'مواد شیمیایی',
    description: 'اسیدها، بازها، نمک‌ها و ترکیبات با درجه صنعتی برای تولید، تصفیه آب و صنایع فرآوری.',
    count: '۴۲ محصول',
    icon: 'flask',
  },
  {
    id: 'agricultural',
    name: 'نهاده‌های کشاورزی',
    description: 'کودهای با خلوص بالا، ترکیبات گوگردی و ریزمغذی‌ها برای افزایش عملکرد محصول و بهبود خاک.',
    count: '۲۸ محصول',
    icon: 'bolt',
  },
  {
    id: 'mineral',
    name: 'مواد معدنی',
    description: 'بنتونیت، زئولیت، پرلیت و سنگ آهک برای ساختمان‌سازی، فیلتراسیون و کاربردهای صنعتی.',
    count: '۳۴ محصول',
    icon: 'building',
  },
]

export const products = [
  { id: 1, name: 'سود سوزآور',    formula: 'NaOH',       category: 'شیمیایی',    specLabel: 'خلوص',    specValue: '۹۹.۵٪', badge: 'پرفروش',  badgeType: 'hot', icon: 'flask', iconColor: 'cu', btnText: 'سفارش' },
  { id: 2, name: 'اسید سولفوریک', formula: 'H₂SO₄',      category: 'شیمیایی',    specLabel: 'غلظت',    specValue: '۹۸٪',   badge: 'موجود',   badgeType: 'stk', icon: 'sun',   iconColor: 'cu', btnText: 'سفارش' },
  { id: 3, name: 'سولفات آمونیوم', formula: '(NH₄)₂SO₄', category: 'کشاورزی',    specLabel: 'نیتروژن', specValue: '۲۱٪',   badge: 'موجود',   badgeType: 'stk', icon: 'bolt',  iconColor: 'te', btnText: 'سفارش' },
  { id: 4, name: 'اسید سیتریک',   formula: 'C₆H₈O₇',     category: 'شیمیایی',    specLabel: 'درجه',    specValue: 'خوراکی', badge: 'پرفروش',  badgeType: 'hot', icon: 'moon',  iconColor: 'te', btnText: 'سفارش' },
]

export const stats = [
  { target: 500, suffix: '+',  label: 'کد محصول در دسته‌های شیمیایی، کشاورزی و معدنی' },
  { target: 40,  suffix: '+',  label: 'مقصد صادراتی با لجستیک ترخیص‌شده گمرکی' },
  { target: 15,  suffix: '',   label: 'سال تجربه در تأمین سازندگان بزرگ صنعتی' },
  { target: 99,  suffix: '٪',  label: 'نرخ تحویل به‌موقع در تمام انواع محموله' },
]

export const services = [
  { num: '۰۱', title: 'فروش و توزیع',    description: 'زنجیره‌های تأمین مستقیم با قابلیت مشاهده موجودی بلادرنگ. از سفارش تا تحویل — شامل ترخیص گمرکی، گواهی تحلیل و مستندات ایمنی.', alt: false },
  { num: '۰۲', title: 'مدیریت صادرات',   description: 'خدمات کامل صادراتی به بیش از ۴۰ کشور. ما مقررات تجارت بین‌المللی را پیش می‌بریم، مستندات را مدیریت و حمل‌ونقل را هماهنگ می‌کنیم.', alt: true },
  { num: '۰۳', title: 'بسته‌بندی سفارشی', description: 'راه‌حل‌های انعطاف‌پذیر از کیسه‌های ۲۵ کیلوگرمی تا مخازن IBC و تانکرهای فله. برچسب‌گذاری اختصاصی و مستندات سفارشی برای مشتریان OEM.', alt: true },
  { num: '۰۴', title: 'معرفی به بازار',   description: 'کمک به یافتن بازار برای محصولات شیمیایی جدید. ثبت محصول، انطباق نظارتی، توسعه کانال توزیع استراتژیک و جذب مشتری اولیه.', alt: false },
]

export const articles = [
  { id: 1, tag: 'کودها',          date: '۲۲ اردیبهشت ۱۴۰۴', title: 'انتخاب کود مناسب بر اساس مرحله رشد و نوع خاک',                    excerpt: 'راهنمای تطبیق نسبت نیتروژن، فسفر و پتاسیم با مراحل رشد و شیمی خاک منطقه‌ای برای حداکثر کارایی.', featured: true },
  { id: 2, tag: 'تصفیه آب',       date: '۸ اردیبهشت ۱۴۰۴',  title: 'کاربرد سود سوزآور در سیستم‌های صنعتی تصفیه آب',                   excerpt: 'نحوه تأثیر غلظت NaOH بر کنترل pH، میزان دوزاژ و بهره‌وری فرآیندهای پایین‌دست.', featured: false },
  { id: 3, tag: 'حفاظت از یخ‌زدگی', date: '۲۵ اسفند ۱۴۰۳', title: 'راهکارهای حفاظت از یخ‌زدگی در محصولات کشاورزی',                  excerpt: 'زمان‌بندی کاربرد و تکنیک‌های شیمیایی که محصولات را در برابر سرماهای ناگهانی محافظت می‌کنند.', featured: false },
]

export const cta = {
  title: 'آماده تأمین در مقیاس بزرگ هستید؟',
  desc: 'با تیم ما درباره قیمت‌گذاری فله، مشخصات سفارشی و لجستیک صادراتی صحبت کنید. اکثر استعلام‌ها ظرف ۲ ساعت کاری پاسخ دریافت می‌کنند.',
  btnText: 'شروع استعلام',
  tel: '۰۲۱–۰۰۰۰–۰۰۰۰',
  telHref: 'tel:+982100000000',
  telPrefix: 'یا تماس بگیرید:',
}

export const footer = {
  desc: 'تأمین مواد شیمیایی، کشاورزی و معدنی با کیفیت برتر برای صنایعی که به ثبات نیاز دارند. فعال از سال ۱۳۸۷.',
  columns: [
    { title: 'محصولات', links: ['مواد شیمیایی', 'نهاده‌های کشاورزی', 'مواد معدنی', 'آماده ارسال', 'درجه‌بندی سفارشی'] },
    { title: 'شرکت',    links: ['درباره ما', 'خدمات', 'شرکای صادراتی', 'گواهینامه‌ها', 'فرصت‌های شغلی'] },
    { title: 'تماس',    links: ['دریافت استعلام', 'پشتیبانی فنی', 'دانش‌نامه', 'حریم خصوصی'] },
  ],
  copyright: '© ۱۴۰۴ بهنگران · تمام حقوق محفوظ است',
  badge: 'تأمین‌کننده با گواهینامه ISO',
}
