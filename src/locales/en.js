export const meta = {
  dir: 'ltr',
  lang: 'en',
  switchTo: { label: 'فارسی', href: '/fa' },
}

export const nav = {
  logoText: 'Behne',
  logoEm: 'garan',
  links: [
    { label: 'Products', href: '#categories' },
    { label: 'Services', href: '#services' },
    { label: 'Knowledge', href: '#knowledge' },
    { label: 'Contact', href: '#contact' },
  ],
  exportInquiry: 'Export Inquiry',
  quickOrder: 'Quick Order',
}

export const hero = {
  chip: 'ISO-Certified B2B Chemical Supply',
  titleLine1: 'Industrial',
  accent: 'Materials.',
  ghost: 'Precision.',
  desc: 'Premium-grade chemical, agricultural, and mineral materials for industries that demand consistency. Trusted supply chains, certified quality, export-ready logistics.',
  btnCatalog: 'Browse Catalog',
  btnQuote: 'Get a Quote',
  stats: [
    { num: '500', suffix: '+', label: 'Products' },
    { num: '15',  suffix: 'yr', label: 'Experience' },
    { num: '40',  suffix: '+', label: 'Countries' },
  ],
}

export const quickOrder = {
  title: 'Quick Order',
  subtitle: 'Quote delivered within 2 business hours',
  labelCategory: 'Product Category',
  labelProduct: 'Product',
  labelQty: 'Quantity',
  labelUnit: 'Unit',
  labelName: 'Company / Name',
  labelContact: 'Phone or Email',
  placeholderQty: 'e.g. 5000',
  placeholderName: 'Your company name',
  placeholderContact: '+98 21 …',
  categories: ['Chemical Materials', 'Agricultural Fertilizers', 'Mineral Materials'],
  products: ['Caustic Soda (NaOH)', 'Sulfuric Acid (H₂SO₄)', 'Citric Acid (C₆H₈O₇)', 'Sodium Sulfate (Na₂SO₄)'],
  units: ['kg', 'Ton', 'MT'],
  btnText: 'Request Quote →',
  note: 'ISO certified · Secure inquiry',
}

export const ticker = [
  { name: 'Caustic Soda',     formula: 'NaOH' },
  { name: 'Sulfuric Acid',    formula: 'H₂SO₄' },
  { name: 'Ammonium Sulfate', formula: '(NH₄)₂SO₄' },
  { name: 'Citric Acid',      formula: 'C₆H₈O₇' },
  { name: 'Bentonite',        formula: 'Al₂H₂O₁₂Si₄' },
  { name: 'Urea',             formula: 'CH₄N₂O' },
  { name: 'Perlite',          formula: 'SiO₂' },
  { name: 'Limestone',        formula: 'CaCO₃' },
  { name: 'Sodium Sulfate',   formula: 'Na₂SO₄' },
  { name: 'Zeolite',          formula: '(Si,Al)O₄' },
]

export const sections = {
  categories: { label: '/ 01 — Categories',    title: 'What We',    em: 'Supply',   link: 'All Categories' },
  products:   { label: '/ 02 — Products',       title: 'Bestselling', em: 'Lines',   link: 'Full Catalog' },
  services:   { label: '/ 03 — Services',       title: 'Beyond',     em: 'Supply' },
  knowledge:  { label: '/ 04 — Knowledge Base', title: 'Industry',   em: 'Insights', link: 'All Articles' },
}

export const categories = [
  {
    id: 'chemical',
    name: 'Chemical Materials',
    description: 'Industrial-grade acids, bases, salts, and compounds for manufacturing, water treatment, and processing.',
    count: '42 Products',
    icon: 'flask',
  },
  {
    id: 'agricultural',
    name: 'Agricultural Inputs',
    description: 'High-purity fertilizers, sulfur compounds, and micronutrients for crop yield and soil enrichment.',
    count: '28 Products',
    icon: 'bolt',
  },
  {
    id: 'mineral',
    name: 'Mineral Materials',
    description: 'Bentonite, zeolite, perlite, and limestone for construction, filtration, and industrial applications.',
    count: '34 Products',
    icon: 'building',
  },
]

