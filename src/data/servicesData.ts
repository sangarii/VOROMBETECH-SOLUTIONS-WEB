import { ServiceItem } from '../types';

export const COMPANY_INFO = {
  name: 'Vorombetech Solutions',
  tagline: 'Your Trusted Technology Partner',
  hqAddress:
    'Intellect Building, 2nd Floor, 249 Udyog Vihar, Phase IV, Gurugram, Haryana 122022',
  usPhone: '+1 415 7040681',
  inPhone: '+91 7303933635',
  salesEmail: 'info@vorombetech.com',
  supportEmail: 'support@vorombetech.com',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: 'salesforce-consulting',
    indexNumber: 'SaaS & CRM Solutions',
    title: 'Salesforce Consulting',
    shortDescription:
      'End-to-end Salesforce Sales Cloud, Service Cloud, Data Cloud, and custom Apex/LWC engineering built for high-velocity enterprise revenue teams.',
    heroDescription:
      'We architect, implement, and unify multi-org Salesforce ecosystems that eliminate data silos, compress quote-to-cash cycles, and give revenue leaders real-time pipeline visibility.',
    iconName: 'Cloud',
    visualTheme: 'salesforce',
    problemStatement: {
      headline: 'Fragmented CRM instances and brittle custom triggers slow down revenue execution',
      description:
        'Enterprise sales and service teams often struggle with heavily customized legacy Salesforce orgs where poorly governed Apex code, duplicate account hierarchies, and manual quoting spreadsheets erode rep productivity.',
      painPoints: [
        'Disconnected Sales Cloud, Service Cloud, and ERP master data causing 18%+ quote discrepancies',
        'Slow page load times and governor limit exceptions from legacy workflow rules and unoptimized triggers',
        'Low sales rep adoption due to rigid screen layouts and manual CPQ approval chains',
        'Lack of real-time attribution between marketing touchpoints and closed-won enterprise contracts',
      ],
    },
    solutionStatement: {
      headline: 'Composable Salesforce architecture engineered for scale and clean governance',
      description:
        'Vorombetech Solutions re-engineers your Salesforce org around modular Lightning Web Components, Flow orchestration, MuleSoft API-led connectivity, and Revenue Cloud automation.',
      outcomes: [
        'Unified 360-degree customer record synchronized bi-directionally with SAP, NetSuite, and Snowflake',
        'Automated multi-tier CPQ discounting and contract lifecycle execution inside Slack and Salesforce',
        'Clean CI/CD DevOps pipelines using GitHub Actions and SFDX for zero-downtime releases',
        'Executive pipeline forecasting dashboards with 94%+ quarterly accuracy',
      ],
    },
    benefits: [
      {
        title: '42% Faster Quote-to-Cash',
        description:
          'Automated product bundling, dynamic pricing rules, and instant legal redline routing inside Salesforce Revenue Cloud.',
      },
      {
        title: 'Zero-Downtime Org Consolidations',
        description:
          'Merge regional Salesforce orgs after M&A activity with complete historical audit trails and metadata integrity.',
      },
      {
        title: 'Custom Lightning Web Components',
        description:
          'Bespoke, sub-second UI workspaces tailored to specialized underwriting, field service, and relationship management workflows.',
      },
      {
        title: 'MuleSoft & ERP Integration',
        description:
          'Resilient event-driven middleware connecting Salesforce with core banking, ERP, and billing platforms.',
      },
    ],
    technologies: [
      'Salesforce Sales Cloud',
      'Service Cloud',
      'Salesforce CPQ & Revenue Cloud',
      'Data Cloud',
      'Lightning Web Components (LWC)',
      'Apex & Flow Orchestrator',
      'MuleSoft Anypoint',
      'Copado & SFDX DevOps',
    ],
    processSteps: [
      {
        stepNumber: '01',
        phase: 'Discover',
        title: 'Org Health Audit & Revenue Process Mapping',
        description:
          'We analyze your metadata dependencies, Apex governor telemetry, license utilization, and sales stage bottlenecks.',
        deliverable: 'Org Architecture Assessment & Target State Blueprint',
      },
      {
        stepNumber: '02',
        phase: 'Design',
        title: 'Data Model & Integration Topology',
        description:
          'Architect canonical object schemas, role hierarchies, sharing rules, and MuleSoft API contracts.',
        deliverable: 'Entity-Relationship Schema & Security Specification',
      },
      {
        stepNumber: '03',
        phase: 'Develop',
        title: 'Iterative LWC, Flow & Apex Engineering',
        description:
          'Two-week engineering sprints building modular Lightning components, automated approval flows, and automated unit test suites (>90% coverage).',
        deliverable: 'Sandbox-Verified Release Packages',
      },
      {
        stepNumber: '04',
        phase: 'Deploy',
        title: 'Automated Data Migration & Cutover',
        description:
          'Phased production cutover with automated data validation, deduplication scripts, and role-based user training.',
        deliverable: 'Production Go-Live & Verified Data Reconciliation',
      },
      {
        stepNumber: '05',
        phase: 'Support',
        title: 'Managed Release Governance & Optimization',
        description:
          'Continuous seasonal Salesforce release readiness, telemetry monitoring, and iterative workflow enhancements.',
        deliverable: '24/7 SLA Managed Services & Quarterly Roadmap',
      },
    ],
    metrics: [
      { value: '+38%', label: 'Sales Rep Selling Time', timeframe: 'Within 90 days of launch' },
      { value: '42%', label: 'Reduction in Quote Turnaround', timeframe: 'Across global CPQ orgs' },
      { value: '99.98%', label: 'API Sync Reliability', timeframe: 'MuleSoft + ERP pipelines' },
    ],
  },
  {
    slug: 'ai-automation',
    indexNumber: 'AI & Intelligent Automation',
    title: 'AI & Automation',
    shortDescription:
      'Production-grade enterprise RAG pipelines, autonomous back-office workflows, and intelligent document processing with deterministic guardrails.',
    heroDescription:
      'We move enterprise AI out of experimental sandboxes and into auditable production systems—automating document underwriting, customer triage, and cross-system orchestration.',
    iconName: 'Cpu',
    visualTheme: 'ai',
    problemStatement: {
      headline: 'Manual document triage and disconnected bots create operational bottlenecks',
      description:
        'Operations teams waste thousands of hours re-keying unstructured PDFs, invoices, and compliance filings into core systems, while brittle RPA scripts break whenever a UI screen changes.',
      painPoints: [
        'High error rates and 48-hour backlogs in manual claims, KYC, and procurement document verification',
        'Hallucination risks and lack of source citations in generic off-the-shelf LLM wrappers',
        'Siloed RPA scripts that lack semantic understanding of complex customer exceptions',
        'Strict data residency and PII redaction requirements blocking enterprise AI adoption',
      ],
    },
    solutionStatement: {
      headline: 'Auditable AI pipelines combined with deterministic workflow orchestration',
      description:
        'We engineer domain-grounded Retrieval-Augmented Generation (RAG) architectures, multi-step agentic workflows, and human-in-the-loop confidence routing inside your private VPC.',
      outcomes: [
        '99.2% field extraction accuracy across complex multi-page commercial contracts and medical claims',
        'Zero data leakage with private VPC model hosting, automated PII masking, and role-based vector search',
        'Seamless API orchestration across ServiceNow, Salesforce, SAP, and Jira',
        'Real-time observability tracking latency, token cost, and citation accuracy per transaction',
      ],
    },
    benefits: [
      {
        title: 'Intelligent Document Processing (IDP)',
        description:
          'Extract, validate, and reconcile tables, clauses, and handwriting from unstructured documents in under 4 seconds.',
      },
      {
        title: 'Enterprise RAG Knowledge Engines',
        description:
          'Ground responses strictly in your internal SOPs, engineering runbooks, and policy manuals with inline paragraph citations.',
      },
      {
        title: 'Self-Healing Workflow Automation',
        description:
          'Combine API-first orchestration with semantic exception handling to eliminate brittle screen-scraping RPA failures.',
      },
      {
        title: 'Governance & Guardrail Telemetry',
        description:
          'Enforce deterministic compliance policies, confidence thresholds, and full audit logs for regulated industries.',
      },
    ],
    technologies: [
      'Vertex AI & Enterprise LLMs',
      'LangGraph & Agentic Workflows',
      'Vector Databases (pgvector / Pinecone)',
      'Python & FastAPI Microservices',
      'UiPath & Temporal Orchestration',
      'Salesforce Agentforce',
      'OpenTelemetry & Arize Phoenix',
      'Private VPC Model Deployment',
    ],
    processSteps: [
      {
        stepNumber: '01',
        phase: 'Discover',
        title: 'Workflow Bottleneck & ROI Quantification',
        description:
          'Audit high-volume manual processes, measure baseline cost-per-transaction, and assess data readiness.',
        deliverable: 'Prioritized AI Use-Case Matrix & ROI Business Case',
      },
      {
        stepNumber: '02',
        phase: 'Design',
        title: 'Guardrail, Privacy & Retrieval Architecture',
        description:
          'Design chunking strategies, hybrid search pipelines, PII redaction filters, and human-in-the-loop escalation thresholds.',
        deliverable: 'Security-Cleared AI System Architecture',
      },
      {
        stepNumber: '03',
        phase: 'Develop',
        title: 'Golden Dataset Evaluation & Pipeline Build',
        description:
          'Build automated evaluation harnesses with 500+ domain test cases to benchmark precision, recall, and latency.',
        deliverable: 'Validated Production Pipeline & Eval Scorecard',
      },
      {
        stepNumber: '04',
        phase: 'Deploy',
        title: 'Shadow-Mode Testing & Phased Rollout',
        description:
          'Run AI pipelines in parallel shadow mode against live traffic before enabling autonomous execution.',
        deliverable: 'Production Cutover with Live Telemetry Dashboard',
      },
      {
        stepNumber: '05',
        phase: 'Support',
        title: 'Continuous Drift Monitoring & Fine-Tuning',
        description:
          'Monitor embedding drift, curate edge-case feedback loops, and optimize inference unit economics.',
        deliverable: 'Monthly Accuracy & FinOps Optimization Reports',
      },
    ],
    metrics: [
      { value: '74%', label: 'Straight-Through Processing', timeframe: 'Zero human touch required' },
      { value: '3.2s', label: 'Median Document Triage Time', timeframe: 'Down from 42 minutes' },
      { value: '$1.4M', label: 'Annualized OpEx Savings', timeframe: 'Average per enterprise client' },
    ],
  },
  {
    slug: 'cybersecurity',
    indexNumber: 'Information Security & ISO',
    title: 'Cybersecurity',
    shortDescription:
      'Zero-trust network architecture, cloud security posture management (CSPM), continuous SOC modernization, and SOC 2 / ISO 27001 / HIPAA compliance.',
    heroDescription:
      'We harden enterprise cloud environments, identity perimeters, and software supply chains against sophisticated threat actors while accelerating regulatory compliance.',
    iconName: 'ShieldCheck',
    visualTheme: 'security',
    problemStatement: {
      headline: 'Expanding cloud attack surfaces and alert fatigue leave critical assets exposed',
      description:
        'Rapid cloud adoption, third-party SaaS sprawl, and distributed workforces have dissolved traditional network perimeters, leaving security teams overwhelmed by noisy SIEM alerts and shadow IAM permissions.',
      painPoints: [
        'Over-privileged cloud IAM roles and unrotated service account keys across AWS, Azure, and GCP',
        'Thousands of unprioritized vulnerability alerts delaying critical patch remediation beyond 30 days',
        'Complex enterprise customer security questionnaires and SOC 2 / ISO 27001 / RBI audit delays blocking revenue',
        'Lack of automated lateral-movement containment across hybrid Kubernetes and legacy subnets',
      ],
    },
    solutionStatement: {
      headline: 'Identity-first Zero Trust and automated cloud security remediation',
      description:
        'Vorombetech Solutions implements continuous Cloud Security Posture Management (CSPM), Just-In-Time (JIT) privileged access, and SOAR-automated incident containment.',
      outcomes: [
        '100% enforcement of least-privilege IAM and hardware-backed MFA across all production environments',
        'Automated DevSecOps pipelines scanning IaC (Terraform), containers, and SBOM dependencies pre-commit',
        'Mean Time to Detect (MTTD) reduced under 4 minutes via behavioral MDR and automated SOAR playbooks',
        'Continuous compliance evidence collection for SOC 2 Type II, ISO 27001, HIPAA, and GDPR',
      ],
    },
    benefits: [
      {
        title: 'Zero-Trust Identity & Access (IAM)',
        description:
          'Eliminate standing privileges with Okta/Entra ID governance, ephemeral credentials, and micro-segmented ZTNA.',
      },
      {
        title: 'DevSecOps & Supply Chain Hardening',
        description:
          'Embed SAST, DAST, container signing, and Terraform policy-as-code directly into developer pull requests.',
      },
      {
        title: 'Cloud Security Posture (CSPM / CNAPP)',
        description:
          'Continuous real-time detection and auto-remediation of misconfigured storage buckets, security groups, and KMS keys.',
      },
      {
        title: 'Audit-Ready Compliance Automation',
        description:
          'Pass enterprise security audits and regulatory examinations on the first attempt with automated control telemetry.',
      },
    ],
    technologies: [
      'CrowdStrike Falcon & SentinelOne',
      'Wiz & Prisma Cloud (CNAPP)',
      'Okta & Microsoft Entra ID',
      'Palo Alto Zero Trust & Zscaler',
      'Splunk & Microsoft Sentinel SIEM',
      'HashiCorp Vault & KMS',
      'Terraform Sentinel / OPA',
      'Vanta / Drata Compliance Automation',
    ],
    processSteps: [
      {
        stepNumber: '01',
        phase: 'Discover',
        title: 'Attack Surface & Threat Modeling Assessment',
        description:
          'Conduct red-team penetration testing, cloud IAM privilege graphing, and crown-jewel asset mapping.',
        deliverable: 'Prioritized Risk Register & Attack Path Graph',
      },
      {
        stepNumber: '02',
        phase: 'Design',
        title: 'Zero-Trust Reference Architecture',
        description:
          'Architect identity boundaries, network micro-segmentation, encryption key hierarchies, and SIEM ingestion rules.',
        deliverable: 'Zero-Trust Blueprint & Control Matrix',
      },
      {
        stepNumber: '03',
        phase: 'Develop',
        title: 'Policy-as-Code & SOAR Playbook Engineering',
        description:
          'Codify automated security guardrails in Terraform/OPA and build automated incident isolation playbooks.',
        deliverable: 'Hardened IaC Modules & Automated Runbooks',
      },
      {
        stepNumber: '04',
        phase: 'Deploy',
        title: 'Non-Disruptive Enforcement Cutover',
        description:
          'Roll out ZTNA policies, conditional access rules, and EDR sensors in staged rings with zero business disruption.',
        deliverable: 'Enforced Production Perimeter & Compliance Attestation',
      },
      {
        stepNumber: '05',
        phase: 'Support',
        title: 'Continuous Threat Hunting & Purple Teaming',
        description:
          'Ongoing 24/7 telemetry correlation, quarterly adversarial simulations, and compliance control maintenance.',
        deliverable: 'Continuous Executive Risk & Compliance Posture Scorecards',
      },
    ],
    metrics: [
      { value: '86%', label: 'Reduction in Critical Misconfigurations', timeframe: 'Within first 45 days' },
      { value: '<4 min', label: 'Mean Time to Detect (MTTD)', timeframe: 'Automated SOAR triage' },
      { value: '100%', label: 'First-Pass Audit Success', timeframe: 'SOC 2 Type II & ISO 27001' },
    ],
  },
  {
    slug: 'cloud-computing',
    indexNumber: 'Cloud & Infrastructure',
    title: 'Cloud Computing',
    shortDescription:
      'AWS, Azure, and Google Cloud landing zones, Kubernetes platform engineering, zero-downtime database migrations, and FinOps cost optimization.',
    heroDescription:
      'We engineer resilient, multi-region cloud foundations and developer platforms that scale elastically under peak demand while cutting wasted cloud spend by up to 35%.',
    iconName: 'Server',
    visualTheme: 'cloud',
    problemStatement: {
      headline: 'fragile cloud sprawl and runaway infrastructure bills erode gross margins',
      description:
        'Many organizations lifted-and-shifted legacy VMs to the cloud without modernizing their architecture—resulting in manual provisioning bottlenecks, single-region outage risks, and unpredictable monthly cloud invoices.',
      painPoints: [
        'Over-provisioned compute instances, unattached storage volumes, and expensive cross-AZ data transfer fees',
        'Manual ClickOps infrastructure changes causing configuration drift between staging and production',
        'Weeks-long lead times to provision compliant environments for new product engineering squads',
        'Fragile monolithic databases struggling with seasonal traffic spikes and regional failover requirements',
      ],
    },
    solutionStatement: {
      headline: 'Immutable Infrastructure-as-Code and high-availability Kubernetes platforms',
      description:
        'We build standardized cloud landing zones using Terraform, GitOps-driven Kubernetes (EKS/AKS/GKE), and automated FinOps right-sizing policies.',
      outcomes: [
        '99.99% multi-AZ/multi-region uptime with automated disaster recovery and sub-minute RTO/RPO',
        '28%–38% immediate reduction in monthly cloud spend via spot orchestration, Graviton migration, and commitment management',
        'Self-service Internal Developer Platform (IDP) enabling 15-minute environment provisioning',
        '100% immutable infrastructure managed through version-controlled Terraform and ArgoCD',
      ],
    },
    benefits: [
      {
        title: 'Multi-Cloud Landing Zones',
        description:
          'Enterprise-grade AWS, Azure, and GCP landing zones with centralized networking, logging, and billing guardrails.',
      },
      {
        title: 'Kubernetes & Platform Engineering',
        description:
          'Production-hardened EKS, AKS, and GKE clusters with Karpenter autoscaling, Istio service mesh, and ArgoCD GitOps.',
      },
      {
        title: 'Database Modernization',
        description:
          'Zero-downtime migration from legacy Oracle/SQL Server licenses to Cloud Spanner, Amazon Aurora, and Snowflake.',
      },
      {
        title: 'Cloud FinOps & Unit Economics',
        description:
          'Granular cost allocation by tenant/feature, automated idle resource reclamation, and architectural right-sizing.',
      },
    ],
    technologies: [
      'Amazon Web Services (AWS)',
      'Microsoft Azure',
      'Google Cloud Platform (GCP)',
      'Kubernetes (EKS / AKS / GKE)',
      'Terraform & OpenTofu',
      'ArgoCD & GitHub Actions',
      'Prometheus, Grafana & Datadog',
      'Snowflake & Amazon Aurora',
    ],
    processSteps: [
      {
        stepNumber: '01',
        phase: 'Discover',
        title: 'Cloud Workload & FinOps Telemetry Audit',
        description:
          'Map application dependencies, analyze 12-month billing telemetry, and identify single points of failure.',
        deliverable: 'Cloud TCO Analysis & Migration Wave Plan',
      },
      {
        stepNumber: '02',
        phase: 'Design',
        title: 'Landing Zone & Resilience Architecture',
        description:
          'Design VPC transit topologies, disaster recovery tiers, IaC module hierarchies, and observability standards.',
        deliverable: 'Well-Architected Cloud Blueprint',
      },
      {
        stepNumber: '03',
        phase: 'Develop',
        title: 'Terraform Codification & Containerization',
        description:
          'Build reusable Terraform modules, containerize core workloads, and configure GitOps deployment pipelines.',
        deliverable: 'Automated IaC Repository & CI/CD Pipelines',
      },
      {
        stepNumber: '04',
        phase: 'Deploy',
        title: 'Blue/Green Workload Cutover',
        description:
          'Execute live database replication and weighted DNS traffic shifting with automated rollback triggers.',
        deliverable: 'Zero-Downtime Production Migration',
      },
      {
        stepNumber: '05',
        phase: 'Support',
        title: 'SRE Reliability & Continuous FinOps',
        description:
          '24/7 Site Reliability Engineering, chaos testing, and monthly cloud unit-cost optimization reviews.',
        deliverable: '99.99% Uptime SLA & Monthly FinOps Savings Ledger',
      },
    ],
    metrics: [
      { value: '34%', label: 'Average Cloud Cost Reduction', timeframe: 'Realized within 60 days' },
      { value: '99.99%', label: 'Production Availability SLA', timeframe: 'Multi-AZ active-active' },
      { value: '10x', label: 'Deployment Frequency', timeframe: 'Via GitOps automation' },
    ],
  },
  {
    slug: 'digital-transformation',
    indexNumber: 'Digitalization & Portals',
    title: 'Digital Transformation',
    shortDescription:
      'Legacy application strangler-fig modernization, enterprise API platforms, composable digital experiences, and real-time data lakehouses.',
    heroDescription:
      'We decouple decades-old monolithic core systems into agile, API-first digital platforms—enabling enterprises to launch new digital products in weeks instead of quarters.',
    iconName: 'Layers',
    visualTheme: 'transformation',
    problemStatement: {
      headline: 'Monolithic core systems and batch-file bottlenecks stall product velocity',
      description:
        'Established enterprises often spend 75%+ of their IT budget simply maintaining brittle legacy mainframes, tightly coupled ERPs, and overnight batch scripts—leaving minimal capacity for customer-facing innovation.',
      painPoints: [
        'Six-month release cycles caused by tightly coupled monolithic codebases and manual regression testing',
        'Overnight CSV batch transfers preventing real-time inventory, pricing, and order visibility',
        'Disjointed customer journeys across web, mobile, partner portals, and call-center systems',
        'High technical debt and scarce talent for aging proprietary middleware platforms',
      ],
    },
    solutionStatement: {
      headline: 'Incremental Strangler-Fig modernization with immediate business ROI',
      description:
        'Rather than risky multi-year "rip-and-replace" programs, Vorombetech Solutions uses domain-driven microservices, event streaming (Kafka), and modern React/Next.js frontends to modernize core capabilities incrementally.',
      outcomes: [
        'Real-time event-driven architecture replacing brittle overnight batch jobs across all channels',
        'Unified API gateway exposing core business capabilities securely to mobile apps and B2B partners',
        'Composable customer portals achieving sub-second Core Web Vitals and 30%+ higher conversion',
        'Unified enterprise data lakehouse enabling self-service business intelligence across departments',
      ],
    },
    benefits: [
      {
        title: 'Strangler-Fig Legacy Modernization',
        description:
          'Extract high-value bounded contexts from legacy monoliths into cloud-native microservices without halting daily operations.',
      },
      {
        title: 'Event-Driven Enterprise Integration',
        description:
          'Stream real-time domain events across ERP, CRM, warehouse, and payment systems using Apache Kafka and GraphQL.',
      },
      {
        title: 'Omnichannel Customer Portals',
        description:
          'High-performance web and mobile applications built with TypeScript, Next.js, and accessible design systems.',
      },
      {
        title: 'Enterprise Data Lakehouse',
        description:
          'Consolidate fragmented operational databases into governed dbt + Snowflake/Databricks analytics platforms.',
      },
    ],
    technologies: [
      'Next.js & TypeScript',
      'Node.js, Go & Java Spring Boot',
      'Apache Kafka & Confluent',
      'GraphQL & Kong API Gateway',
      'Snowflake, Databricks & dbt',
      'PostgreSQL & Redis Enterprise',
      'Docker & Kubernetes',
      'Playwright Automated Testing',
    ],
    processSteps: [
      {
        stepNumber: '01',
        phase: 'Discover',
        title: 'Domain Event-Storming & Legacy Portfolio Triage',
        description:
          'Collaborate with domain experts to map bounded contexts, technical debt hotspots, and business value streams.',
        deliverable: 'Domain-Driven Modernization Roadmap',
      },
      {
        stepNumber: '02',
        phase: 'Design',
        title: 'API Contracts & Composable Target Architecture',
        description:
          'Define OpenAPI/GraphQL schemas, event topics, anti-corruption layers, and design system tokens.',
        deliverable: 'Target Architecture & API Governance Spec',
      },
      {
        stepNumber: '03',
        phase: 'Develop',
        title: 'Full-Stack Microservices & Portal Engineering',
        description:
          'Build decoupled backend services, anti-corruption adapters for legacy systems, and responsive frontend applications.',
        deliverable: 'Production-Ready Vertical Slices',
      },
      {
        stepNumber: '04',
        phase: 'Deploy',
        title: 'Canary Routing & Legacy Decommissioning',
        description:
          'Gradually shift production traffic from legacy modules to modern services via API gateway routing.',
        deliverable: 'Live Modernized Platform & Retired Legacy Modules',
      },
      {
        stepNumber: '05',
        phase: 'Support',
        title: 'Product Engineering Enablement & Co-Delivery',
        description:
          'Upskill internal engineering teams on modern CI/CD, observability, and domain-driven engineering practices.',
        deliverable: 'Self-Sustaining Engineering Playbooks & SLA Support',
      },
    ],
    metrics: [
      { value: '4.5x', label: 'Faster Feature Time-to-Market', timeframe: 'Bi-weekly to daily releases' },
      { value: '-62%', label: 'Legacy Maintenance Overhead', timeframe: 'After core decoupling' },
      { value: '<180ms', label: 'P95 API Gateway Latency', timeframe: 'Global edge routing' },
    ],
  },
  {
    slug: 'crm-optimization',
    indexNumber: 'RevOps & CRM Integration',
    title: 'CRM Optimization',
    shortDescription:
      'Revenue Operations (RevOps) engineering, CRM data hygiene & deduplication, automated lead-to-account matching, and predictive churn analytics.',
    heroDescription:
      'We transform underperforming CRM investments into high-converting revenue engines through automated data enrichment, precision lead routing, and full-funnel RevOps telemetry.',
    iconName: 'BarChart3',
    visualTheme: 'crm',
    problemStatement: {
      headline: 'Dirty CRM data and leaky lead handoffs silently drain marketing and sales ROI',
      description:
        'Even the most expensive CRM license fails when 30% of contact records are outdated, inbound high-intent leads wait hours for territory assignment, and marketing attribution disagrees with finance numbers.',
      painPoints: [
        'Duplicate account and contact records splitting customer history across multiple sales reps',
        'Slow inbound speed-to-lead (>4 hours) causing 50%+ drop-off in qualified demo conversions',
        'Over-engineered validation rules and cluttered page layouts that frustrate frontline sellers',
        'Inability to track true multi-touch cohort retention, net dollar retention (NDR), and renewal risk',
      ],
    },
    solutionStatement: {
      headline: 'Automated RevOps data pipelines and frictionless seller workspaces',
      description:
        'Vorombetech Solutions audits, cleanses, and re-architects your CRM workflows—integrating real-time enrichment, sub-minute lead routing, and automated renewal health scoring.',
      outcomes: [
        '99%+ master record accuracy via automated Clearbit/ZoomInfo enrichment and fuzzy deduplication rules',
        'Under 45-second speed-to-lead with automated lead-to-account matching and round-robin territory routing',
        'Streamlined role-specific CRM workspaces that cut manual data entry by 55%',
        'Unified RevOps telemetry tracking MQL-to-ARR velocity, pipeline coverage, and customer health scores',
      ],
    },
    benefits: [
      {
        title: 'Automated Data Hygiene & Enrichment',
        description:
          'Continuous deduplication, firmographic enrichment, and hierarchy normalization across millions of CRM records.',
      },
      {
        title: 'Sub-Minute Lead-to-Account Routing',
        description:
          'Instantaneously match inbound leads to named enterprise accounts and trigger SLA alerts in Slack or Teams.',
      },
      {
        title: 'Seller UX & Adoption Re-Engineering',
        description:
          'Remove screen clutter, automate call/email logging, and surface guided next-best-actions directly in the rep workflow.',
      },
      {
        title: 'Predictive Churn & Expansion Scoring',
        description:
          'Pipe product usage telemetry and support ticket sentiment directly into customer success renewal playbooks.',
      },
    ],
    technologies: [
      'Salesforce & HubSpot Enterprise',
      'Microsoft Dynamics 365',
      'LeanData & Chilipiper',
      'Clay, ZoomInfo & Apollo Enrichment',
      'Hightouch & Census Reverse ETL',
      'Gainsight & ChurnZero',
      'Gong & Outreach Integration',
      'Tableau & Power BI RevOps Analytics',
    ],
    processSteps: [
      {
        stepNumber: '01',
        phase: 'Discover',
        title: 'Funnel Leakage & Data Quality Forensics',
        description:
          'Audit duplicate rates, field population completeness, lead response timestamps, and stage conversion drop-offs.',
        deliverable: 'RevOps Diagnostic & Funnel Leakage Report',
      },
      {
        stepNumber: '02',
        phase: 'Design',
        title: 'Lifecycle Taxonomy & Routing Logic',
        description:
          'Standardize lead/account lifecycle stages, SLA timers, attribution models, and territory assignment rules.',
        deliverable: 'RevOps Data Dictionary & Routing Architecture',
      },
      {
        stepNumber: '03',
        phase: 'Develop',
        title: 'Data Cleansing, Reverse ETL & Workflow Build',
        description:
          'Execute safe bulk deduplication, configure Reverse ETL from your data warehouse, and build automated SLA triggers.',
        deliverable: 'Cleansed CRM Database & Automated Workflows',
      },
      {
        stepNumber: '04',
        phase: 'Deploy',
        title: 'Rep Enablement & Live Funnel Cutover',
        description:
          'Roll out simplified seller views, interactive forecasting boards, and role-specific playbooks.',
        deliverable: 'Live RevOps Command Center & Rep Playbooks',
      },
      {
        stepNumber: '05',
        phase: 'Support',
        title: 'Ongoing RevOps Administration & Experimentation',
        description:
          'Continuous territory rebalancing, A/B routing optimization, and quarterly board-ready revenue analytics.',
        deliverable: 'Dedicated RevOps Engineering Retainer',
      },
    ],
    metrics: [
      { value: '<45s', label: 'Inbound Speed-to-Lead', timeframe: 'Down from 6.5 hours' },
      { value: '+29%', label: 'MQL-to-SQL Conversion Rate', timeframe: 'First 60 days post-launch' },
      { value: '99.4%', label: 'Account Data Hygiene Score', timeframe: 'Continuous auto-deduplication' },
    ],
  },
];
