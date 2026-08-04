export interface ServiceItem {
  id: string;
  title: string;
  domain: 'growth' | 'marketing' | 'data' | 'automation';
  domainLabel: string;
  tagline: string;
  description: string;
  deliverables: string[];
  impactMetric: string;
  architectureDetails: {
    problemSolved: string;
    techStack: string[];
    processSteps: string[];
  };
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  roleTag: string;
  image: string;
  bio: string;
  expertise: string[];
  linkedin: string;
}

export interface AssessmentOption {
  id: string;
  bottleneck: string;
  description: string;
  recommendedServices: string[];
  roadmapSteps: string[];
  estimatedEfficiencyGain: string;
  timeToImpact: string;
}

const JACKSON_BEAUFORT_HEADSHOT = new URL('../public/JBHeadshot_23.JPG', import.meta.url).href;

export const COMPANY_INFO = {
  name: "Beaufort Strategy Group",
  headline: "Strategy that moves businesses forward.",
  tagline: "We don't just build strategies. We implement them.",
  valueProp: "We help growing businesses implement world-class marketing, analytics, automation, and data systems without the overhead of building an internal department.",
  email: "jb@BeaufortStrat.com",
  phone: "+1 (800) 482-9130",
  address: "100 Federal Street, Suite 2800, Boston, MA 02110",
  hours: "Monday - Friday: 8:00 AM - 6:00 PM EST",
};

