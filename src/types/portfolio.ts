export type ProjectCategory = 'all' | 'frontend' | 'backend';

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  categoryType: 'frontend' | 'backend';
  description: string;
  detailedOverview: string;
  features: string[];
  challenges?: string;
  tech: string[];
  github?: string;
  live?: string;
  previewImage?: string;
  icon: string;
  statusBadge?: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: 'frontend' | 'backend' | 'tools';
  description: string;
  items: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location?: string;
  score?: string;
  description?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  image?: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  workArrangement: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  whatsapp?: string;
  location: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    shortName: string;
    eyebrow: string;
    title: string;
    highlightWord: string;
    bio: string;
    detailedBio: string[];
    location: string;
    availability: string;
    statusText: string;
    resumeUrl: string;
    resumeFileName: string;
    avatarUrl: string;
  };
  socials: SocialLinks;
  skills: SkillCategory[];
  projects: Project[];
  experience: ExperienceItem[];
  certifications: CertificationItem[];
  education: EducationItem[];
  contactConfig: {
    serviceType: 'mailto' | 'formspree' | 'custom';
    formspreeEndpoint?: string;
  };
}
