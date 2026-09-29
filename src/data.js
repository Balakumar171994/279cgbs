// Centralized content for the whole site. Edit copy/links here — components
// just render whatever this file exports.

export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'SAP',
    href: '/sap',
    dropdown: [
      { label: 'SAP Solutions', href: '/sap-solutions' },
      { label: 'SAP Managed Services', href: '/sap-managed-services' },
    ],
  },
  {
    label: 'Digital Services',
    // No overview page: the item only opens its dropdown, and stays
    // highlighted while on any /digital-services/... page
    href: '/digital-services',
    noPage: true,
    dropdown: [
      { label: 'Digital Infrastructure & Cloud', href: '/digital-services/infrastructure-cloud' },
      { label: 'Cybersecurity & Digital Trust', href: '/digital-services/cybersecurity-digital-trust' },
      { label: 'Data, Analytics & AI', href: '/digital-services/data-analytics-ai' },
      { label: 'Digital Workplace & Automation', href: '/digital-services/digital-workplace-automation' },
    ],
  },
  {
    label: 'Innovation & Products',
    // No overview page, same as Digital Services
    href: '/products',
    noPage: true,
    dropdown: [
      { label: 'CarinAI', href: '/products/carinai' },
      { label: 'VegAI', href: '/products/vegai' },
      { label: 'SMARTOPS', href: '/products/smartops' },
    ],
  },
  { label: 'About Us', href: '/about' },
  {
    label: 'Resources',
    href: '/resources',
    dropdown: [
      { label: 'Blogs', href: '/resources#blogs' },
      // Placeholder until the Digital Library content is ready
      { label: 'Digital Library', href: '/resources' },
      { label: 'FAQ', href: '/resources#faq' },
    ],
  },
]

export const hero = {
  title: ['Transform, Automate, & Innovate with', 'SAP & Next-Gen Digital Services'],
  subtitle:
    'From digital core to intelligent enterprise, we connect SAP, AI, Cloud, Data, Automation, ERP, and Managed Services to help businesses modernize faster, operate smarter, and innovate securely.',
  primaryCta: { label: 'Explore Our Services', href: '/#our-services' },
  secondaryCta: { label: 'Talk to Our Experts', href: '/contact' },
  statsHeading: 'Technology Expertise. Enterprise Experience. Measurable Outcomes.',
  stats: [
    { value: '10+ Years', label: 'SAP & IT Experience' },
    { value: '270+', label: 'SAP & Cloud Consultants' },
    { value: '150+', label: 'Enterprise Projects' },
    { value: '100+', label: 'Global Enterprise Clients' },
    { value: '5', label: 'Operating Countries' },
  ],
}

export const transformation = {
  eyebrow: 'Digital Transformation',
  title: 'From Technology Complexity to',
  highlight: 'Connected Transformation',
  intro:
    'Modern enterprises need more than individual technology solutions. They need a connected digital ecosystem where SAP, Cloud, Cybersecurity, Data, AI, Infrastructure, and IT Operations work together.',
  lead: 'Canopus GBS brings these capabilities together to help organizations:',
  outcomes: [
    'Modernize legacy technology',
    'Transform enterprise applications',
    'Accelerate cloud adoption',
    'Automate business and IT processes',
    'Strengthen security and resilience',
    'Unlock the value of enterprise data',
    'Optimize IT performance and operations',
    'Build scalable foundations for future innovation',
  ],
}

export const serviceHub = {
  eyebrow: 'Our Services',
  title: 'One Digital Partner.',
  highlight: 'Multiple Transformation Capabilities.',
  intro:
    'From digital core transformation to intelligent IT operations, Canopus GBS brings the technologies, expertise, and managed capabilities enterprises need to modernize and scale:',
  items: [
    { label: 'SAP', icon: 'sap' },
    { label: 'Cloud & Infrastructure', icon: 'cloud' },
    { label: 'Cybersecurity', icon: 'shield' },
    { label: 'AI & Innovation', icon: 'ai' },
    { label: 'Data Analytics', icon: 'chart' },
    { label: 'Managed Services', icon: 'headset' },
    { label: 'ERP', icon: 'erp' },
  ],
}

export const industries = {
  eyebrow: 'Industries',
  title: 'Technology That Understands',
  highlight: 'Your Industry',
  intro:
    'Every industry has different processes, regulations, operational challenges, and technology priorities.',
  lead:
    'Canopus GBS combines industry understanding with technology expertise to deliver solutions aligned with real-world business requirements.',
  items: [
    { label: 'Manufacturing', icon: 'factory' },
    { label: 'Automotive', icon: 'car' },
    { label: 'Engineering', icon: 'wrench' },
    { label: 'Pharmaceuticals & Healthcare', icon: 'health' },
    { label: 'Logistics & Supply Chain', icon: 'truck' },
    { label: 'Retail & Consumer', icon: 'bag' },
    { label: 'Professional Services', icon: 'briefcase' },
    { label: 'Other Enterprise Industries', icon: 'building' },
  ],
}

export const whyCanopus = {
  eyebrow: "Why Canopus GBS",
  title: "Technology That Moves",
  highlight: "Business Forward",
  intro: [
    "Digital transformation is not just about adopting new technology. It is about creating a business that is more connected, intelligent, secure, and ready for what comes next.",
    "At Canopus GBS, we bring together enterprise technology, industry understanding, innovation, and managed expertise to help organizations transform with clarity and confidence.",
  ],
  points: [
    {
      icon: "link",
      title: "One Partner. Connected Capabilities.",
      text: "Bring SAP, Cloud, AI, Cybersecurity, Data, ERP, and Managed Services together through a unified transformation partner.",
    },
    {
      icon: "target",
      title: "Built Around Your Business",
      text: "We don't believe in one-size-fits-all technology. Our solutions are aligned with your business priorities, operational realities, and long-term growth.",
    },
    {
      icon: "route",
      title: "From Strategy to Scale",
      text: "From the first assessment to implementation, modernization, optimization, and ongoing management, we support your journey end-to-end.",
    },
    {
      icon: "bulb",
      title: "Innovation with Purpose",
      text: "We turn emerging technologies such as AI and automation into practical solutions that improve productivity, accelerate processes, and create measurable business value.",
    },
    {
      icon: "shield",
      title: "Secure by Design",
      text: "Security is integrated into transformation from the ground up—helping enterprises build resilient, trusted, and future-ready digital environments.",
    },
    {
      icon: "users",
      title: "Expertise That Delivers",
      text: "Our teams combine technology expertise, enterprise experience, and a collaborative approach to solve complex business and technology challenges.",
    },
    {
      icon: "refresh",
      title: "Always Evolving",
      text: "Transformation doesn't end at go-live. We continuously identify opportunities to optimize, automate, modernize, and innovate as your business evolves.",
    },
  ],
}

export const confidenceBanner = {
  title: "Transform with Confidence.",
  highlight: "Innovate with Purpose.",
  text: "Canopus GBS helps enterprises turn technology into a lasting business advantage.",
}

// Header text for each inner page
export const pageHeaders = {
  sap: {
    eyebrow: 'SAP',
    title: 'SAP Solutions &',
    highlight: 'Managed Services',
    text: 'S/4HANA, RISE with SAP, BTP and Clean Core transformation — backed by AMS, Basis, HANA and 24x7 support.',
  },
  digital: {
    eyebrow: 'Digital Services',
    title: 'Cloud, Security, Data &',
    highlight: 'Digital Workplace',
    text: 'AWS, Azure and GCP engineering, zero-trust security, data and applied AI, and workplace automation.',
  },
  products: {
    eyebrow: 'Innovation & Products',
    title: 'Innovation &',
    highlight: 'Products',
    text: 'CarinAI, VegAI and SmartOps — purpose-built platforms engineered specifically for the SAP ecosystem.',
  },
  about: {
    eyebrow: 'About Us',
    title: 'About',
    highlight: 'Canopus GBS',
    text: 'SAP-led transformation, modern digital services and proprietary AI products — from one partner.',
  },
  resources: {
    eyebrow: 'Resources',
    title: 'Insights &',
    highlight: 'Resources',
    text: 'Blogs, case studies and answers to the questions enterprises ask us most.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Talk to',
    highlight: 'Our Experts',
    text: 'Tell us where you are in your transformation journey and our team will help you plan the next step.',
  },
}

export const pillars = [
  {
    title: 'Transform with SAP',
    tag: 'SAP-Led Modernization',
    bullets: [
      'S/4HANA migration with zero business disruption',
      'RISE with SAP & cloud landing zone strategy',
      'Clean core extensions on SAP BTP',
      'AMS backed by predictive, AI-driven monitoring',
    ],
  },
  {
    title: 'Modernize Digital Services',
    tag: 'Cloud, Security & Data',
    bullets: [
      'Multi-cloud infrastructure engineering',
      'Zero-trust cybersecurity & digital trust',
      'Data platforms, analytics & applied AI',
      'Digital workplace & workflow automation',
    ],
  },
  {
    title: 'Automate with AI Products',
    tag: 'Proprietary Innovation',
    bullets: [
      'CarinAI resolves SAP tickets autonomously',
      'VegAI predicts and prevents system downtime',
      'SmartOps unifies IT service, asset & ops data',
      'Purpose-built IP, not generic tooling',
    ],
  },
]

export const services = [
  {
    id: 'sap-solutions',
    title: 'SAP Solutions',
    desc: 'End-to-end S/4HANA transformation — greenfield, brownfield or selective data transition — engineered for a clean, extensible core.',
  },
  {
    id: 'sap-ams',
    title: 'SAP Managed Services',
    desc: 'SLA-driven Application Management Services with 24x7 Basis coverage and AI-augmented ticket resolution.',
  },
  {
    id: 'digital-infra',
    title: 'Digital Infrastructure & Cloud',
    href: '/digital-services/infrastructure-cloud',
    desc: 'Cloud-native architecture, landing zones, and migration across AWS, Azure and GCP, built for scale and cost efficiency.',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Digital Trust',
    href: '/digital-services/cybersecurity-digital-trust',
    desc: 'Zero-trust security architecture, GRC frameworks, and continuous threat detection to protect what matters most.',
  },
  {
    id: 'data-ai',
    title: 'Data, Analytics & AI',
    href: '/digital-services/data-analytics-ai',
    desc: 'Modern data platforms, BI, and applied AI/ML models that turn enterprise data into decisions.',
  },
  {
    id: 'digital-workplace',
    title: 'Digital Workplace & Automation',
    href: '/digital-services/digital-workplace-automation',
    desc: 'Microsoft 365, ITSM, and intelligent automation that make everyday work faster and friction-free.',
  },
]