export const CORE_SERVICES: ServiceItem[] = [
  // Domain 1: Growth & Executive Strategy
  {
    id: "growth-consulting",
    title: "Growth Consulting",
    domain: "growth",
    domainLabel: "Growth & Strategy",
    tagline: "Architecting sustainable revenue expansion models.",
    description: "Rigorous market positioning, unit economic analysis, and actionable growth blueprints designed for mid-market scale without operational bloat.",
    deliverables: [
      "Market expansion & TAM analysis",
      "Unit economics & pricing optimization",
      "Go-to-market execution roadmaps"
    ],
    impactMetric: "Avg. 34% acceleration in top-line growth",
    architectureDetails: {
      problemSolved: "Slowing revenue trajectory due to unstructured GTM motion and unoptimized sales channels.",
      techStack: ["GTM Benchmarking", "Financial Modeling", "Cohort Analysis", "Revenue Operations Frameworks"],
      processSteps: [
        "Audit existing revenue drivers & CAC/LTV benchmarks",
        "Identify unexploited market segments & pricing leverage",
        "Formulate 90-day execution sprints with accountable metrics"
      ]
    }
  },
  {
    id: "business-analytics",
    title: "Business Analytics",
    domain: "growth",
    domainLabel: "Growth & Strategy",
    tagline: "Turning raw operational signals into strategic clarity.",
    description: "Converting multi-source operational metrics into predictive business intelligence so executives lead with foresight rather than hindsight.",
    deliverables: [
      "Cross-department KPI modeling",
      "Customer lifetime value & churn forecasting",
      "Operational bottleneck diagnostics"
    ],
    impactMetric: "100% clarity on true gross margin drivers",
    architectureDetails: {
      problemSolved: "Siloed data across CRM, ERP, and billing systems hiding true operational profitability.",
      techStack: ["Python", "SQL", "dbt", "Statistical Modeling", "PowerBI / Tableau"],
      processSteps: [
        "Unify disparate enterprise data streams",
        "Build predictive revenue & retention models",
        "Establish automated alerting for margin anomalies"
      ]
    }
  },
  {
    id: "executive-dashboards",
    title: "Executive Dashboards",
    domain: "growth",
    domainLabel: "Growth & Strategy",
    tagline: "C-suite decision cockpits built for real-time agility.",
    description: "Bespoke, zero-noise dashboard architectures that consolidate executive reporting into intuitive, live single-pane views.",
    deliverables: [
      "Real-time revenue & margin cockpits",
      "Automated weekly executive digest summaries",
      "Mobile-optimized board reporting views"
    ],
    impactMetric: "15+ hours saved per executive monthly",
    architectureDetails: {
      problemSolved: "Manual compilation of weekly executive slide decks from fragmented spreadsheets.",
      techStack: ["Looker", "Tableau", "Sigma Computing", "BigQuery", "Custom Embedded Dashboards"],
      processSteps: [
        "Map core strategic metrics to executive decision loops",
        "Connect live data pipelines directly to visualization layer",
        "Deploy role-based access cockpits with automated digest alerts"
      ]
    }
  },

  // Domain 2: Marketing & Revenue Strategy
  {
    id: "marketing-strategy",
    title: "Marketing Strategy",
    domain: "marketing",
    domainLabel: "Marketing & Acquisition",
    tagline: "Precision customer acquisition grounded in financial metrics.",
    description: "Connecting marketing spend directly to customer lifetime value and bottom-line profit, eliminating wasted ad budget.",
    deliverables: [
      "Omnichannel acquisition strategies",
      "Multi-touch attribution models",
      "CAC reduction & channel mix optimization"
    ],
    impactMetric: "Up to 42% decrease in Blended CAC",
    architectureDetails: {
      problemSolved: "Unclear marketing ROI and over-reliance on single acquisition channels.",
      techStack: ["Attribution Modeling", "HubSpot", "Salesforce Marketing Cloud", "GA4 Analytics"],
      processSteps: [
        "Audit channel economics & conversion funnels",
        "Reallocate budget toward high-LTV acquisition sources",
        "Implement first-party data capture & retargeting frameworks"
      ]
    }
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    domain: "marketing",
    domainLabel: "Marketing & Acquisition",
    tagline: "Turnkey digital execution that delivers qualified pipeline.",
    description: "Complete hands-on deployment of performance campaigns, SEO architecture, conversion rate optimization, and lifecycle messaging.",
    deliverables: [
      "High-intent paid search & social campaigns",
      "Technical SEO & organic authority building",
      "Conversion rate optimization (CRO) testing"
    ],
    impactMetric: "3.2x increase in qualified inbound leads",
    architectureDetails: {
      problemSolved: "Low digital funnel conversion and ineffective ad positioning.",
      techStack: ["Google Ads", "Meta Ads", "A/B Testing Frameworks", "VWO", "Klaviyo / Customer.io"],
      processSteps: [
        "Engineered landing page copy & value proposition alignment",
        "Deploy granular audience segmenting & retargeting workflows",
        "Optimize weekly based on real sales closed-loop conversions"
      ]
    }
  },

  // Domain 3: Data Engineering & Infrastructure
  {
    id: "etl-pipeline-development",
    title: "Complete ETL / ELT Pipeline Development",
    domain: "data",
    domainLabel: "Data Engineering & Systems",
    tagline: "Seamless automated data pipelines from source to warehouse.",
    description: "End-to-end data pipeline construction that ingests, cleanses, transforms, and synchronizes all business data without human intervention.",
    deliverables: [
      "Custom API data extractors & connectors",
      "Automated dbt transformation models",
      "Real-time CDC (Change Data Capture) pipelines"
    ],
    impactMetric: "99.9% data pipeline reliability & uptime",
    architectureDetails: {
      problemSolved: "Manual CSV exports and broken Zapier scripts slowing down daily reporting.",
      techStack: ["Fivetran", "Airbyte", "dbt", "Python", "Apache Kafka", "PostgreSQL"],
      processSteps: [
        "Map all source API schemas (CRM, ERP, Financials, Stripe)",
        "Build resilient dbt DAG transformations with automated tests",
        "Establish real-time sync with alerting on failure"
      ]
    }
  },
  {
    id: "database-administration",
    title: "Database Administration",
    domain: "data",
    domainLabel: "Data Engineering & Systems",
    tagline: "Optimizing database health, speed, and failover resilience.",
    description: "Proactive tuning, index management, backup protocols, and security hardening for mission-critical enterprise databases.",
    deliverables: [
      "Query execution plan optimization",
      "Automated disaster recovery & failover systems",
      "Database migration & version upgrades"
    ],
    impactMetric: "80% reduction in database latency & resource cost",
    architectureDetails: {
      problemSolved: "Slow query runtimes, locking issues, and risk of unverified backups.",
      techStack: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "AWS RDS / GCP Cloud SQL"],
      processSteps: [
        "Perform deep query profiling & index reorganization",
        "Configure point-in-time recovery & automated backups",
        "Implement automated connection pooling & security hardening"
      ]
    }
  },
  {
    id: "data-cleanup",
    title: "Data Cleanup & Governance",
    domain: "data",
    domainLabel: "Data Engineering & Systems",
    tagline: "Purging duplicate, stale, and corrupted records.",
    description: "Systematic deduplication, normalization, and validation rules that turn chaotic databases into trusted single sources of truth.",
    deliverables: [
      "Automated record deduplication scripts",
      "Customer data record standardization",
      "Continuous data validation & quality monitoring"
    ],
    impactMetric: "Elimination of 98%+ bad or duplicate customer records",
    architectureDetails: {
      problemSolved: "Corrupted analytics and failed marketing campaigns due to duplicate contacts and invalid phone/email records.",
      techStack: ["Python Pandas", "Fuzzy Matching Algorithms", "Great Expectations", "SQL Cleaning Scripts"],
      processSteps: [
        "Audit existing databases for duplicate & null anomaly patterns",
        "Execute automated deterministic & fuzzy matching deduplication",
        "Embed validation gates to prevent future bad data entry"
      ]
    }
  },

  // Domain 4: AI & Automation
  {
    id: "ai-automation",
    title: "AI Automation",
    domain: "automation",
    domainLabel: "AI & Intelligent Automation",
    tagline: "Embedding intelligent LLMs and predictive agents into operations.",
    description: "Custom AI workflows that handle complex document processing, client communication, intelligent routing, and automated synthesis.",
    deliverables: [
      "Custom RAG & document synthesis agents",
      "Automated email & support ticket classification",
      "AI-assisted contract & invoice parsing"
    ],
    impactMetric: "85% reduction in manual document handling time",
    architectureDetails: {
      problemSolved: "Knowledge workers spending hours manually reading, classifying, and extracting data from unstructured PDFs and emails.",
      techStack: ["Gemini 1.5 Pro / Flash", "Python", "LangChain / LlamaIndex", "Vector DBs (Pinecone / Qdrant)", "FastAPI"],
      processSteps: [
        "Identify repetitive text and document extraction workflows",
        "Fine-tune prompt chains & vector search over company knowledge bases",
        "Deploy secure, human-in-the-loop validation dashboards"
      ]
    }
  },
  {
    id: "robotic-process-automation",
    title: "Robotic Process Automation (RPA)",
    domain: "automation",
    domainLabel: "AI & Intelligent Automation",
    tagline: "Eliminating mundane manual tasks with software bots.",
    description: "Reliable software robotics that execute multi-system data entry, cross-platform reconciliation, and legacy UI interactions autonomously.",
    deliverables: [
      "End-to-end automated invoice reconciliation",
      "Cross-system legacy portal data sync",
      "Scheduled unattended bot operations"
    ],
    impactMetric: "1,200+ human labor hours saved per quarter",
    architectureDetails: {
      problemSolved: "Employees copying data by hand between legacy software portals and modern systems.",
      techStack: ["UiPath", "Playwright", "Python Automation", "REST APIs", "Webhooks"],
      processSteps: [
        "Map mouse/keystroke and API workflows line by line",
        "Build resilient bot scripts with exception fallback handlers",
        "Set up automated execution schedules with detailed audit logs"
      ]
    }
  }
];

