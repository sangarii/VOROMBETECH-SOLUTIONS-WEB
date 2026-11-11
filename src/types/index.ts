export type ServiceCategory =
  | 'Salesforce Consulting'
  | 'AI & Automation'
  | 'Cybersecurity'
  | 'Cloud Computing'
  | 'Digital Transformation'
  | 'CRM Optimization';

export type StoryIndustry = 'BFSI' | 'Healthcare' | 'SaaS' | 'E-commerce';

export type BlogCategory =
  | 'AI & Automation'
  | 'Salesforce'
  | 'Cybersecurity'
  | 'Digital Transformation'
  | 'Cloud Computing';

export type VisualTheme =
  | 'salesforce'
  | 'ai'
  | 'security'
  | 'cloud'
  | 'transformation'
  | 'crm'
  | 'bfsi'
  | 'healthcare'
  | 'saas'
  | 'ecommerce';

export interface ProcessStep {
  stepNumber: string;
  phase: 'Discover' | 'Design' | 'Develop' | 'Deploy' | 'Support';
  title: string;
  description: string;
  deliverable: string;
}

export interface ServiceMetric {
  value: string;
  label: string;
  timeframe?: string;
}

export interface ServiceItem {
  slug: string;
  indexNumber: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  iconName: 'Cloud' | 'Cpu' | 'ShieldCheck' | 'Server' | 'Layers' | 'BarChart3' | 'Workflow';
  visualTheme: VisualTheme;
  problemStatement: {
    headline: string;
    description: string;
    painPoints: string[];
  };
  solutionStatement: {
    headline: string;
    description: string;
    outcomes: string[];
  };
  benefits: {
    title: string;
    description: string;
  }[];
  technologies: string[];
  processSteps: ProcessStep[];
  metrics: ServiceMetric[];
  relatedStorySlugs?: string[];
}

export interface StoryMetric {
  value: string;
  label: string;
  detail: string;
}

export interface SuccessStory {
  slug: string;
  clientName: string;
  industry: StoryIndustry;
  date: string;
  title: string;
  summary: string;
  challenge: string[];
  solution: string[];
  metrics: StoryMetric[];
  quote: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
  technologiesUsed: string[];
  visualTheme: VisualTheme;
}

export type BlogContentBlock =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'bulletList'; items: string[] }
  | { type: 'numberedList'; items: string[] }
  | {
      type: 'image';
      caption: string;
      alt: string;
      visualTheme: VisualTheme;
      diagramLabel: string;
    }
  | {
      type: 'youtube';
      videoId: string;
      title: string;
      duration: string;
      keyTakeaways: string[];
    }
  | {
      type: 'blockquote';
      quote: string;
      attribution: string;
    };

export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  excerpt: string;
  visualTheme: VisualTheme;
  content: BlogContentBlock[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  impactMetric: string;
}