export const products = [
  {
    id: 'carinai',
    name: 'CarinAI',
    href: '/products/carinai',
    tagline: 'Intelligent SAP Automation Platform',
    desc: 'A machine-learning engine that auto-resolves L1/L2 SAP tickets, cutting ticket volume and manual effort dramatically.',
    accent: 'from-navy to-navy-light',
  },
  {
    id: 'vegai',
    name: 'VegAI',
    href: '/products/vegai',
    tagline: 'Intelligent SAP Operations, Reimagined',
    desc: 'Predictive Basis monitoring that flags performance risk before it becomes downtime — proactive, not reactive AMS.',
    accent: 'from-navy-dark to-navy',
  },
  {
    id: 'smartops',
    name: 'SMARTOPS',
    href: '/products/smartops',
    tagline: 'Unified Digital Operations',
    desc: 'One platform bringing ITSM, ITAM, and ITOM together for full visibility across the enterprise IT estate.',
    accent: 'from-gold to-gold-light',
  },
]

export const stats2 = [
  { value: '60%', label: 'Faster Issue Resolution', note: 'Powered by CarinAI' },
  { value: '40%', label: 'Lower SAP Operations Cost', note: 'Via managed AMS' },
  { value: '99.9%', label: 'System Uptime', note: 'Across managed estates' },
  { value: '3x', label: 'Faster Migrations', note: 'Zero business disruption' },
]

export const testimonials = [
  {
    quote:
      'Canopus GBS ran our S/4HANA migration with remarkable discipline — clear documentation, minimal meetings, and they delivered exactly what was scoped, on time.',
    name: 'Rohan Mehta',
    role: 'CIO, Manufacturing Enterprise',
  },
  {
    quote:
      'What impressed us most was the AMS transition. Ticket volumes dropped within the first quarter once CarinAI was in place, and our team finally got out of firefighting mode.',
    name: 'Ananya Kapoor',
    role: 'VP IT Operations, Retail Group',
  },
  {
    quote:
      'A genuinely reliable partner across time zones. Their SAP Basis and cloud teams communicate proactively, which made an offshore engagement feel local.',
    name: 'David Chen',
    role: 'Head of Infrastructure, Logistics Firm',
  },
]

export const blogs = [
  {
    title: 'Five Signs Your SAP Landscape Is Ready for S/4HANA',
    excerpt: 'A practical readiness checklist for CIOs weighing greenfield vs. brownfield migration timing.',
    date: 'Jan 2026',
  },
  {
    title: 'Why Predictive AMS Beats Reactive Support',
    excerpt: 'How predictive monitoring with VegAI shifts AMS from firefighting to prevention.',
    date: 'Dec 2025',
  },
  {
    title: '2026 Outlook: Cloud, AI and the Clean Core',
    excerpt: 'What enterprise IT leaders should plan for in the next wave of SAP and cloud investment.',
    date: 'Dec 2025',
  },
]

export const caseStudies = [
  {
    title: 'Global Manufacturer Migrates 15TB to S/4HANA in 18 Weeks',
    outcome: '45% faster financial close, zero downtime cutover.',
  },
  {
    title: 'Retail Group Cuts SAP Ticket Volume by 60% with CarinAI',
    outcome: 'AI-driven auto-resolution freed up 3 FTEs for higher-value work.',
  },
  {
    title: 'Logistics Firm Achieves 99.9% Uptime with Predictive AMS',
    outcome: 'VegAI flagged 12 critical incidents before they impacted users.',
  },
]

export const faqs = [
  {
    q: 'Do you support both greenfield and brownfield S/4HANA migrations?',
    a: 'Yes — we assess your landscape and recommend greenfield, brownfield, or selective data transition based on your business goals and technical debt.',
  },
  {
    q: 'Can CarinAI and VegAI integrate with our existing AMS provider?',
    a: 'Both products are designed to sit natively on SAP BTP and integrate with standard ITSM tooling, so they can complement an existing AMS setup.',
  },
  {
    q: 'Do you offer services outside of the SAP ecosystem?',
    a: 'Yes — our Digital Services practice covers cloud infrastructure, cybersecurity, data & AI, and digital workplace, independent of SAP engagements.',
  },
]

export const about = {
  eyebrow: 'About Canopus GBS',
  title: 'Engineering Enterprise Transformation for Over a Decade',
  body: [
    'Canopus GBS is a global digital transformation and SAP consulting partner, helping enterprises modernize their core systems while building the digital capabilities that growth demands next.',
    'From SAP-led transformation to cloud, cybersecurity, data & AI, and our own suite of AI-powered products, we combine deep technical depth with a delivery model built for measurable outcomes — not just activity.',
  ],
  highlights: [
    { value: '10+', label: 'Years of SAP Experience' },
    { value: '270+', label: 'Certified Consultants' },
    { value: '150+', label: 'Enterprise Projects Delivered' },
    { value: '5', label: 'Global Delivery Hubs' },
  ],
}

export const finalCta = {
  eyebrow: 'Ready When You Are',
  title: 'Let\u2019s Engineer Your Next Phase of Growth',
  subtitle:
    'Whether it\u2019s an S/4HANA migration, a cloud transformation, or deploying CarinAI across your SAP estate — our team is ready to scope it with you.',
  primaryCta: { label: 'Book a Strategy Call', href: '/contact' },
  secondaryCta: { label: 'Talk to an Expert', href: '/contact' },
}

export const offices = {
  title: 'Global Offices',
  subtitle: 'Where you can find us',
  list: [
    {
      country: 'India',
      flag: 'in',
      company: 'Canopus GBS Pvt Ltd',
      address: ['Karle Town Centre SEZ, HUB 2, 1st Floor,', 'Bengaluru, Karnataka 560045, India'],
      phone: '080-4959 5366',
    },
    {
      country: 'Malaysia',
      flag: 'my',
      company: 'Canopus GBS Sdn Bhd',
      address: [
        'Suite 3B-7-6, Level 7, Block 3B, Plaza Sentral,',
        'Jalan Stesen Sentral, Kuala Lumpur Sentral, 50470',
      ],
      phone: '+60 33010 1808',
    },
    {
      country: 'Singapore',
      flag: 'sg',
      company: 'Canopus GBS Pte Ltd',
      address: ['51 Changi Business Park Central 2,', 'The Signature, Singapore 486066'],
      phone: '+65 6701 8500',
    },
    {
      country: 'UAE',
      flag: 'ae',
      company: 'Canopus GBS FZCO',
      address: ['Building A2, Dubai Digital Park,', 'Dubai Silicon Oasis, Dubai, UAE'],
      phone: '+971 5595 34203',
    },
    {
      country: 'Saudi Arabia',
      flag: 'sa',
      company: 'Canopus GBS',
      address: ['King Faisal Ibn Abd Al Aziz, Al Rakah Al Janubiyah,', 'Al Khobar 34226 - Saudi Arabia'],
      phone: '+971 5595 34203',
    },
    {
      country: 'USA',
      flag: 'us',
      company: 'Canopus GBS Inc',
      address: ['200 S Washington St, Suite 300,', 'Crawfordsville, Indiana 47933, USA'],
      phone: '+1 (737) 228-1454',
      // email: 'Info_USA@canopusgbs.com',
    },
  ],
}

