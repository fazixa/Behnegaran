export const tickerItems = [
  { name: 'Caustic Soda', formula: 'NaOH' },
  { name: 'Sulfuric Acid', formula: 'H₂SO₄' },
  { name: 'Ammonium Sulfate', formula: '(NH₄)₂SO₄' },
  { name: 'Citric Acid', formula: 'C₆H₈O₇' },
  { name: 'Bentonite', formula: 'Al₂H₂O₁₂Si₄' },
  { name: 'Urea', formula: 'CH₄N₂O' },
  { name: 'Perlite', formula: 'SiO₂' },
  { name: 'Limestone', formula: 'CaCO₃' },
  { name: 'Sodium Sulfate', formula: 'Na₂SO₄' },
  { name: 'Zeolite', formula: '(Si,Al)O₄' },
]

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
  {
    id: 1,
    name: 'Caustic Soda',
    formula: 'NaOH',
    category: 'Chemical',
    specLabel: 'Purity',
    specValue: '99.5%',
    badge: 'Bestseller',
    badgeType: 'hot',
    icon: 'flask',
    iconColor: 'cu',
  },
  {
    id: 2,
    name: 'Sulfuric Acid',
    formula: 'H₂SO₄',
    category: 'Chemical',
    specLabel: 'Concentration',
    specValue: '98%',
    badge: 'In Stock',
    badgeType: 'stk',
    icon: 'sun',
    iconColor: 'cu',
  },
  {
    id: 3,
    name: 'Ammonium Sulfate',
    formula: '(NH₄)₂SO₄',
    category: 'Agricultural',
    specLabel: 'Nitrogen',
    specValue: '21%',
    badge: 'In Stock',
    badgeType: 'stk',
    icon: 'bolt',
    iconColor: 'te',
  },
  {
    id: 4,
    name: 'Citric Acid',
    formula: 'C₆H₈O₇',
    category: 'Chemical',
    specLabel: 'Grade',
    specValue: 'Food',
    badge: 'Bestseller',
    badgeType: 'hot',
    icon: 'moon',
    iconColor: 'te',
  },
]

export const stats = [
  { target: 500, suffix: '+', label: 'Product SKUs across chemical, agricultural, and mineral categories' },
  { target: 40,  suffix: '+', label: 'Export destinations with customs-cleared logistics' },
  { target: 15,  suffix: 'yr', label: 'Industry experience supplying major manufacturers' },
  { target: 99,  suffix: '%', label: 'On-time delivery rate across all shipment types' },
]

export const services = [
  {
    num: '01',
    title: 'Sales & Distribution',
    description: 'Direct supply chains with real-time inventory visibility. From order to delivery — including customs clearance, certificates of analysis, and safety documentation.',
    alt: false,
  },
  {
    num: '02',
    title: 'Export Management',
    description: 'Full-service export to 40+ countries. We navigate international trade regulations, manage documentation, and coordinate freight so you don\'t have to.',
    alt: true,
  },
  {
    num: '03',
    title: 'Custom Packaging',
    description: 'Flexible solutions from 25 kg bags to IBC containers and bulk tankers. Private labeling and custom documentation for OEM and rebranding clients.',
    alt: true,
  },
  {
    num: '04',
    title: 'Market Introduction',
    description: 'Help new chemical products find their market. Product registration, regulatory compliance, strategic distribution channel development, and initial customer outreach.',
    alt: false,
  },
]

export const articles = [
  {
    id: 1,
    tag: 'Fertilizers',
    date: 'May 12, 2025',
    title: 'Choosing the Right Fertilizer for Crop Stage and Soil Type',
    excerpt: 'A guide to matching nitrogen, phosphorus, and potassium ratios to specific growth phases and regional soil chemistry for maximum yield efficiency.',
    featured: true,
  },
  {
    id: 2,
    tag: 'Water Treatment',
    date: 'Apr 28, 2025',
    title: 'Caustic Soda in Industrial Water Treatment Systems',
    excerpt: 'How NaOH concentration affects pH control, dosing rates, and downstream efficiency.',
    featured: false,
  },
  {
    id: 3,
    tag: 'Cold Protection',
    date: 'Mar 15, 2025',
    title: 'Frost Protection Strategies for Agricultural Crops',
    excerpt: 'Application timing and chemical treatments that protect crops during unexpected cold events.',
    featured: false,
  },
]