export const ASSESSMENT_OPTIONS: AssessmentOption[] = [
  {
    id: "disconnected-data",
    bottleneck: "Fragmented Data & Manual Reporting",
    description: "Leadership spends hours compiling weekly spreadsheets from disparate software systems.",
    recommendedServices: ["Complete ETL Pipeline Development", "Executive Dashboards", "Data Cleanup"],
    roadmapSteps: [
      "Ingest CRM, ERP, and Financial APIs into a centralized cloud warehouse.",
      "Cleanse and transform raw records into a unified reporting schema.",
      "Deploy a live Executive Dashboard with automated weekly Slack/Email digests."
    ],
    estimatedEfficiencyGain: "18+ Hours / Week Saved",
    timeToImpact: "3 to 4 Weeks"
  },
  {
    id: "marketing-roi",
    bottleneck: "Unpredictable Marketing CAC & Scalability",
    description: "Ad spending isn't tied to true customer lifetime value or closed-won revenue.",
    recommendedServices: ["Marketing Strategy", "Digital Marketing", "Business Analytics"],
    roadmapSteps: [
      "Implement first-party offline conversion tracking back to ad platforms.",
      "Reallocate budget to top 20% highest LTV customer segments.",
      "Deploy optimized digital acquisition funnels with weekly CRO iterations."
    ],
    estimatedEfficiencyGain: "35% Reduction in Blended CAC",
    timeToImpact: "2 to 3 Weeks"
  },
  {
    id: "manual-rpa",
    bottleneck: "Heavy Manual Back-Office & Data Entry",
    description: "Team members spend critical hours doing repetitive cross-system data entry.",
    recommendedServices: ["AI Automation", "Robotic Process Automation (RPA)", "Database Administration"],
    roadmapSteps: [
      "Audit manual data entry loops across back-office operations.",
      "Deploy intelligent AI document parsers and RPA bots for legacy systems.",
      "Automate reconciliation and setup error-handling notification protocols."
    ],
    estimatedEfficiencyGain: "80% Reduction in Processing Time",
    timeToImpact: "4 Weeks"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "jackson-beaufort",
    name: "Jackson Beaufort",
    title: "Founder & President",
    roleTag: "Growth Strategy, Analytics, & Automation",
    image: JACKSON_BEAUFORT_HEADSHOT,
    bio: "Growth strategist and automation specialist helping businesses scale using data and automated workflows. Excels at turning complex operational data into automated systems that improve efficiency and drive revenue.",
    expertise: ["Growth Strategy", "AI Automation", "Business Analytics", "Marketing Strategy"],
    linkedin: "https://www.linkedin.com/in/jackson-beaufort"
  },
  {
    id: "marcus-thorne",
    name: "Marcus Thorne",
    title: "Principal Data Architect & Partner",
    roleTag: "Data Systems & Cloud Infrastructure",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    bio: "15+ years engineering high-throughput data platforms, cloud warehouses, and real-time ETL pipelines. Leads technical execution for all client database and analytics infrastructure.",
    expertise: ["Data Warehousing", "Snowflake / BigQuery", "dbt Transformations", "ETL Pipelines"],
    linkedin: "https://www.linkedin.com/company/beaufort-strat"
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    number: "01",
    title: "Zero Operational Overhead",
    subtitle: "Executive horsepower without full-time headcount",
    description: "Building internal marketing, analytics, and data engineering departments requires months of hiring, high salaries, and managerial management. We provide full-stack executive capability on day one."
  },
  {
    number: "02",
    title: "Strategy + Execution Unified",
    subtitle: "We don't just write decks. We deploy the code.",
    description: "Most consulting agencies hand off a slide deck and leave you to figure out how to implement it. Beaufort Strategy Group designs the strategy and directly engineers the data pipelines, campaigns, and bots."
  },
  {
    number: "03",
    title: "Precision Metric Accountability",
    subtitle: "Grounded in financial reality",
    description: "Every engagement is tied directly to clear, measurable business outcomes: reduced acquisition costs, faster data query speeds, eliminated manual labor hours, and expanded profit margins."
  }
];