// TODO: replace "#" with the company's LinkedIn / YouTube / X page URLs
export const socials = [
  {
    key: 'linkedin',
    name: 'LinkedIn',
    href: '#',
    path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.03-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96V21H9z',
  },
  {
    key: 'youtube',
    name: 'YouTube',
    href: '#',
    path: 'M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6z',
  },
  {
    key: 'x',
    name: 'X (Twitter)',
    href: '#',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
]

export const footerLinks = {
  'SAP': ['SAP Solutions', 'SAP Managed Services'],
  'Digital Services': ['Digital Infrastructure & Cloud', 'Cybersecurity & Digital Trust', 'Data, Analytics & AI', 'Digital Workplace & Automation'],
  'Products': ['CarinAI', 'VegAI', 'SMARTOPS'],
  'Company': ['About Us', 'Blogs', 'Digital Library', 'FAQ', 'Contact'],
}

export const sapHero = {
  title: 'SAP Transformation to Continuous Innovation —',
  highlight: 'One Partner for Your Entire SAP Journey.',
  paragraphs: [
    'Canopus GBS helps enterprises transform, modernize, and continuously optimize their SAP landscape with end-to-end capabilities across SAP S/4HANA, GROW with SAP, RISE with SAP, SAP BTP, integrations, custom development, automation, and SAP managed services.',
    'From your first SAP transformation to migration, modernization, enhancement, and ongoing support, we help you build an SAP environment that is scalable, secure, intelligent, and aligned to your business goals.',
  ],
  primaryCta: { label: 'Explore SAP Solutions', href: '/sap#sap-journey' },
  secondaryCta: { label: 'Talk to an SAP Expert', href: '/contact' },
  orbit: ['S/4HANA', 'RISE with SAP', 'GROW with SAP', 'SAP BTP', 'Integration', 'AMS'],
}

export const sapJourney = {
  eyebrow: 'SAP Transformation',
  title: 'One SAP Partner.',
  highlight: 'Every Stage of Your Transformation Journey.',
  intro: [
    'SAP transformation is more than moving from one platform to another. It is an opportunity to simplify processes, modernize your technology landscape, improve visibility, and create a foundation for continuous innovation.',
    'Canopus GBS brings together SAP expertise, cloud capabilities, automation, integration, AI, and managed services to help enterprises navigate their SAP journey from strategy to execution and beyond.',
  ],
  stages: [
    {
      icon: 'transform',
      title: 'Transform',
      text: 'Modernize your enterprise with SAP S/4HANA and intelligent business processes.',
    },
    {
      icon: 'migrate',
      title: 'Migrate',
      text: 'Move from legacy SAP and non-SAP environments to modern SAP landscapes.',
    },
    {
      icon: 'enhance',
      title: 'Enhance',
      text: 'Extend SAP capabilities through BTP, integrations, Fiori, ABAP, automation, and custom applications.',
    },
    {
      icon: 'manage',
      title: 'Manage',
      text: 'Keep your SAP environment secure, stable, optimized, and continuously improving.',
    },
  ],
}

export const sapSolutions = {
  eyebrow: 'SAP Solutions',
  title: 'SAP Solutions Built',
  highlight: 'Around Your Business',
  intro:
    'Whether you are starting your SAP journey, modernizing an existing landscape, or looking to optimize your current environment, Canopus GBS provides the expertise and capabilities to support your transformation.',
  items: [
    {
      icon: 's4hana',
      title: 'SAP S/4HANA',
      text: 'Build a modern digital core with SAP S/4HANA and simplify enterprise processes across finance, supply chain, procurement, manufacturing, sales, and more.',
    },
    {
      icon: 'grow',
      title: 'GROW with SAP',
      text: 'Accelerate your move to SAP S/4HANA Cloud Public Edition with a standardized, scalable, and cloud-first approach designed for organizations looking to adopt modern ERP with speed and agility.',
    },
    {
      icon: 'rise',
      title: 'RISE with SAP',
      text: 'Modernize your SAP landscape with a transformation approach designed to help enterprises move toward a more flexible and intelligent cloud-based ERP environment.',
    },
    {
      icon: 'btp',
      title: 'SAP BTP',
      text: 'Extend and integrate your SAP environment with SAP Business Technology Platform, enabling application development, integration, automation, data, analytics, and intelligent technologies.',
    },
    {
      icon: 'integration',
      title: 'SAP Integration',
      text: 'Connect SAP with your wider enterprise ecosystem through robust integrations across applications, platforms, data, and business processes.',
    },
    {
      icon: 'fiori',
      title: 'SAP Fiori',
      text: 'Deliver intuitive, role-based user experiences that simplify business processes and improve user adoption.',
    },
    {
      icon: 'abap',
      title: 'SAP ABAP & Custom Development',
      text: 'Develop and extend SAP capabilities with custom applications, enhancements, integrations, and enterprise-specific solutions.',
    },
    {
      icon: 'automation',
      title: 'SAP Automation',
      text: 'Reduce manual effort and improve operational efficiency through automation across SAP processes and IT operations.',
    },
  ],
}

export const sapCloudPath = {
  eyebrow: 'GROW with SAP & RISE with SAP',
  title: 'Choose the SAP Cloud Path That',
  highlight: 'Fits Your Transformation',
  intro: [
    'Every organization has different business requirements, operating models, compliance needs, and transformation priorities.',
    'Canopus GBS helps enterprises evaluate and navigate the right SAP cloud approach based on their current landscape and future business objectives.',
  ],
  paths: [
    {
      icon: 'grow',
      title: 'GROW with SAP',
      tagline: 'For organizations embracing a standardized cloud ERP journey.',
      points: [
        'SAP S/4HANA Cloud Public Edition',
        'Standardized business processes',
        'Cloud-first ERP transformation',
        'Faster adoption',
        'Continuous innovation',
        'Scalable enterprise foundation',
      ],
    },
    {
      icon: 'rise',
      title: 'RISE with SAP',
      tagline: 'For enterprises looking to transform and modernize their existing SAP landscape.',
      points: [
        'SAP transformation roadmap',
        'Cloud ERP transformation',
        'Existing SAP landscape modernization',
        'Business process transformation',
        'Integration and extensibility',
        'Continuous optimization',
      ],
    },
  ],
  value: {
    title: 'From SAP Vision to',
    highlight: 'SAP Value',
    steps: ['Assess', 'Design', 'Transform', 'Migrate', 'Integrate', 'Optimize'],
    cta: { label: 'Discuss Your SAP Cloud Journey', href: '/contact' },
  },
}

export const sapTransformServices = {
  eyebrow: 'SAP Transformation Services',
  title: 'Transform Your',
  highlight: 'SAP Digital Core',
  intro:
    'Our SAP transformation capabilities help organizations move from complex legacy landscapes to modern, connected, and intelligent SAP environments.',
  items: [
    {
      icon: 'implement',
      title: 'SAP S/4HANA Implementation',
      text: 'End-to-end implementation aligned to your business processes and transformation objectives.',
    },
    {
      icon: 'convert',
      title: 'SAP S/4HANA Conversion',
      text: 'Transform existing SAP environments into a modern S/4HANA digital core.',
    },
    {
      icon: 'legacy',
      title: 'Legacy to SAP',
      text: 'Modernize non-SAP or legacy enterprise environments through structured SAP transformation.',
    },
    {
      icon: 'cloud',
      title: 'SAP Cloud Transformation',
      text: 'Build a scalable SAP landscape aligned with your cloud and business strategy.',
    },
    {
      icon: 'integration',
      title: 'Functional Integration',
      text: 'Connect SAP with enterprise applications and business systems for seamless process flow.',
    },
    {
      icon: 'optimize',
      title: 'SAP Process Optimization',
      text: 'Simplify processes, reduce complexity, and improve operational efficiency.',
    },
  ],
}

export const sapMigration = {
  eyebrow: 'SAP Migration',
  title: 'Move to a Modern SAP Landscape',
  highlight: 'with Confidence',
  intro: [
    'SAP migration requires more than technology expertise. It requires a clear understanding of your existing landscape, business processes, integrations, data, customizations, and future requirements.',
    'Canopus GBS helps organizations plan and execute SAP migrations with a structured approach designed to minimize disruption and maximize business value.',
  ],
  capabilitiesTitle: 'Our Migration Capabilities',
  capabilities: [
    { icon: 'cloud', title: 'SAP on Cloud', text: 'Modernize SAP infrastructure through cloud adoption.' },
    { icon: 'convert', title: 'S/4HANA Conversion', text: 'Transition existing SAP environments to S/4HANA.' },
    { icon: 'legacy', title: 'Legacy SAP Migration', text: 'Modernize legacy SAP landscapes with a structured transformation roadmap.' },
    { icon: 'erp', title: 'Non-SAP to SAP', text: 'Support organizations moving from legacy or non-SAP ERP environments to SAP.' },
    { icon: 'data', title: 'Data Migration', text: 'Plan and execute reliable enterprise data migration.' },
    { icon: 'integration', title: 'Integration Migration', text: 'Ensure critical integrations continue to work across the transformed landscape.' },
  ],
  approachTitle: 'Migration Approach',
  approach: ['Assess', 'Plan', 'Prepare', 'Migrate', 'Validate', 'Go Live', 'Optimize'],
}

export const sapManaged = {
  eyebrow: 'SAP Managed Services',
  title: 'Keep SAP Running.',
  highlight: ['Optimized.', 'Secure.', 'Always Evolving.'],
  lead: 'Going live is not the end of your SAP journey.',
  intro:
    'Canopus GBS provides ongoing SAP managed services designed to maintain system stability, improve performance, resolve issues proactively, and continuously optimize your SAP environment.',
  health: ['Monitoring', 'Performance', 'Security', 'Optimization'],
  servicesEyebrow: 'Our SAP Managed Services',
  services: [
    { icon: 'ams', title: 'SAP AMS', text: 'Application Management Services for continuous support, monitoring, issue resolution, and optimization.' },
    { icon: 'basis', title: 'SAP Basis', text: 'System administration, performance management, monitoring, upgrades, configuration, and technical operations.' },
    { icon: 'grc', title: 'SAP GRC', text: 'Support governance, risk, compliance, and access management requirements.' },
    { icon: 'database', title: 'Database Managed Services', text: 'Database monitoring, administration, optimization, performance management, and support.' },
    { icon: 'cloud', title: 'SAP Cloud Operations', text: 'Support and optimize SAP environments operating across modern cloud infrastructure.' },
    { icon: 'monitor', title: 'SAP Monitoring', text: 'Proactive monitoring to identify issues before they impact business operations.' },
    { icon: 'support', title: 'SAP Support', text: 'Functional and technical support across your SAP landscape.' },
    { icon: 'optimize', title: 'Continuous Optimization', text: 'Identify opportunities to improve performance, automate processes, reduce complexity, and increase business value.' },
  ],
}

export const sapOperations = {
  eyebrow: '24/7 SAP Operations',
  title: 'From Reactive Support to',
  highlight: 'Proactive SAP Management',
  reactive: 'Traditional support waits for issues to occur.',
  proactive:
    'Our approach focuses on monitoring, prevention, automation, optimization, and continuous improvement.',
  steps: [
    { icon: 'monitor', title: 'Monitor', text: 'Continuous visibility across your SAP environment.' },
    { icon: 'detect', title: 'Detect', text: 'Identify anomalies, performance issues, and potential risks.' },
    { icon: 'resolve', title: 'Resolve', text: 'Address incidents quickly with structured support processes.' },
    { icon: 'prevent', title: 'Prevent', text: 'Use proactive monitoring and analysis to reduce recurring issues.' },
    { icon: 'optimize', title: 'Optimize', text: 'Continuously improve system performance and operational efficiency.' },
    { icon: 'innovate', title: 'Innovate', text: 'Identify opportunities for automation, AI, and modernization.' },
  ],
}

export const sapAutomation = {
  eyebrow: 'SAP + Automation',
  title: 'Automation at the Core of',
  highlight: 'SAP Operations',
  intro: [
    'Automation can transform how SAP environments are managed and how business processes are executed.',
    'Canopus GBS combines SAP expertise with automation capabilities to reduce repetitive work, improve operational consistency, and accelerate service delivery.',
  ],
  items: [
    { icon: 'process', label: 'Process Automation' },
    { icon: 'it', label: 'IT Automation' },
    { icon: 'monitor', label: 'Monitoring Automation' },
    { icon: 'workflow', label: 'Workflow Automation' },
    { icon: 'ops', label: 'SAP Operations Automation' },
    { icon: 'ai', label: 'AI-Assisted Operations' },
  ],
  tagline: ['Less Manual Effort.', 'More Intelligent Operations.'],
}

export const sapAi = {
  eyebrow: 'SAP + AI',
  title: 'Make Your SAP Landscape',
  highlight: 'More Intelligent',
  intro: [
    'The next generation of SAP transformation is increasingly driven by AI, automation, data, and intelligent decision-making.',
    'Canopus GBS helps organizations explore practical opportunities to introduce AI into SAP-enabled business processes and IT operations.',
  ],
  possibilitiesTitle: 'AI-Powered Possibilities',
  possibilities: [
    'Intelligent process automation',
    'AI-assisted IT operations',
    'Intelligent monitoring',
    'Data-driven decision support',
    'Automated insights',
    'Enterprise workflow optimization',
    'Intelligent document processing',
    'AI-enabled business applications',
  ],
  chain: ['Automation', 'Intelligence', 'Business Impact'],
  tagline: 'From Automation to Intelligence. From Intelligence to Business Impact.',
}

export const sapCustomApps = {
  eyebrow: 'Custom Applications',
  title: 'SAP + Custom Applications.',
  highlight: 'One Connected Ecosystem.',
  lead: 'Enterprise technology rarely ends with SAP.',
  intro: [
    'Organizations often need custom applications, portals, integrations, workflows, and digital tools that work seamlessly with their SAP environment.',
    'Canopus GBS helps create connected enterprise ecosystems using technologies including:',
  ],
  techs: [
    { key: 'dotnet', mark: '.NET', title: '.NET', text: 'Enterprise application development and integrations.' },
    { key: 'java', mark: 'Java', title: 'Java', text: 'Scalable enterprise applications and business solutions.' },
    { key: 'python', mark: 'Py', title: 'Python', text: 'Automation, data, AI, integrations, and intelligent applications.' },
    { key: 'sap', mark: 'SAP', title: 'SAP Technologies', text: 'ABAP, Fiori, BTP, APIs, integrations, and extensions.' },
  ],
  equation: ['SAP Core', 'Custom Applications', 'Integrations'],
  result: 'Connected Enterprise',
}

export const sapCoe = {
  eyebrow: 'SAP Centre of Excellence',
  title: 'SAP Expertise. Shared Knowledge.',
  highlight: 'Continuous Improvement.',
  intro:
    'Our SAP Centre of Excellence brings together technology expertise, delivery experience, best practices, automation, and continuous improvement to help organizations maximize their SAP investment.',
  enablesTitle: 'What Our SAP CoE Enables',
  items: [
    { icon: 'best', title: 'Best Practices', text: 'Reusable knowledge and proven approaches.' },
    { icon: 'expert', title: 'SAP Expertise', text: 'Functional and technical capabilities across the SAP landscape.' },
    { icon: 'auto', title: 'Automation', text: 'Automation-led delivery and operations.' },
    { icon: 'gov', title: 'Governance', text: 'Structured processes, standards, and performance management.' },
    { icon: 'improve', title: 'Continuous Improvement', text: 'Ongoing optimization and innovation.' },
    { icon: 'knowledge', title: 'Knowledge Management', text: 'Centralized knowledge and experience across engagements.' },
  ],
}

export const sapFinalCta = {
  title: 'Ready to Transform Your',
  highlight: 'SAP Landscape?',
  text: "Whether you're evaluating GROW with SAP, RISE with SAP, S/4HANA, SAP migration, BTP, automation, or SAP managed services, Canopus GBS can help you define the right path and execute it with confidence.",
  tagline: "Let's Build Your Next-Generation SAP Enterprise.",
  primaryCta: { label: 'Talk to an SAP Expert', href: '/contact' },
  secondaryCta: { label: 'Explore SAP Solutions', href: '/sap-solutions' },
}

export const aboutPage = {
  hero: {
    eyebrow: 'About Us',
    title: 'Simplifying Complexity.',
    highlight: 'Unlocking New Possibilities.',
    intro:
      'Canopus GBS is a global technology and digital transformation company helping enterprises simplify complexity, modernize technology, and unlock new possibilities through intelligent digital solutions.',
  },
  story: {
    eyebrow: 'Our Story',
    paragraphs: [
      'Established in 2014, Canopus GBS has evolved from a team of SAP domain experts into a broader Digital Transformation Catalyst, combining enterprise technology, innovation, and deep domain expertise to deliver value-driven solutions for organizations across the globe.',
      'Today, our capabilities span SAP, Cloud & Infrastructure, Cybersecurity, AI & Data, ERP, Custom Applications, Automation, and Managed Services, enabling us to support organizations across their transformation journey—from strategy and implementation to optimization and ongoing operations.',
    ],
    milestones: [
      { tag: '2014', title: 'Established', text: 'A team of SAP domain experts.' },
      { tag: 'Evolved', title: 'Digital Transformation Catalyst', text: 'Enterprise technology, innovation, and deep domain expertise.' },
      { tag: 'Today', title: 'End-to-End Capabilities', text: 'From strategy and implementation to optimization and ongoing operations.' },
    ],
    capabilities: ['SAP', 'Cloud & Infrastructure', 'Cybersecurity', 'AI & Data', 'ERP', 'Custom Applications', 'Automation', 'Managed Services'],
  },
  philosophy: {
    lead: 'Our philosophy is simple:',
    steps: ['Understand the challenge.', 'Simplify the complexity.', 'Build what matters.', 'And continuously create value.'],
  },
  vision: {
    eyebrow: 'Our Vision',
    title: 'Enabling a Future Where Technology Creates Possibility.',
    statement:
      'To be a trusted global technology partner that enables enterprises to transform, innovate, and grow through intelligent, secure, and connected digital ecosystems.',
  },
  mission: {
    eyebrow: 'Our Mission',
    title: 'Turning Technology into Business Value.',
    statement:
      'To simplify technology transformation by combining expertise, innovation, and customer-centric execution to deliver secure, scalable, and measurable business outcomes.',
  },
  leadership: {
    eyebrow: 'Leadership Team',
    intro:
      'Our leadership team brings together business perspective, technology expertise, industry experience, and a commitment to building long-term value for our customers and partners.',
    // Photos live in src/assets/team; names, titles and bios from canopusgbs.com/about
    people: [
      { photo: 'yk-naidu.jpeg', name: 'YK Naidu', title: 'CEO & Head of AI & Innovation', bio: 'Provides global leadership across SAP, BTP, AI and enterprise transformation initiatives.', linkedin: 'https://www.linkedin.com/in/yknaidu/' },
      { photo: 'sachin-mp.jpeg', name: 'Sachin MP', title: 'President – South East Asia', bio: 'Leads business expansion & delivery excellence across Southeast Asian markets.', linkedin: 'https://www.linkedin.com/in/sachinmps/' },
      { photo: 'sanjeev-tyagi.jpeg', name: 'Sanjeev Tyagi', title: 'Chief Digital Officer & President – MENA', bio: 'Drives digital transformation and enterprise modernization across the MENA region.', linkedin: 'https://www.linkedin.com/in/sanjeev-tyagi-85475329/' },
      { photo: 'ravichandra-m.jpeg', name: 'Ravichandra M', title: 'President – India', bio: 'Oversees India operations, SAP programs, and enterprise delivery initiatives.', linkedin: 'https://www.linkedin.com/in/ravichandra-mokshagundam-mrc/' },
      { photo: 'praveen-akolkar.jpeg', name: 'Praveen Akolkar', title: 'Chief Business Officer', bio: 'Leads business growth, customer success, and strategic engagements globally.', linkedin: 'https://www.linkedin.com/in/praveenakolkar/' },
      { photo: 'ravi-chodavarapu.jpg', name: 'Ravi Chodavarapu', title: 'President – North America, Head of Data & AI', bio: 'Responsible for global Data & AI, strategic partnerships, and North America business.', linkedin: 'https://www.linkedin.com/in/ravichodavarapu/' },
      { photo: 'ss-reddy.jpeg', name: 'S S Reddy (Vasu)', title: 'Chief Finance Officer', bio: 'Heads finance, governance, and compliance across global Canopus operations.', linkedin: 'https://www.linkedin.com/in/seelareddy-s-35583116/' },
      { photo: 'vijay-shrivastava.jpg', name: 'Vijay Shrivastava', title: 'Head of SAP Practice', bio: 'Leads SAP practice, solution delivery, and enterprise architecture excellence.', linkedin: 'https://www.linkedin.com/in/vishrivastava/' },
      { photo: 'george-baji-philip.jpg', name: 'George Baji Philip', title: 'President – Strategy & Operations', bio: 'Drives global operations strategy, governance, and organizational leadership.', linkedin: 'https://www.linkedin.com/in/georgebajiphilip/' },
      { photo: 'vinod-nair.jpg', name: 'Vinod Nair', title: 'Head / CISO – IT Infrastructure & Cybersecurity', bio: 'Leads cybersecurity, infrastructure strategy, and enterprise IT governance.', linkedin: 'https://www.linkedin.com/in/vinod-v-nair-23283176/' },
      // Bio and LinkedIn to be added
      { photo: 'samim.jpg', name: 'Samim Hossain', title: 'Director – Sales', bio: '', linkedin: '' },
    ],
  },
  presence: {
    eyebrow: 'Our Global Presence',
    title: 'Global Reach.',
    highlight: 'Local Understanding.',
    intro: 'Canopus GBS combines global delivery capabilities with local market understanding to support customers across geographies.',
    stats: [
      { value: '6', label: 'Countries' },
      { value: '8', label: 'Offices' },
      { value: '100+', label: 'Global Clients' },
    ],
    lead: 'Our current presence includes:',
    // lon/lat place each pin on the dotted world map; label = which side the name sits
    countries: [
      { code: 'in', name: 'India', lon: 78, lat: 21, label: 'top' },
      { code: 'my', name: 'Malaysia', lon: 102, lat: 4, label: 'right' },
      { code: 'sg', name: 'Singapore', lon: 104, lat: 1, label: 'bottom' },
      { code: 'ae', name: 'UAE', lon: 54, lat: 24, label: 'bottom' },
      { code: 'sa', name: 'Saudi Arabia', lon: 46.7, lat: 24.7, label: 'left' },
      { code: 'us', name: 'United States', lon: -97, lat: 38, label: 'top' },
    ],
  },
  cta: {
    title: 'Your Transformation Journey Starts with',
    highlight: 'the Right Partner.',
    lines: ['Technology transformation can be complex.', 'The right partner makes it connected, structured, and purposeful.'],
    text: 'Imagine what your enterprise could achieve when technology works as one. Canopus GBS brings the expertise, innovation, and connected capabilities to make that possibility real.',
    tagline: 'Let’s Build What’s Next, Together.',
    primaryCta: { label: 'Talk to Our Experts', href: '/contact' },
    secondaryCta: { label: 'Explore Our Services', href: '/#our-services' },
  },
}

export const digitalInfra = {
  eyebrow: 'Digital Infrastructure & Cloud',
  title: 'The Digital Foundation Behind',
  highlight: 'Every Modern Enterprise',
  lead: 'Your applications can only move as fast as the infrastructure beneath them.',
  intro: [
    'Canopus GBS helps enterprises rethink, modernize, and operate the technology foundation that powers their business—from on-premises infrastructure and data centers to cloud and hybrid environments.',
    'We bring together cloud, compute, storage, networking, infrastructure management, SAP environments, resilience, and 24×7 operations to create infrastructure that is built for performance today and prepared for tomorrow.',
  ],
  pillars: ['Modern infrastructure.', 'Connected environments.', 'Always-on operations.'],
  cta: { label: 'Modernize Your Infrastructure', href: '/contact' },
  // Layers shown in the banner's infrastructure stack graphic
  stack: ['Cloud', 'Hybrid', 'Network', 'Compute', 'Storage', 'Data Center'],

  reimagined: {
    eyebrow: 'Infrastructure, Reimagined',
    title: 'From IT Infrastructure to a',
    highlight: 'Business-Ready Digital Foundation',
    problem:
      'Traditional infrastructure can become complex, fragmented, and difficult to scale. Modern enterprises need an environment where workloads can move, resources can scale, systems can stay available, and operations remain predictable.',
    closing: 'Canopus GBS helps transform infrastructure into a flexible, scalable and business-aligned foundation.',
    from: { label: 'Traditional Infrastructure', points: ['Complex', 'Fragmented', 'Difficult to scale'] },
    to: {
      label: 'Business-Ready Foundation',
      points: ['Workloads can move', 'Resources can scale', 'Systems stay available', 'Operations remain predictable'],
    },
  },

  capabilitiesEyebrow: 'What We Bring to Your Infrastructure',
  capabilitiesIntro:
    'Canopus GBS brings cloud, infrastructure, networking, storage, data centers, and managed operations together as one connected digital foundation.',
  capabilities: [
    {
      icon: 'cloud',
      title: 'Cloud Infrastructure',
      short: 'Cloud',
      text: 'Build scalable and flexible cloud environments aligned to business needs.',
      items: ['Cloud Strategy & Architecture', 'Cloud Migration', 'Workload Migration', 'Hybrid & Multi-Cloud', 'Cloud Optimization'],
    },
    {
      icon: 'server',
      title: 'Compute & Server Infrastructure',
      short: 'Compute',
      text: 'Reliable infrastructure for enterprise applications and critical workloads.',
      items: ['Physical & Virtual Servers', 'Virtualization', 'Server Consolidation', 'Capacity Planning', 'Server Administration'],
    },
    {
      icon: 'network',
      title: 'Network Infrastructure',
      short: 'Network',
      text: 'Connect applications, locations, users, and cloud environments seamlessly.',
      items: ['Enterprise Networking', 'LAN / WAN', 'Routing & Switching', 'Network Management', 'Connectivity & Performance'],
    },
    {
      icon: 'storage',
      title: 'Storage & Backup',
      short: 'Storage',
      text: 'Reliable storage and recovery infrastructure for critical workloads.',
      items: ['Storage Architecture', 'Storage Management', 'Backup & Recovery', 'Capacity Planning', 'Storage Optimization'],
    },
    {
      icon: 'datacenter',
      title: 'Data Center Infrastructure',
      short: 'Data Center',
      text: 'Modernize and optimize the infrastructure behind your critical systems.',
      items: ['Data Center Assessment', 'Infrastructure Modernization', 'Consolidation', 'Virtualization', 'Infrastructure Management'],
    },
    {
      icon: 'hybrid',
      title: 'Hybrid Infrastructure',
      short: 'Hybrid',
      text: 'Bring on-premises and cloud environments together through a flexible hybrid model.',
      items: ['Hybrid Architecture', 'Workload Placement', 'Infrastructure Integration', 'Hybrid Environment Management'],
    },
    {
      icon: 'observability',
      title: 'Infrastructure Observability',
      short: 'Observability',
      text: 'Gain visibility into infrastructure health, performance, and availability.',
      items: ['Infrastructure Monitoring', 'Server & Network Monitoring', 'Performance Monitoring', 'Capacity Visibility', 'Proactive Alerting'],
    },
    {
      icon: 'managed',
      title: 'Infrastructure Managed Services',
      short: 'Managed Ops',
      text: 'Keep your infrastructure running reliably with continuous operational support.',
      items: ['24×7 Monitoring', 'Infrastructure Administration', 'Incident & Problem Management', 'Patch Management', 'Capacity Management', 'SLA-Based Support'],
    },
  ],

  cloud: {
    eyebrow: 'Cloud Without the Complexity',
    // Two lines: "The Right Cloud. The Right" / "Workload. The Right Approach."
    title: ['The Right Cloud. The Right', 'Workload.'],
    highlight: 'The Right Approach.',
    lead: "Cloud transformation isn't about moving everything to the cloud. It's about choosing the right environment for every workload.",
    text: 'Canopus GBS helps enterprises design, migrate, manage, and optimize Public Cloud, Private Cloud, On-Premises, and Hybrid environments, with expertise across AWS and Microsoft Azure.',
    lifecycle: ['Design', 'Migrate', 'Manage', 'Optimize'],
    environments: [
      { icon: 'cloud', title: 'Public Cloud' },
      { icon: 'lock', title: 'Private Cloud' },
      { icon: 'server', title: 'On-Premises' },
      { icon: 'hybrid', title: 'Hybrid' },
    ],
    expertiseLabel: 'Expertise across',
  },

  workloads: {
    eyebrow: 'Infrastructure Built Around Your Workloads',
    text: 'Every workload has different infrastructure needs. We design environments around:',
    base: 'Your Infrastructure',
    items: [
      { icon: 'apps', title: 'Enterprise Applications', text: 'Built for performance, stability, and scalability.' },
      { icon: 'sap', title: 'SAP Landscapes', text: 'Infrastructure aligned to modern SAP environments and business requirements.' },
      { icon: 'shield', title: 'Business-Critical Workloads', text: 'Designed for availability, resilience, and continuity.' },
      { icon: 'globe', title: 'Distributed Environments', text: 'Infrastructure management across locations and enterprise environments.' },
      { icon: 'cloud', title: 'Cloud Workloads', text: 'Scalable infrastructure aligned with changing business demands.' },
    ],
  },

  alwaysOn: {
    eyebrow: 'Always-On Infrastructure',
    title: 'When Your Business Runs 24×7,',
    highlight: 'Your Infrastructure Should Too.',
    text: 'Our managed infrastructure services provide continuous monitoring, operational support, incident management, and performance management to keep critical environments running.',
    steps: [
      { icon: 'observability', title: 'Monitor' },
      { icon: 'search', title: 'Detect' },
      { icon: 'bolt', title: 'Respond' },
      { icon: 'check', title: 'Resolve' },
      { icon: 'trend', title: 'Improve' },
    ],
  },

  business: {
    eyebrow: 'Designed Around Your Business',
    title: 'There is no one-size-fits-all',
    highlight: 'infrastructure model.',
    text: 'We align infrastructure strategy with your:',
    factors: ['Workloads', 'Scale', 'Performance', 'Availability', 'Growth', 'Transformation'],
    resultLabel: 'The result',
    result: 'A digital foundation built around your business—not a predefined technology stack.',
  },
}

export const cyberTrust = {
  eyebrow: 'Cybersecurity & Digital Trust',
  title: 'Trust What You Connect.',
  highlight: 'Protect What You Build.',
  lead: 'Every connection creates an opportunity.',
  everything: ['Every user.', 'Every application.', 'Every API.', 'Every device.', 'Every workload.'],
  intro: [
    'As enterprises become more connected, security can no longer sit at the edge of the business. It needs to be built into the way the enterprise connects, operates, and grows.',
    'Canopus GBS helps enterprises create a security foundation where access is trusted, exposure is understood, vulnerabilities are validated, and threats are continuously monitored.',
  ],
  tagline: ['Know Your Exposure.', 'Control Your Access.', 'Strengthen Your Defense.'],
  cta: { label: 'Build Digital Trust', href: '/contact' },
  // Nodes orbiting the shield in the banner graphic
  orbit: [
    { icon: 'user', label: 'User' },
    { icon: 'app', label: 'Application' },
    { icon: 'api', label: 'API' },
    { icon: 'device', label: 'Device' },
    { icon: 'server', label: 'Workload' },
  ],

  knowing: {
    eyebrow: 'Security Begins With Knowing',
    title: "You Can't Protect",
    highlight: "What You Can't See.",
    lead: 'Your digital environment is constantly changing.',
    changes: [
      { icon: 'app', text: 'New applications are deployed.' },
      { icon: 'cloud', text: 'Cloud workloads expand.' },
      { icon: 'user', text: 'Users connect from everywhere.' },
      { icon: 'api', text: 'APIs exchange information.' },
      { icon: 'device', text: 'Devices become connected.' },
    ],
    surface: 'Your attack surface changes with them.',
    closing:
      'Canopus GBS helps you discover where you are exposed, what matters most, and where security needs to become stronger.',
    steps: ['Discover', 'Validate', 'Strengthen', 'Monitor'],
  },

  vapt: {
    eyebrow: 'Find the Weak Link Before Someone Else Does',
    title: 'VAPT That Tells You More Than',
    highlight: "What's Vulnerable.",
    report: 'A vulnerability report can tell you what is wrong.',
    questionLabel: 'The real question is:',
    question: 'What could actually be exploited—and what could it impact?',
    text: 'Canopus GBS takes VAPT beyond vulnerability discovery by combining testing, validation, risk prioritization, remediation guidance, and retesting.',
    stages: [
      { icon: 'search', title: 'Testing' },
      { icon: 'check', title: 'Validation' },
      { icon: 'flag', title: 'Risk Prioritization' },
      { icon: 'wrench', title: 'Remediation Guidance' },
      { icon: 'refresh', title: 'Retesting' },
    ],
  },

  perimeter: {
    eyebrow: 'Your Perimeter Has Changed',
    title: 'So Should Your',
    highlight: 'Security Strategy.',
    lead: 'The traditional perimeter is no longer enough.',
    spanLabel: 'Your enterprise may now span:',
    nodes: [
      { icon: 'user', label: 'Users' },
      { icon: 'app', label: 'Applications' },
      { icon: 'api', label: 'APIs' },
      { icon: 'cloud', label: 'Cloud' },
      { icon: 'server', label: 'Infrastructure' },
      { icon: 'device', label: 'Devices' },
      { icon: 'iot', label: 'IoT/OT' },
      { icon: 'building', label: 'Enterprise Systems' },
    ],
    oldPerimeter: 'Traditional perimeter',
    text: 'Canopus GBS brings a connected security perspective across these environments, helping organizations protect the relationships between them—not just the individual components.',
  },

  zeroTrust: {
    eyebrow: 'Zero Trust, Without the Complexity',
    title: "Don't Trust by Default.",
    highlight: 'Verify by Design.',
    text: "Zero Trust is more than a security product. It's an operating principle built around:",
    request: 'Access request',
    principles: [
      { icon: 'user', title: 'Verify', text: 'Who is requesting access?' },
      { icon: 'target', title: 'Understand', text: 'What are they trying to access?' },
      { icon: 'scale', title: 'Evaluate', text: 'Is the request appropriate for the context?' },
      { icon: 'key', title: 'Control', text: 'What level of access is required?' },
      { icon: 'eye', title: 'Monitor', text: 'Does the activity remain trustworthy?' },
    ],
    closing:
      'Canopus GBS helps enterprises move toward a least-privilege, identity-centric security model designed around continuous verification.',
  },

  environments: {
    eyebrow: 'Security for the Connected Enterprise',
    title: 'Different Environments.',
    highlight: 'One Security Perspective.',
    items: [
      { icon: 'app', title: 'Applications', text: 'Identify vulnerabilities across web, mobile, and enterprise applications.' },
      { icon: 'api', title: 'APIs', text: 'Validate the interfaces connecting applications, systems, and services.' },
      { icon: 'cloud', title: 'Cloud', text: 'Assess cloud configurations, identities, workloads, and security controls.' },
      { icon: 'server', title: 'Infrastructure', text: 'Strengthen networks, servers, and critical infrastructure.' },
      { icon: 'iot', title: 'IoT & OT', text: 'Assess the security of connected devices and operational environments.' },
      { icon: 'key', title: 'Identities', text: 'Control privileged and user access across the enterprise.' },
    ],
  },

  watching: {
    eyebrow: 'Security That Keeps Watching',
    title: "Because Threats Don't Follow",
    highlight: 'Business Hours.',
    lead: 'Security needs continuous attention.',
    text: 'Our security operations capabilities help organizations maintain visibility across critical environments through continuous monitoring, event analysis, incident handling, and operational reporting.',
    steps: [
      { icon: 'eye', title: 'See', text: 'Gain visibility into security events.' },
      { icon: 'radar', title: 'Detect', text: 'Identify unusual or potentially malicious activity.' },
      { icon: 'search', title: 'Investigate', text: 'Understand what happened and where.' },
      { icon: 'shield', title: 'Respond', text: 'Take appropriate action to contain and resolve incidents.' },
      { icon: 'bulb', title: 'Learn', text: 'Use security insights to strengthen future defenses.' },
    ],
  },

  trust: {
    eyebrow: 'From Security Posture to Digital Trust',
    title: 'Trust Is Earned Through',
    highlight: 'Every Interaction.',
    text: 'Digital trust is created when users, customers, employees, partners, and systems can interact with confidence.',
    through: 'Canopus GBS helps organizations strengthen that confidence through:',
    center: 'Digital Trust',
    pillars: [
      { icon: 'user', title: 'Identity', text: 'Know who is accessing your environment.' },
      { icon: 'key', title: 'Access', text: 'Give the right level of access.' },
      { icon: 'eye', title: 'Visibility', text: 'Understand what is happening.' },
      { icon: 'check', title: 'Validation', text: 'Test whether controls actually work.' },
      { icon: 'shield', title: 'Resilience', text: 'Prepare for disruption.' },
      { icon: 'scale', title: 'Governance', text: 'Keep security aligned with business requirements.' },
    ],
  },

  evolves: {
    eyebrow: 'Security That Evolves With Your Business',
    title: 'Your security posture should',
    highlight: 'never be static.',
    text: 'As your business adds new applications, cloud workloads, connected devices, users, integrations, and digital services, your security strategy needs to evolve with it.',
    additions: ['Applications', 'Cloud workloads', 'Connected devices', 'Users', 'Integrations', 'Digital services'],
  },

  final: {
    title: "Don't Just Secure Your Technology.",
    highlight: 'Build Confidence Into Your Digital Enterprise.',
    text: 'From finding the vulnerability to validating the defense and monitoring what happens next, Canopus GBS helps enterprises build security into the way they operate and grow.',
    words: ['Know.', 'Trust.', 'Defend.', 'Watch.'],
    signature: 'Canopus GBS | Building Digital Trust for the Connected Enterprise',
    cta: { label: 'Start Your Security Journey', href: '/contact' },
  },
}

export const dataAi = {
  eyebrow: 'Data, Analytics & AI',
  title: 'From Data Everywhere to',
  highlight: 'Intelligence Everywhere.',
  lead: 'Your enterprise is generating data at every moment.',
  intro:
    'From ERP and business applications to operations, customers, connected systems, and cloud environments, valuable information is constantly being created.',
  twist: "But data alone doesn't create advantage.",
  body: 'Canopus GBS helps enterprises turn fragmented information into connected intelligence, actionable insights, and AI-powered outcomes—so teams can understand what is happening, why it is happening, and what to do next.',
  tagline: ['Collect Less Noise.', 'Create More Intelligence.'],
  cta: { label: 'Unlock Your Data Potential', href: '/contact' },
  // Banner graphic: sources flow into the AI core, which answers three questions
  sources: ['ERP', 'Applications', 'Operations', 'Customers', 'Connected Systems', 'Cloud'],
  answers: ['What is happening', 'Why it is happening', 'What to do next'],

  dashboards: {
    eyebrow: 'Your Data Knows More Than Your Dashboards Show',
    title: "The Opportunity Isn't More Data.",
    highlight: "It's Better Intelligence.",
    shortage: "Most organizations don't have a data shortage.",
    spread: 'They have data spread across systems, applications, departments, and platforms.',
    closing: 'Canopus GBS helps bring that information together to create a clearer view of the business.',
    silos: ['Systems', 'Applications', 'Departments', 'Platforms'],
    view: 'A clearer view of the business',
    cycle: ['Connect', 'Understand', 'Predict', 'Act', 'Learn'],
  },

  capabilities: {
    eyebrow: 'What We Bring Together',
    items: [
      { icon: 'pipeline', title: 'Data Engineering', text: 'Build scalable, governed data pipelines and platforms.' },
      { icon: 'dashboard', title: 'Business Intelligence', text: 'Give decision-makers a clear view of what matters.' },
      {
        icon: 'chart',
        title: 'Advanced Analytics',
        text: 'Discover patterns, opportunities, and business signals hidden in data.',
        visual: 'bars',
      },
      { icon: 'brain', title: 'Artificial Intelligence', text: 'Apply AI to business processes, knowledge, customer experiences, and operations.' },
      {
        icon: 'agent',
        title: 'Generative AI & AI Agents',
        text: 'Create intelligent assistants and autonomous workflows that can reason, respond, and act within defined business processes.',
        visual: 'agent',
        featured: true,
      },
      { icon: 'shield', title: 'Data Governance', text: 'Build trusted, secure, and accessible data with the right governance framework.' },
    ],
    agentSteps: ['Reason', 'Respond', 'Act'],
  },

  fits: {
    eyebrow: 'Intelligence That Fits Your Enterprise',
    text: 'Whether your data lives in SAP, cloud platforms, applications, databases, or across disconnected systems, Canopus GBS brings it together into an intelligence layer designed for your business.',
    layer: 'Intelligence Layer',
    layerSub: 'Designed for your business',
    sources: [
      { icon: 'sap', label: 'SAP Data' },
      { icon: 'cloud', label: 'Cloud Data' },
      { icon: 'dashboard', label: 'Enterprise Applications' },
      { icon: 'iot', label: 'IoT & Operational Data' },
      { icon: 'users', label: 'Customer Data' },
    ],
  },

  maturity: {
    eyebrow: 'From Dashboards to Digital Intelligence',
    stages: [
      { icon: 'dashboard', title: 'Traditional analytics', question: 'What happened?', text: 'Traditional analytics tells you what happened.' },
      { icon: 'chart', title: 'Advanced analytics', question: 'Why did it happen?', text: 'Advanced analytics helps explain why it happened.' },
      { icon: 'brain', title: 'AI', question: 'What could happen next?', text: 'AI helps you understand what could happen next.' },
      { icon: 'agent', title: 'Intelligent automation', question: 'What should we do?', text: 'Intelligent automation helps you decide what to do about it.' },
    ],
    closing: 'Canopus GBS connects all four to create a more intelligent enterprise.',
  },

  outcome: {
    eyebrow: 'The Outcome',
    outcomes: ['Better Data.', 'Clearer Insights.', 'Smarter Decisions.', 'Intelligent Operations.'],
    text: "Build an enterprise where data doesn't just inform the business—it helps move it forward.",
    signature: 'Canopus GBS | Data + Analytics + AI',
  },
}

export const digitalWorkplace = {
  eyebrow: 'Digital Workplace & Automation',
  title: 'Make Work',
  highlight: 'Flow.',
  subtitle: 'Less Friction. Fewer Handoffs. More Momentum.',
  intro: [
    "Work shouldn't get stuck between people, applications, approvals, and processes.",
    'Canopus GBS connects the digital workplace with intelligent automation to remove the friction behind everyday work—bringing people, processes, applications, and AI together so work moves naturally from intent to action.',
  ],
  tagline: ['Connect.', 'Simplify.', 'Automate.', 'Accelerate.'],
  cta: { label: 'Talk to Our Experts', href: '/contact' },
  // Banner graphic: a work item travels from intent to action through these stops
  path: [
    { icon: 'users', label: 'People' },
    { icon: 'flow', label: 'Processes' },
    { icon: 'apps', label: 'Applications' },
    { icon: 'spark', label: 'AI' },
  ],
  pathStart: 'Intent',
  pathEnd: 'Action',

  friction: {
    title: 'Where Work Gets Stuck,',
    highlight: 'We Make It Move.',
    lead: 'Every business has invisible friction.',
    items: [
      { icon: 'clock', text: 'A request waiting for approval.' },
      { icon: 'search', text: 'Information buried across applications.' },
      { icon: 'repeat', text: 'A repetitive task consuming hours.' },
      { icon: 'switch', text: 'Teams switching between disconnected systems.' },
      { icon: 'question', text: 'Employees searching for answers instead of getting work done.' },
    ],
    closing: 'We identify these moments, redesign the experience, and automate the work behind them.',
    stuck: 'Stuck',
    moving: 'Moving',
  },

  phases: {
    eyebrow: 'The New Way Work Moves',
    items: [
      {
        verb: 'See',
        icon: 'eye',
        title: 'Find the Friction',
        text: 'Understand where time, information, approvals, and processes get stuck.',
        tags: ['Process Discovery', 'Workplace Assessment', 'Workflow Mapping', 'Experience Analysis'],
      },
      {
        verb: 'Design',
        icon: 'pen',
        title: 'Redesign the Way Work Happens',
        text: 'Simplify processes before automating them. Remove unnecessary steps, handoffs, and complexity.',
        tags: ['Process Re-engineering', 'Digital Experience', 'Workflow Design', 'Service Design'],
      },
      {
        verb: 'Connect',
        icon: 'link',
        title: 'Make Systems Work Together',
        text: 'Connect people and processes across enterprise applications, SAP, cloud platforms, collaboration tools, and business systems.',
        tags: ['Integration', 'APIs', 'Enterprise Applications', 'Collaboration Platforms'],
      },
      {
        verb: 'Automate',
        icon: 'gear',
        title: 'Turn Repetition Into Flow',
        text: 'Let technology take care of predictable, repetitive work while people focus on higher-value activities.',
        tags: ['Workflow Automation', 'RPA', 'Low-Code', 'No-Code', 'Intelligent Automation'],
      },
      {
        verb: 'Augment',
        icon: 'spark',
        title: 'Put Intelligence Into the Workflow',
        text: 'Bring AI into the places where people work—helping them find, understand, create, decide, and act faster.',
        tags: ['Generative AI', 'AI Assistants', 'AI Agents', 'Intelligent Search', 'AI Workflows'],
      },
    ],
  },

  journey: {
    eyebrow: 'From Clicks to Outcomes',
    lead: "We don't automate tasks simply because they can be automated.",
    text: 'We look at the entire journey.',
    steps: [
      { icon: 'users', label: 'Employee Request' },
      { icon: 'search', label: 'Information & Context' },
      { icon: 'check', label: 'Decision & Approval' },
      { icon: 'gear', label: 'Automation' },
      { icon: 'apps', label: 'System Action' },
      { icon: 'flag', label: 'Outcome' },
    ],
    result: 'The result is not just fewer clicks.',
    resultStrong: 'It is faster business movement.',
  },

  workplace: {
    eyebrow: 'One Workplace. Many Possibilities.',
    hub: 'One Workplace',
    hubSub: 'Many Possibilities',
    items: [
      { icon: 'apps', title: 'Work', text: 'Give employees simpler ways to access information, services, and applications.' },
      { icon: 'users', title: 'Collaborate', text: 'Create connected experiences across teams, locations, and functions.' },
      { icon: 'inbox', title: 'Request', text: 'Digitize employee and business service requests.' },
      { icon: 'check', title: 'Approve', text: 'Replace email-driven approvals with structured, trackable workflows.' },
      { icon: 'gear', title: 'Automate', text: 'Remove repetitive work from everyday processes.' },
      { icon: 'spark', title: 'Assist', text: 'Use AI to help people find answers, create content, and complete tasks.' },
      { icon: 'link', title: 'Integrate', text: 'Connect the workplace to the systems that run the business.' },
    ],
  },

  people: {
    eyebrow: 'Automation That Starts With People',
    lead: 'Technology should not make work more complicated.',
    text: 'Our approach puts the employee experience at the center—designing automation around how people actually work.',
    circles: ['Human Experience', 'Digital Workflow', 'Intelligent Automation'],
    center: 'People',
    not: "Because the goal isn't to automate people.",
    goal: "It's to give people better ways to work.",
  },

  workforce: {
    eyebrow: 'From Digital Workplace to Digital Workforce',
    lead: 'The workplace is evolving.',
    eras: [
      { when: 'First', text: 'we connected people.', nodes: 1 },
      { when: 'Then', text: 'we connected applications.', nodes: 2 },
      { when: 'Now', text: 'we are connecting people, processes, data, and intelligence.', nodes: 4 },
    ],
    towards: 'Canopus GBS helps enterprises move toward a workplace where:',
    where: [
      { icon: 'users', text: 'People collaborate.' },
      { icon: 'link', text: 'Systems connect.' },
      { icon: 'flow', text: 'Processes flow.' },
      { icon: 'spark', text: 'AI assists.' },
      { icon: 'gear', text: 'Automation acts.' },
    ],
  },

  offerings: {
    eyebrow: 'Built Around Your Business',
    items: [
      { icon: 'chat', title: 'Microsoft 365 & Collaboration' },
      { icon: 'flow', title: 'Workflow & Process Automation' },
      { icon: 'blocks', title: 'Low-Code / No-Code Solutions' },
      { icon: 'gear', title: 'RPA & Intelligent Automation' },
      { icon: 'spark', title: 'AI Assistants & AI Agents' },
      { icon: 'link', title: 'Enterprise Application Integration' },
      { icon: 'heart', title: 'Employee Experience' },
      { icon: 'inbox', title: 'Digital Service Management' },
    ],
  },

  difference: {
    eyebrow: 'The Canopus Difference',
    items: [
      { title: 'Start With the Work', text: 'We understand the process before introducing technology.' },
      { title: 'Simplify Before You Automate', text: "A complicated process shouldn't become a complicated automated process." },
      { title: 'Connect the Ecosystem', text: 'Bring workplace technologies together with SAP, ERP, cloud, ITSM, and enterprise applications.' },
      { title: 'Add Intelligence Where It Matters', text: 'Use AI where it can genuinely improve speed, context, and decision-making.' },
      { title: 'Design for Continuous Change', text: 'Build a workplace that can evolve as your people, processes, and technology evolve.' },
    ],
  },

  final: {
    title: 'Work Should',
    highlight: 'Move Forward.',
    nots: [
      { icon: 'mail', text: 'Not wait for the next email.' },
      { icon: 'sheet', text: 'Not depend on the next spreadsheet.' },
      { icon: 'switch', text: 'Not get lost between systems.' },
    ],
    text: 'Canopus GBS helps enterprises create workplaces where work moves—with less friction, more intelligence, and greater momentum.',
    tagline: ['Connect Work.', 'Automate Work.', 'Move Business Forward.'],
  },
}

export const carinAi = {
  eyebrow: 'Intelligent SAP Automation Platform',
  title: 'Make SAP Work',
  highlight: 'Smarter.',
  subtitle: 'From SAP Processes to Intelligent Outcomes.',
  lead: 'SAP runs the enterprise. CarinAI makes it move faster.',
  intro: [
    'CarinAI is Canopus GBS’s intelligent automation platform, built on SAP BTP to transform repetitive, manual, and fragmented SAP processes into intelligent digital workflows.',
    'It brings together automation, AI, business rules, and process intelligence to simplify the work that happens around the SAP core—helping enterprises accelerate execution without compromising control, governance, or scalability.',
  ],
  tagline: ['Automate the Routine.', 'Accelerate the Critical.'],
  cta: { label: 'See CarinAI in Action', href: '/contact' },
  // Banner platform graphic, top to bottom
  stack: {
    outcome: 'Intelligent Digital Workflows',
    engine: ['Automation', 'AI', 'Business Rules', 'Process Intelligence'],
    platform: 'Built on SAP BTP',
    core: 'SAP Core',
  },

  beyond: {
    eyebrow: 'Intelligence Beyond the SAP Core',
    text: 'CarinAI is designed to address the operational gaps that traditional SAP implementations often leave behind.',
    closing:
      'From approvals and master data to procurement, finance, document processing, and access governance, CarinAI helps turn manual touchpoints into connected, intelligent workflows.',
    areas: [
      { icon: 'check', label: 'Approvals' },
      { icon: 'database', label: 'Master Data' },
      { icon: 'cart', label: 'Procurement' },
      { icon: 'coins', label: 'Finance' },
      { icon: 'doc', label: 'Document Processing' },
      { icon: 'key', label: 'Access Governance' },
    ],
    manual: 'Manual touchpoint',
    intelligent: 'Intelligent workflow',
  },

  why: {
    eyebrow: 'Why CarinAI?',
    items: [
      {
        icon: 'layers',
        title: 'SAP-Native by Design',
        text: 'Built with SAP BTP at its foundation, enabling organizations to extend their SAP landscape without unnecessary core modifications.',
        visual: 'native',
      },
      {
        icon: 'rocket',
        title: 'Faster Time to Value',
        text: 'Pre-built automation patterns help reduce the effort required to move from process discovery to deployment.',
        visual: 'value',
      },
      {
        icon: 'grow',
        title: 'Designed for Scale',
        text: 'Start with a single process and expand automation across functions and enterprise workflows.',
        visual: 'scale',
      },
      {
        icon: 'shield',
        title: 'Intelligence With Control',
        text: 'Combine AI capabilities with business rules, governance, and human oversight.',
        visual: 'control',
      },
      {
        icon: 'flow',
        title: 'Automation That Evolves',
        text: 'Move beyond task automation toward intelligent orchestration of end-to-end processes.',
        visual: 'evolve',
      },
    ],
    // Labels used by the small visuals inside the cards
    nativeLayers: ['CarinAI', 'SAP BTP', 'SAP Core'],
    valueSteps: ['Discovery', 'Deployment'],
    controlParts: ['AI', 'Business Rules', 'Governance', 'Human Oversight'],
    evolveFrom: 'Task automation',
    evolveTo: 'Intelligent orchestration',
  },

  advantage: {
    eyebrow: 'The CarinAI Advantage',
    items: [
      { icon: 'hand', title: 'Less Manual Intervention', text: 'Reduce repetitive operational effort.' },
      { icon: 'fast', title: 'Faster Process Cycles', text: 'Move approvals, transactions, and workflows forward faster.' },
      { icon: 'target', title: 'Greater Accuracy', text: 'Reduce errors associated with repetitive data entry and manual processing.' },
      { icon: 'eye', title: 'Better Visibility', text: 'Create greater transparency across automated processes.' },
      { icon: 'grow', title: 'Scalable Automation', text: 'Expand from individual use cases to enterprise-wide automation.' },
      { icon: 'agile', title: 'Stronger Business Agility', text: 'Respond faster as processes, regulations, and business requirements change.' },
    ],
  },

  final: {
    title: "The Future of SAP Isn't Just Digital.",
    highlight: "It's Intelligent.",
    text: 'CarinAI helps enterprises move from processes that require constant human effort to workflows that can intelligently understand, decide, and act.',
    steps: ['Understand', 'Decide', 'Act'],
    byline: 'CarinAI by Canopus GBS',
    tagline: ['Intelligent Automation.', 'Built for SAP.', 'Designed for Business.'],
  },
}

export const vegAi = {
  eyebrow: 'Intelligent SAP Operations, Reimagined',
  title: 'From SAP Support That Reacts to',
  highlight: 'SAP Operations That Anticipate.',
  intro: [
    'VegAI brings intelligence into SAP Application Management Services by moving beyond ticket-driven support toward predictive, proactive, and AI-assisted operations.',
    'It continuously monitors the SAP landscape, identifies early warning signals, interprets operational patterns, and guides teams toward faster resolution. By combining predictive monitoring, intelligent runbooks, SLA intelligence, and continuous optimization, VegAI helps organizations keep their SAP environment resilient, responsive, and aligned with business needs.',
  ],
  cta: { label: 'See VegAI in Action', href: '/contact' },
  // Banner console graphic
  console: {
    name: 'SAP Landscape',
    signal: 'Early warning signal',
    runbook: 'Guided runbook suggested',
    pillars: ['Predictive Monitoring', 'Intelligent Runbooks', 'SLA Intelligence', 'Continuous Optimization'],
  },

  different: {
    eyebrow: 'What Makes VegAI Different',
    // Before/after strip, drawn from the intro text
    reactiveLabel: 'Ticket-driven support',
    reactive: ['Issue occurs', 'Ticket raised', 'Firefighting'],
    proactiveLabel: 'With VegAI',
    proactive: ['Early signal', 'Predicted', 'Guided resolution', 'Improved'],
    items: [
      {
        icon: 'radar',
        title: 'Predict Before It Becomes a Problem',
        text: 'Detect anomalies and potential disruptions early, helping teams address issues before they become business-impacting incidents.',
      },
      {
        icon: 'book',
        title: 'Resolve With Intelligence',
        text: 'AI-assisted diagnostics and guided runbooks help support teams move from identifying an issue to resolving it with greater speed and consistency.',
      },
      {
        icon: 'loop',
        title: 'Turn AMS Into Continuous Improvement',
        text: 'Every incident becomes an opportunity to improve. VegAI enables recurring issues to be analyzed, optimized, and progressively eliminated.',
      },
      {
        icon: 'target',
        title: 'Connect IT Performance to Business Outcomes',
        text: 'Go beyond technical SLAs. Gain visibility into availability, response, resolution, and service performance through a business-focused operational lens.',
      },
      {
        icon: 'auto',
        title: 'Make SAP Operations More Autonomous',
        text: 'Bring intelligence into everyday SAP operations so teams can spend less time firefighting and more time improving the digital core.',
      },
    ],
  },

  capabilities: {
    eyebrow: 'VegAI Capabilities',
    items: [
      { icon: 'radar', title: 'Predictive SAP Monitoring' },
      { icon: 'spark', title: 'AI-Assisted Incident Analysis' },
      { icon: 'bell', title: 'Intelligent Alerting' },
      { icon: 'book', title: 'Guided Resolution Runbooks' },
      { icon: 'root', title: 'Root Cause Analysis' },
      { icon: 'gauge', title: 'SLA & KPI Intelligence' },
      { icon: 'loop', title: 'Recurring Issue Identification' },
      { icon: 'pulse', title: 'Performance & Availability Insights' },
      { icon: 'grow', title: 'Continuous Service Optimization' },
      { icon: 'brain', title: 'AMS Operations Intelligence' },
    ],
  },

  modern: {
    eyebrow: 'Built for the Modern SAP Enterprise',
    text: 'Whether your SAP landscape is S/4HANA, ECC, hybrid, or cloud-based, VegAI adds an intelligence layer across your AMS operations.',
    layer: 'VegAI Intelligence Layer',
    tags: ['SAP Monitoring', 'Predictive Operations', 'AI-Assisted AMS', 'Automation', 'Performance Intelligence', 'Continuous Improvement'],
    landscapes: [
      { icon: 'server', label: 'S/4HANA' },
      { icon: 'server', label: 'ECC' },
      { icon: 'hybrid', label: 'Hybrid' },
      { icon: 'cloud', label: 'Cloud' },
    ],
  },

  outcome: {
    eyebrow: 'The Outcome',
    title: 'Less Firefighting.',
    highlight: 'More Foresight.',
    text: 'With VegAI, SAP support evolves from reactive ticket management to proactive operational intelligence—helping enterprises improve system availability, accelerate resolution, reduce recurring incidents, and continuously enhance their SAP environment.',
    meters: [
      { label: 'Firefighting', dir: 'down' },
      { label: 'Foresight', dir: 'up' },
    ],
    results: [
      { icon: 'pulse', text: 'Improve system availability', dir: 'up' },
      { icon: 'fast', text: 'Accelerate resolution', dir: 'up' },
      { icon: 'loop', text: 'Reduce recurring incidents', dir: 'down' },
      { icon: 'grow', text: 'Continuously enhance your SAP environment', dir: 'up' },
    ],
    tagline: ['See earlier.', 'Act faster.', 'Improve continuously.'],
  },
}

export const smartOps = {
  eyebrow: 'Integrated Digital Operations Platform',
  title: 'One Intelligent Layer for',
  highlight: 'Every IT Operation',
  lead: 'Turn IT complexity into connected, predictable, and intelligent operations.',
  intro:
    'SMARTOPS is an integrated digital operations platform that brings IT service management, asset intelligence, and IT operations together in one unified environment. By connecting people, processes, technology, and real-time insights, SMARTOPS helps organizations move from reactive support to proactive operations.',
  tagline: ['Connect.', 'Automate.', 'Predict.', 'Improve.'],
  primaryCta: { label: 'Explore SMARTOPS', href: '#pillars' },
  secondaryCta: { label: 'Talk to an Expert', href: '/contact' },
  // Banner graphic: what the platform connects, and its three pillars
  connects: ['People', 'Processes', 'Technology', 'Real-time Insights'],

  intelligent: {
    eyebrow: 'From IT Management to Intelligent Operations',
    text: 'Modern IT environments are constantly changing. New applications, devices, cloud services, infrastructure, users, and business demands create layers of operational complexity.',
    closing: 'SMARTOPS brings these moving parts together so your teams can see what is happening, why it is happening, and what needs to happen next.',
    parts: ['Applications', 'Devices', 'Cloud Services', 'Infrastructure', 'Users', 'Business Demands'],
    answers: ['What is happening', 'Why it is happening', 'What needs to happen next'],
  },

  pillarsTitle: 'One Platform.',
  pillarsHighlight: 'Three Operational Pillars.',
  pillars: [
    {
      id: 'itsm',
      tag: 'ITSM',
      name: 'IT Service Management',
      title: 'Deliver Better Digital Experiences',
      lead: 'Give employees and IT teams a smarter way to request, resolve, track, and manage services.',
      text: 'SMARTOPS simplifies the service lifecycle with intelligent workflows, centralized service visibility, and structured processes that help teams resolve issues efficiently.',
      capabilities: [
        'Incident & Request Management',
        'Problem & Change Management',
        'Service Catalog & Self-Service',
        'Knowledge Management',
        'SLA & Performance Management',
        'Automated Service Workflows',
      ],
      outcome: ['Faster resolution.', 'Better experiences.', 'Consistent service delivery.'],
      visual: { type: 'lifecycle', steps: ['Request', 'Resolve', 'Track', 'Manage'] },
    },
    {
      id: 'itam',
      tag: 'ITAM',
      name: 'IT Asset Management',
      title: 'Know Your Technology. Control Your Costs.',
      lead: 'Get a complete view of the technology estate—from acquisition to retirement.',
      text: 'SMARTOPS connects asset information, ownership, lifecycle activity, contracts, and costs to help organizations make informed technology decisions.',
      capabilities: [
        'Hardware & Software Asset Management',
        'Asset Discovery & Inventory',
        'Lifecycle & Warranty Tracking',
        'Procurement & Allocation',
        'Contract & License Management',
        'Asset Cost & Compliance Insights',
      ],
      outcome: ['Greater visibility.', 'Lower waste.', 'Smarter technology investments.'],
      visual: { type: 'asset', fields: ['Ownership', 'Lifecycle', 'Contracts', 'Costs'], from: 'Acquisition', to: 'Retirement' },
    },
    {
      id: 'itom',
      tag: 'ITOM',
      name: 'IT Operations Management',
      title: 'Move from Monitoring to Proactive Operations',
      lead: 'Monitor your technology environment through a connected operational view designed to help teams identify issues before they become business disruptions.',
      text: 'SMARTOPS brings infrastructure, applications, networks, and operational events into a single intelligence layer.',
      capabilities: [
        'Infrastructure & Application Monitoring',
        'Event & Alert Management',
        'Network Operations',
        'Technical Operations',
        'Performance & Availability Monitoring',
        'Automated Remediation',
      ],
      outcome: ['Fewer disruptions.', 'Faster response.', 'More resilient operations.'],
      visual: { type: 'events', sources: ['Infrastructure', 'Applications', 'Networks', 'Events'], layer: 'Single intelligence layer' },
    },
  ],

  proactive: {
    eyebrow: 'From Reactive IT to Proactive IT',
    lead: 'Traditional IT operations often begin with a problem.',
    shift: 'SMARTOPS helps organizations shift the starting point.',
    reactiveStart: 'Problem reported',
    steps: ['Detect', 'Understand', 'Predict', 'Automate', 'Resolve'],
    text: 'Instead of waiting for users to report an issue, teams can use connected operational intelligence to identify patterns, prioritize risks, and take action earlier.',
  },

  possibilities: {
    eyebrow: 'One Digital Operations Platform.',
    highlight: 'Multiple Possibilities.',
    colFunction: 'IT Function',
    colHelps: 'SMARTOPS Helps You',
    rows: [
      { icon: 'service', fn: 'Service Management', helps: 'Resolve, automate, and improve IT services' },
      { icon: 'asset', fn: 'Asset Management', helps: 'Track, optimize, and govern technology assets' },
      { icon: 'pulse', fn: 'IT Operations', helps: 'Monitor, analyze, and respond to operational events' },
      { icon: 'gear', fn: 'Automation', helps: 'Reduce repetitive manual activities' },
      { icon: 'chart', fn: 'Analytics', helps: 'Turn operational data into actionable insights' },
      { icon: 'shield', fn: 'Governance', helps: 'Improve control, compliance, and accountability' },
    ],
  },

  signal: {
    title: 'Make Every IT Signal',
    highlight: 'Count',
    text: 'SMARTOPS connects services, assets, infrastructure, and operations in one intelligent platform—turning IT signals into actionable insights, faster decisions, and smarter outcomes.',
    closing: 'From service requests to infrastructure alerts, SMARTOPS brings everything together to help teams see clearly, act quickly, and operate proactively.',
    inputs: ['Service requests', 'Assets', 'Infrastructure alerts', 'Operations'],
    outputs: ['Actionable insights', 'Faster decisions', 'Smarter outcomes'],
    verbs: ['See clearly.', 'Act quickly.', 'Operate proactively.'],
  },
}
