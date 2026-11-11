import { ServiceItem, VisualTheme } from '../types';
import { SERVICES_DATA } from './servicesData';

export interface MegaMenuSubService {
  label: string;
  slug: string;
  category: string;
  theme: VisualTheme;
  iconName: ServiceItem['iconName'];
  shortSummary: string;
  metricValue: string;
  metricLabel: string;
  technologies: string[];
}

export interface MegaMenuCategory {
  title: string;
  theme: VisualTheme;
  items: MegaMenuSubService[];
}

export const MEGA_MENU_CATEGORIES: MegaMenuCategory[] = [
  {
    title: 'CLOUD SERVICES',
    theme: 'cloud',
    items: [
      {
        label: 'AWS',
        slug: 'aws',
        category: 'Cloud Services',
        theme: 'cloud',
        iconName: 'Server',
        shortSummary:
          'Enterprise Amazon Web Services landing zones, EKS Kubernetes clusters, serverless workloads, and Well-Architected reviews.',
        metricValue: '99.99%',
        metricLabel: 'Multi-AZ Production Availability',
        technologies: ['Amazon EKS', 'AWS Lambda', 'RDS Aurora', 'AWS Control Tower', 'Terraform', 'CloudFront'],
      },
      {
        label: 'CLOUD CONSULTANCY',
        slug: 'cloud-consultancy',
        category: 'Cloud Services',
        theme: 'cloud',
        iconName: 'Cloud',
        shortSummary:
          'Vendor-neutral cloud readiness assessments, TCO modeling, hybrid-cloud strategy, and target-state enterprise blueprints.',
        metricValue: '3.4x',
        metricLabel: 'Faster Cloud Adoption ROI',
        technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'FinOps Framework', 'Kubernetes', 'OpenTelemetry'],
      },
      {
        label: 'CLOUD COST OPTIMIZATION',
        slug: 'cloud-cost-optimization',
        category: 'Cloud Services',
        theme: 'cloud',
        iconName: 'BarChart3',
        shortSummary:
          'Automated FinOps right-sizing, Savings Plans governance, Graviton compute migration, and idle resource reclamation.',
        metricValue: '-34%',
        metricLabel: 'Average Monthly Cloud Spend Reduction',
        technologies: ['Karpenter', 'AWS Cost Explorer', 'Azure Cost Management', 'Kubecost', 'Graviton4', 'Spot Orchestration'],
      },
      {
        label: 'CLOUD MIGRATION',
        slug: 'cloud-migration',
        category: 'Cloud Services',
        theme: 'cloud',
        iconName: 'Workflow',
        shortSummary:
          'Zero-downtime 6R workload migration from on-premise data centers and legacy VMs to resilient multi-region cloud infrastructure.',
        metricValue: 'Zero',
        metricLabel: 'Unplanned Cutover Downtime',
        technologies: ['AWS MGN', 'Azure Migrate', 'Kafka CDC', 'Database DMS', 'Terraform IaC', 'ArgoCD'],
      },
      {
        label: 'CLOUD MONITORING',
        slug: 'cloud-monitoring',
        category: 'Cloud Services',
        theme: 'cloud',
        iconName: 'Server',
        shortSummary:
          'Full-stack OpenTelemetry observability, distributed tracing, real-time SLO alerting, and 24/7 SRE incident triage.',
        metricValue: '< 3 min',
        metricLabel: 'Mean Time to Detect Anomalies',
        technologies: ['Datadog', 'Prometheus & Grafana', 'OpenTelemetry', 'AWS CloudWatch', 'Azure Monitor', 'PagerDuty'],
      },
      {
        label: 'CLOUD SECURITY',
        slug: 'cloud-security',
        category: 'Cloud Services',
        theme: 'security',
        iconName: 'ShieldCheck',
        shortSummary:
          'Cloud-native posture management (CSPM/CNAPP), zero-trust VPC micro-segmentation, and automated IAM least-privilege enforcement.',
        metricValue: '100%',
        metricLabel: 'CIS Benchmark Compliance Coverage',
        technologies: ['Wiz CNAPP', 'AWS GuardDuty', 'Azure Sentinel', 'HashiCorp Vault', 'OPA Gatekeeper', 'eBPF'],
      },
      {
        label: 'MICROSOFT AZURE',
        slug: 'microsoft-azure',
        category: 'Cloud Services',
        theme: 'cloud',
        iconName: 'Cloud',
        shortSummary:
          'Enterprise Azure Landing Zones, AKS container orchestration, Azure OpenAI private endpoints, and Entra ID governance.',
        metricValue: '38% Faster',
        metricLabel: 'Enterprise Workload Provisioning',
        technologies: ['Azure AKS', 'Entra ID', 'Azure Bicep & Terraform', 'Cosmos DB', 'Azure DevOps', 'Azure Front Door'],
      },
    ],
  },
  {
    title: 'INFORMATION SECURITY',
    theme: 'security',
    items: [
      {
        label: 'ISO 20000_ITSM',
        slug: 'iso-20000-itsm',
        category: 'Information Security',
        theme: 'security',
        iconName: 'ShieldCheck',
        shortSummary:
          'End-to-end ISO/IEC 20000 IT Service Management certification readiness, SLA governance, and change control automation.',
        metricValue: '100%',
        metricLabel: 'First-Pass ISO 20000 Audit Success',
        technologies: ['ISO/IEC 20000-1', 'ITIL v4 Controls', 'ServiceNow ITSM', 'Jira Service Management', 'Automated Change Logs'],
      },
      {
        label: 'ISO 22301_BCMS',
        slug: 'iso-22301-bcms',
        category: 'Information Security',
        theme: 'security',
        iconName: 'ShieldCheck',
        shortSummary:
          'Business Continuity Management Systems (BCMS) engineering, business impact analysis (BIA), and automated disaster drills.',
        metricValue: '< 15 min',
        metricLabel: 'Verified Recovery Time Objective (RTO)',
        technologies: ['ISO 22301 Framework', 'BIA Modeling', 'Multi-Region Failover', 'Chaos Mesh', 'Automated Runbooks'],
      },
      {
        label: 'ISO 27001_ISMS',
        slug: 'iso-27001-isms',
        category: 'Information Security',
        theme: 'security',
        iconName: 'ShieldCheck',
        shortSummary:
          'ISO/IEC 27001:2022 Information Security Management System architecture, Annex A control implementation, and continuous evidence collection.',
        metricValue: '6 Weeks',
        metricLabel: 'Accelerated Audit Readiness Timeline',
        technologies: ['ISO 27001:2022', 'Annex A Controls', 'Drata / Vanta', 'SIEM Audit Trails', 'Zero-Trust IAM'],
      },
      {
        label: 'ISO 27701_PIMS',
        slug: 'iso-27701-pims',
        category: 'Information Security',
        theme: 'security',
        iconName: 'ShieldCheck',
        shortSummary:
          'Privacy Information Management System (PIMS) implementation aligned with GDPR, DPDP, HIPAA, and global data privacy mandates.',
        metricValue: 'Zero',
        metricLabel: 'PII / PHI Regulatory Findings',
        technologies: ['ISO/IEC 27701', 'GDPR & DPDP Act', 'Data Masking & Tokenization', 'Consent Management', 'DLP Policies'],
      },
      {
        label: 'IT GENERAL CONTROL (ITGC)',
        slug: 'it-general-control-itgc',
        category: 'Information Security',
        theme: 'security',
        iconName: 'ShieldCheck',
        shortSummary:
          'SOX and enterprise IT General Controls covering access provisioning, segregation of duties (SoD), change management, and batch operations.',
        metricValue: '99.8%',
        metricLabel: 'Automated Control Evidence Accuracy',
        technologies: ['SOX ITGC', 'Okta IGA', 'Segregation of Duties (SoD)', 'GitOps Audit Logs', 'Automated Access Reviews'],
      },
      {
        label: 'SECURITY ASSESSMENT',
        slug: 'security-assessment',
        category: 'Information Security',
        theme: 'security',
        iconName: 'ShieldCheck',
        shortSummary:
          'Comprehensive VAPT (Vulnerability Assessment & Penetration Testing), red-team adversary simulations, and application security audits.',
        metricValue: '48 Hours',
        metricLabel: 'Critical Vulnerability Remediation SLA',
        technologies: ['OWASP Top 10', 'Burp Suite Enterprise', 'Cloud Pentesting', 'SAST / DAST Pipelines', 'Zero-Day Triage'],
      },
    ],
  },
  {
    title: 'DIGITALIZATION SERVICES',
    theme: 'transformation',
    items: [
      {
        label: 'CONTEST MANAGEMENT PORTAL',
        slug: 'contest-management-portal',
        category: 'Digitalization Services',
        theme: 'transformation',
        iconName: 'Workflow',
        shortSummary:
          'High-concurrency digital contest, hackathon, and awards management portals with multi-stage jury scoring and live leaderboards.',
        metricValue: '100K+',
        metricLabel: 'Concurrent Participant Submissions',
        technologies: ['React & Next.js', 'Node.js Microservices', 'Redis Leaderboards', 'S3 Media Pipeline', 'Role-Based Jury Portal'],
      },
      {
        label: 'E-COMMERCE PORTAL',
        slug: 'e-commerce-portal',
        category: 'Digitalization Services',
        theme: 'ecommerce',
        iconName: 'Workflow',
        shortSummary:
          'Headless B2B and B2C e-commerce storefronts with sub-second edge rendering, real-time inventory sync, and multi-gateway checkout.',
        metricValue: '+34%',
        metricLabel: 'Mobile Checkout Conversion Lift',
        technologies: ['Composable Commerce', 'Next.js Storefront', 'Stripe & Razorpay', 'Redis ATP Inventory', 'ERP Order Sync'],
      },
      {
        label: 'ELEARNING PORTAL',
        slug: 'elearning-portal',
        category: 'Digitalization Services',
        theme: 'transformation',
        iconName: 'Cpu',
        shortSummary:
          'Interactive Learning Management Systems (LMS) featuring adaptive video streaming, SCORM/xAPI compliance, and AI-graded assessments.',
        metricValue: '99.95%',
        metricLabel: 'Global Video Delivery Uptime',
        technologies: ['SCORM & xAPI', 'HLS Adaptive Video', 'Live Virtual Classrooms', 'Certification Engine', 'Analytics Dashboard'],
      },
      {
        label: 'ENTERPRISE WEB APPLICATION DEVELOPMENT',
        slug: 'enterprise-web-application-development',
        category: 'Digitalization Services',
        theme: 'transformation',
        iconName: 'Workflow',
        shortSummary:
          'Mission-critical custom web applications engineered with micro-frontend architectures, event-driven APIs, and strict RBAC security.',
        metricValue: '4.5x',
        metricLabel: 'Faster Feature Release Velocity',
        technologies: ['TypeScript & React', 'Java Spring Boot / Node.js', 'PostgreSQL', 'Apache Kafka', 'Docker & Kubernetes'],
      },
      {
        label: 'JOB PORTAL',
        slug: 'job-portal',
        category: 'Digitalization Services',
        theme: 'ai',
        iconName: 'Cpu',
        shortSummary:
          'AI-powered talent acquisition and recruitment portals with automated resume parsing, semantic candidate matching, and ATS workflows.',
        metricValue: '62% Faster',
        metricLabel: 'Candidate Shortlisting Cycle',
        technologies: ['AI Resume Parser', 'ElasticSearch / Vector Match', 'Applicant Tracking (ATS)', 'Video Interview API', 'HRMS Sync'],
      },
      {
        label: 'MOBILE APP DEVELOPMENT',
        slug: 'mobile-app-development',
        category: 'Digitalization Services',
        theme: 'transformation',
        iconName: 'Workflow',
        shortSummary:
          'Native iOS, Android, and cross-platform React Native/Flutter enterprise mobile apps with offline-first sync and biometric auth.',
        metricValue: '4.8 ★',
        metricLabel: 'Average Enterprise App Store Rating',
        technologies: ['React Native', 'Flutter', 'Swift & Kotlin', 'Offline SQLite Sync', 'Biometric OAuth2'],
      },
      {
        label: 'SURVEY PORTAL',
        slug: 'survey-portal',
        category: 'Digitalization Services',
        theme: 'crm',
        iconName: 'BarChart3',
        shortSummary:
          'Enterprise feedback, NPS, and multi-lingual market research survey platforms with conditional branching and real-time sentiment analytics.',
        metricValue: '5x',
        metricLabel: 'Faster Customer Insight Aggregation',
        technologies: ['Dynamic Form Engine', 'NLP Sentiment Analysis', 'Omnichannel Distribution', 'Salesforce / CRM Sync', 'BI Exports'],
      },
      {
        label: 'UI/UX DESIGN',
        slug: 'ui-ux-design',
        category: 'Digitalization Services',
        theme: 'transformation',
        iconName: 'Workflow',
        shortSummary:
          'Enterprise design systems, WCAG 2.1 AA accessible interfaces, interactive Figma prototypes, and user-journey conversion optimization.',
        metricValue: '+46%',
        metricLabel: 'User Task Completion Efficiency',
        technologies: ['Figma Design Systems', 'WCAG 2.1 AA Accessibility', 'Interactive Prototyping', 'Usability Testing', 'Design Tokens'],
      },
      {
        label: 'WEB PORTAL DEVELOPMENT',
        slug: 'web-portal-development',
        category: 'Digitalization Services',
        theme: 'transformation',
        iconName: 'Workflow',
        shortSummary:
          'Secure self-service customer, vendor, and partner portals integrated directly with your ERP, CRM, and document management systems.',
        metricValue: '-52%',
        metricLabel: 'Reduction in Support Ticket Volume',
        technologies: ['Next.js & React', 'Single Sign-On (SAML/OIDC)', 'GraphQL & REST APIs', 'SAP / Salesforce Integration', 'Audit Logging'],
      },
    ],
  },
  {
    title: 'IT SERVICES',
    theme: 'cloud',
    items: [
      {
        label: 'IT CONSULTING SERVICE',
        slug: 'it-consulting-service',
        category: 'IT Services',
        theme: 'transformation',
        iconName: 'Workflow',
        shortSummary:
          'Principal technology advisory, enterprise architecture roadmaps, M&A IT due diligence, and digital operating model transformation.',
        metricValue: '31%',
        metricLabel: 'Average IT Operational Cost Savings',
        technologies: ['TOGAF Architecture', 'IT Due Diligence', 'Vendor Consolidation', 'Agile Delivery Pods', 'Executive KPI Governance'],
      },
      {
        label: 'IT INFRASTRUCTURE SERVICES & SOLUTIONS',
        slug: 'it-infrastructure-services-solutions',
        category: 'IT Services',
        theme: 'cloud',
        iconName: 'Server',
        shortSummary:
          'Hybrid data center modernization, SD-WAN network engineering, virtualization, and high-availability compute/storage provisioning.',
        metricValue: '99.99%',
        metricLabel: 'Core Infrastructure Uptime SLA',
        technologies: ['VMware & Nutanix', 'Cisco SD-WAN', 'Linux / Windows Server', 'Hybrid Cloud Interconnect', 'Ansible Automation'],
      },
      {
        label: 'IT MANAGED SERVICE',
        slug: 'it-managed-service',
        category: 'IT Services',
        theme: 'cloud',
        iconName: 'Server',
        shortSummary:
          '24/7/365 NOC & helpdesk operations, automated patch management, endpoint monitoring, and proactive SLA-backed system administration.',
        metricValue: '< 10 min',
        metricLabel: 'P1 Incident Response SLA',
        technologies: ['24/7 NOC Operations', 'Microsoft Intune & Jamf', 'Automated Patching', 'ServiceNow ITSM', 'Endpoint Telemetry'],
      },
      {
        label: 'MANAGED SECURITY SERVICES',
        slug: 'managed-security-services',
        category: 'IT Services',
        theme: 'security',
        iconName: 'ShieldCheck',
        shortSummary:
          '24/7 Managed SOC, MDR (Managed Detection & Response), SIEM threat hunting, and automated SOAR containment playbooks.',
        metricValue: '< 4 min',
        metricLabel: 'Mean Time to Detect & Isolate Threats',
        technologies: ['24/7 SOC & MDR', 'CrowdStrike / SentinelOne', 'Microsoft Sentinel SIEM', 'SOAR Playbooks', 'Threat Intelligence'],
      },
      {
        label: 'BACKUP AND DISASTER RECOVERY',
        slug: 'backup-and-disaster-recovery',
        category: 'IT Services',
        theme: 'cloud',
        iconName: 'Server',
        shortSummary:
          'Immutable air-gapped backups, ransomware recovery vaults, cross-region replication, and automated DR failover orchestration.',
        metricValue: '100%',
        metricLabel: 'Immutable Backup Recovery Integrity',
        technologies: ['AWS Backup & DRS', 'Veeam Enterprise', 'Air-Gapped Vaults', 'Cross-Region Replication', 'Automated Failover Drills'],
      },
    ],
  },
  {
    title: 'SAAS',
    theme: 'salesforce',
    items: [
      {
        label: 'SALESFORCE',
        slug: 'salesforce-consulting',
        category: 'SaaS',
        theme: 'salesforce',
        iconName: 'Cloud',
        shortSummary:
          'Multi-org Salesforce Sales Cloud, Service Cloud, Revenue CPQ, Data Cloud, and custom Lightning Web Component engineering.',
        metricValue: '+42%',
        metricLabel: 'Faster Quote-to-Cash Velocity',
        technologies: ['Sales & Service Cloud', 'Salesforce CPQ', 'Data Cloud', 'Apex & LWC', 'MuleSoft Anypoint'],
      },
      {
        label: 'G-SUITE',
        slug: 'g-suite',
        category: 'SaaS',
        theme: 'cloud',
        iconName: 'Cloud',
        shortSummary:
          'Google Workspace (G-Suite) enterprise migration, zero-trust DLP email security, custom Apps Script automation, and identity federation.',
        metricValue: 'Zero',
        metricLabel: 'Mailbox Cutover Data Loss',
        technologies: ['Google Workspace Enterprise', 'Cloud Identity & SSO', 'Gmail DLP & Vault', 'Google Apps Script', 'BigQuery Audit Logs'],
      },
      {
        label: 'MICROSOFT SOLUTIONS',
        slug: 'microsoft-solutions',
        category: 'SaaS',
        theme: 'crm',
        iconName: 'BarChart3',
        shortSummary:
          'Microsoft 365, Dynamics 365 CRM/ERP, SharePoint intranet portals, and Power Platform (Power BI, Power Automate, Power Apps) solutions.',
        metricValue: '3.8x',
        metricLabel: 'Faster Business Process Automation',
        technologies: ['Dynamics 365', 'Microsoft 365 & SharePoint', 'Power BI & Fabric', 'Power Automate & Power Apps', 'Entra ID Governance'],
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem {
  // 1. Check if slug matches one of the 6 primary SERVICES_DATA entries directly
  const existing = SERVICES_DATA.find((s) => s.slug === slug);
  if (existing) {
    return existing;
  }

  // 2. Check if slug matches any of the 29 mega-menu sub-services
  for (let cIdx = 0; cIdx < MEGA_MENU_CATEGORIES.length; cIdx++) {
    const cat = MEGA_MENU_CATEGORIES[cIdx];
    const found = cat.items.find((item) => item.slug === slug);
    if (found) {
      return {
        slug: found.slug,
        indexNumber:
          cat.title === 'SAAS'
            ? 'SaaS Solutions'
            : cat.title
                .split(' ')
                .map((w) => (w === 'IT' ? 'IT' : w.charAt(0) + w.slice(1).toLowerCase()))
                .join(' '),
        title: found.label
          .split(' ')
          .map((w) =>
            w.includes('_') || w.includes('/') || w === 'AWS' || w === 'IT' || w === 'ITGC)' || w === '(ITGC)'
              ? w.replace('_', ' ')
              : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
          )
          .join(' '),
        shortDescription: found.shortSummary,
        heroDescription: `${found.shortSummary} Delivered by Vorombetech Solutions principal architects across US and India engineering pods with strict SLA governance.`,
        iconName: found.iconName,
        visualTheme: found.theme,
        problemStatement: {
          headline: `Legacy bottlenecks and compliance gaps in ${found.category.toLowerCase()} limit enterprise agility`,
          description: `Organizations scaling their ${found.label.replace('_', ' ')} capabilities often encounter fragmented tooling, manual compliance audits, and high operational overhead that slow down production delivery.`,
          painPoints: [
            'Manual configuration drift and lack of standardized architecture blueprints across teams',
            'Insufficient real-time telemetry, audit logging, and regulatory compliance automation',
            'High operational spend caused by unoptimized licensing and legacy infrastructure bottlenecks',
            'Delayed incident response and lack of 24/7 SLA-backed engineering ownership',
          ],
        },
        solutionStatement: {
          headline: `Production-grade ${found.label.replace('_', ' ')} architecture engineered by Vorombetech`,
          description: `We design, implement, and manage resilient ${found.label.replace('_', ' ')} solutions with automated governance, zero-downtime deployment pipelines, and measurable commercial ROI.`,
          outcomes: [
            `Achieve ${found.metricValue} ${found.metricLabel.toLowerCase()} with audited production baselines`,
            'End-to-end security, access control, and continuous compliance telemetry built in from day one',
            'Seamless integration with your existing ERP, CRM, and identity management ecosystems',
            '24/7 follow-the-sun managed support across our Gurugram HQ and US delivery pods',
          ],
        },
        benefits: [
          {
            title: `${found.metricValue} ${found.metricLabel}`,
            description: `Engineered specifically to deliver verified improvements in ${found.metricLabel.toLowerCase()}.`,
          },
          {
            title: 'Audit-Ready Security & Governance',
            description:
              'Aligned with ISO 27001, SOC 2 Type II, and zero-trust enterprise access policies.',
          },
          {
            title: 'Zero-Downtime Implementation',
            description:
              'Phased canary rollouts and automated validation ensure uninterrupted business continuity.',
          },
          {
            title: '24/7 Cross-Border Engineering SLA',
            description:
              'Continuous operational coverage from senior architects in the US and India.',
          },
        ],
        technologies: found.technologies,
        processSteps: [
          {
            stepNumber: '01',
            phase: 'Discover',
            title: 'Current-State Audit & Gap Analysis',
            description: `Assess your existing ${found.category.toLowerCase()} posture, security controls, and performance baselines.`,
            deliverable: 'Architecture Assessment & ROI Roadmap',
          },
          {
            stepNumber: '02',
            phase: 'Design',
            title: 'Target Blueprint & Security Specification',
            description:
              'Define high-availability topology, integration contracts, and compliance guardrails.',
            deliverable: 'Approved Solution Architecture Blueprint',
          },
          {
            stepNumber: '03',
            phase: 'Develop',
            title: 'Iterative Engineering & Automated Testing',
            description:
              'Build, integrate, and stress-test in staging with full CI/CD and security validation.',
            deliverable: 'Production-Ready Release Candidate',
          },
          {
            stepNumber: '04',
            phase: 'Deploy',
            title: 'Zero-Downtime Cutover & 24/7 Managed SLA',
            description:
              'Execute phased production launch with real-time telemetry and continuous optimization.',
            deliverable: 'Live Production Environment & SLA Handover',
          },
        ],
        metrics: [
          { value: found.metricValue, label: found.metricLabel },
          { value: '99.98%', label: 'Production SLA Adherence' },
          { value: '100%', label: 'First-Pass Compliance Audit' },
        ],
        relatedStorySlugs: ['bfsi-global-bank', 'saas-cloud-cost', 'healthcare-ai-claims'],
      };
    }
  }

  return SERVICES_DATA[0];
}

export type ServicePillarDesignType =
  | 'cloud'
  | 'security'
  | 'digitalization'
  | 'it-services'
  | 'saas';

export interface ServiceCategoryContext {
  designType: ServicePillarDesignType;
  categoryTitle: string;
  categoryIndex: number;
  siblings: MegaMenuSubService[];
  allCategories: {
    title: string;
    designType: ServicePillarDesignType;
    defaultSlug: string;
    count: number;
  }[];
}

const CATEGORY_TITLE_TO_DESIGN: Record<string, ServicePillarDesignType> = {
  'CLOUD SERVICES': 'cloud',
  'INFORMATION SECURITY': 'security',
  'DIGITALIZATION SERVICES': 'digitalization',
  'IT SERVICES': 'it-services',
  SAAS: 'saas',
};

export function getServiceCategoryContext(slug: string): ServiceCategoryContext {
  const allCategories = MEGA_MENU_CATEGORIES.map((cat) => ({
    title: cat.title,
    designType: CATEGORY_TITLE_TO_DESIGN[cat.title] || 'cloud',
    defaultSlug: cat.items[0]?.slug || 'cloud-consultancy',
    count: cat.items.length,
  }));

  for (let i = 0; i < MEGA_MENU_CATEGORIES.length; i++) {
    const cat = MEGA_MENU_CATEGORIES[i];
    if (cat.items.some((item) => item.slug === slug)) {
      return {
        designType: CATEGORY_TITLE_TO_DESIGN[cat.title] || 'cloud',
        categoryTitle: cat.title,
        categoryIndex: i + 1,
        siblings: cat.items,
        allCategories,
      };
    }
  }

  // Fallback mapping for legacy 6 slugs from SERVICES_DATA
  const legacyMap: Record<string, string> = {
    'cloud-devops-engineering': 'CLOUD SERVICES',
    'cybersecurity-services': 'INFORMATION SECURITY',
    'digital-transformation': 'DIGITALIZATION SERVICES',
    'ai-automation': 'IT SERVICES',
    'salesforce-consulting': 'SAAS',
    'crm-revops-optimization': 'SAAS',
  };

  const mappedTitle = legacyMap[slug] || 'CLOUD SERVICES';
  const matchedCatIdx = MEGA_MENU_CATEGORIES.findIndex((c) => c.title === mappedTitle);
  const cat = MEGA_MENU_CATEGORIES[matchedCatIdx >= 0 ? matchedCatIdx : 0];

  return {
    designType: CATEGORY_TITLE_TO_DESIGN[cat.title] || 'cloud',
    categoryTitle: cat.title,
    categoryIndex: (matchedCatIdx >= 0 ? matchedCatIdx : 0) + 1,
    siblings: cat.items,
    allCategories,
  };
}

