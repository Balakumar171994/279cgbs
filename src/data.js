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
    href: '/digital-services',
    dropdown: [
      { label: 'Digital Infrastructure / Cloud', href: '/digital-services#digital-infra' },
      { label: 'Cybersecurity / Digital Trust', href: '/digital-services#cybersecurity' },
      { label: 'Data, Analytics / AI', href: '/digital-services#data-ai' },
      { label: 'Digital Workplace / Automation', href: '/digital-services#digital-workplace' },
    ],
  },
  {
    label: 'Innovation & Products',
    href: '/products',
    dropdown: [
      { label: 'CarinAI', href: '/products#carinai' },
      { label: 'VegAI', href: '/products#vegai' },
      { label: 'SmartOps', href: '/products#smartops' },
    ],
  },
  { label: 'About Us', href: '/about' },
  {
    label: 'Resources',
    href: '/resources',
    dropdown: [
      { label: 'Case Studies', href: '/resources#case-studies' },
      { label: 'Blogs / FAQ', href: '/resources#blogs' },
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
    title: 'Digital Infrastructure / Cloud',
    desc: 'Cloud-native architecture, landing zones, and migration across AWS, Azure and GCP, built for scale and cost efficiency.',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity / Digital Trust',
    desc: 'Zero-trust security architecture, GRC frameworks, and continuous threat detection to protect what matters most.',
  },
  {
    id: 'data-ai',
    title: 'Data, Analytics / AI',
    desc: 'Modern data platforms, BI, and applied AI/ML models that turn enterprise data into decisions.',
  },
  {
    id: 'digital-workplace',
    title: 'Digital Workplace / Automation',
    desc: 'Microsoft 365, ITSM, and intelligent automation that make everyday work faster and friction-free.',
  },
]

export const products = [
  {
    id: 'carinai',
    name: 'CarinAI',
    tagline: 'AI-Powered SAP Automation',
    desc: 'A machine-learning engine that auto-resolves L1/L2 SAP tickets, cutting ticket volume and manual effort dramatically.',
    accent: 'from-navy to-navy-light',
  },
  {
    id: 'vegai',
    name: 'VegAI',
    tagline: 'Intelligent SAP Monitoring',
    desc: 'Predictive Basis monitoring that flags performance risk before it becomes downtime — proactive, not reactive AMS.',
    accent: 'from-navy-dark to-navy',
  },
  {
    id: 'smartops',
    name: 'SmartOps',
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
  'Digital Services': ['Cloud & Infrastructure', 'Cybersecurity', 'Data & AI', 'Digital Workplace'],
  'Products': ['CarinAI', 'VegAI', 'SmartOps'],
  'Company': ['About Us', 'Blogs / FAQ', 'Case Studies', 'Contact'],
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
    ],
  },
  presence: {
    eyebrow: 'Our Global Presence',
    title: 'Global Reach.',
    highlight: 'Local Understanding.',
    intro: 'Canopus GBS combines global delivery capabilities with local market understanding to support customers across geographies.',
    stats: [
      { value: '5', label: 'Countries' },
      { value: '8', label: 'Offices' },
      { value: '100+', label: 'Global Clients' },
    ],
    lead: 'Our current presence includes:',
    // lon/lat place each pin on the dotted world map; label = which side the name sits
    countries: [
      { code: 'in', name: 'India', lon: 78, lat: 21, label: 'top' },
      { code: 'my', name: 'Malaysia', lon: 102, lat: 4, label: 'right' },
      { code: 'sg', name: 'Singapore', lon: 104, lat: 1, label: 'bottom' },
      { code: 'ae', name: 'UAE', lon: 54, lat: 24, label: 'left' },
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
