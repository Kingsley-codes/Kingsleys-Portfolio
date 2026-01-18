export interface TechStackItem {
  name: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  id?: number;
  name: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  featured?: boolean;
  links: {
    deployment?: string;
    source?: string;
    explore?: string;
    documentation?: string;
  };
  type?: "frontend" | "backend" | "fullstack";
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  location: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}