export const products = [
  { id: 1, name: 'Caustic Soda',      formula: 'NaOH',       category: 'Chemical',     specLabel: 'Purity',         specValue: '99.5%', badge: 'Bestseller', badgeType: 'hot', icon: 'flask', iconColor: 'cu', btnText: 'Order Now' },
  { id: 2, name: 'Sulfuric Acid',     formula: 'H₂SO₄',      category: 'Chemical',     specLabel: 'Concentration',  specValue: '98%',   badge: 'In Stock',   badgeType: 'stk', icon: 'sun',   iconColor: 'cu', btnText: 'Order Now' },
  { id: 3, name: 'Ammonium Sulfate',  formula: '(NH₄)₂SO₄',  category: 'Agricultural', specLabel: 'Nitrogen',       specValue: '21%',   badge: 'In Stock',   badgeType: 'stk', icon: 'bolt',  iconColor: 'te', btnText: 'Order Now' },
  { id: 4, name: 'Citric Acid',       formula: 'C₆H₈O₇',     category: 'Chemical',     specLabel: 'Grade',          specValue: 'Food',  badge: 'Bestseller', badgeType: 'hot', icon: 'moon',  iconColor: 'te', btnText: 'Order Now' },
]

export const stats = [
  { target: 500, suffix: '+',  label: 'Product SKUs across chemical, agricultural, and mineral categories' },
  { target: 40,  suffix: '+',  label: 'Export destinations with customs-cleared logistics' },
  { target: 15,  suffix: 'yr', label: 'Industry experience supplying major manufacturers' },
  { target: 99,  suffix: '%',  label: 'On-time delivery rate across all shipment types' },
]

export const services = [
  { num: '01', title: 'Sales & Distribution', description: 'Direct supply chains with real-time inventory visibility. From order to delivery — including customs clearance, certificates of analysis, and safety documentation.', alt: false },
  { num: '02', title: 'Export Management',    description: "Full-service export to 40+ countries. We navigate international trade regulations, manage documentation, and coordinate freight so you don't have to.", alt: true },
  { num: '03', title: 'Custom Packaging',     description: 'Flexible solutions from 25 kg bags to IBC containers and bulk tankers. Private labeling and custom documentation for OEM and rebranding clients.', alt: true },
  { num: '04', title: 'Market Introduction',  description: 'Help new chemical products find their market. Product registration, regulatory compliance, strategic distribution channel development, and initial customer outreach.', alt: false },
]

export const articles = [
  { id: 1, tag: 'Fertilizers',    date: 'May 12, 2025', title: 'Choosing the Right Fertilizer for Crop Stage and Soil Type',       excerpt: 'A guide to matching nitrogen, phosphorus, and potassium ratios to specific growth phases and regional soil chemistry for maximum yield efficiency.', featured: true },
  { id: 2, tag: 'Water Treatment', date: 'Apr 28, 2025', title: 'Caustic Soda in Industrial Water Treatment Systems',                excerpt: 'How NaOH concentration affects pH control, dosing rates, and downstream efficiency.', featured: false },
  { id: 3, tag: 'Cold Protection', date: 'Mar 15, 2025', title: 'Frost Protection Strategies for Agricultural Crops',                excerpt: 'Application timing and chemical treatments that protect crops during unexpected cold events.', featured: false },
]

export const cta = {
  title: 'Ready to Source at Scale?',
  desc: 'Talk to our team about bulk pricing, custom specifications, and export logistics. Most inquiries receive a detailed quote within 2 business hours.',
  btnText: 'Start an Inquiry',
  tel: '+98 21 0000 0000',
  telHref: 'tel:+982100000000',
  telPrefix: 'Or call:',
}

export const footer = {
  desc: 'Premium chemical, agricultural, and mineral supply for industries that demand consistency. Operating since 2008.',
  columns: [
    { title: 'Products', links: ['Chemical Materials', 'Agricultural Inputs', 'Mineral Materials', 'Ready to Ship', 'Custom Grades'] },
    { title: 'Company',  links: ['About Us', 'Services', 'Export Partners', 'Certifications', 'Careers'] },
    { title: 'Contact',  links: ['Get a Quote', 'Technical Support', 'Knowledge Base', 'Privacy Policy'] },
  ],
  copyright: '© 2025 BEHNEGARAN · ALL RIGHTS RESERVED',
  badge: 'ISO CERTIFIED SUPPLIER',
}
