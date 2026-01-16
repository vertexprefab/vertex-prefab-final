
export type Language = 'en' | 'ar' | 'tr';

export interface TranslationStrings {
  nav: {
    home: string;
    services: string;
    systems: string;
    process: string;
    about: string;
    contact: string;
    whyUs: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  designServices: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    items: string[];
  };
  aboutSection: {
    title: string;
    subtitle: string;
    overview: string;
    vision: { title: string; desc: string };
    mission: { title: string; desc: string };
    commitment: { title: string; desc: string };
  };
  sections: {
    lgs: SectionContent;
    pressPanel: SectionContent;
    caravans: SectionContent;
    domes: SectionContent;
    wooden: SectionContent;
    steel: SectionContent;
  };
  whyChooseUs: {
    title: string;
    quality: { title: string; desc: string };
    speed: { title: string; desc: string };
    global: { title: string; desc: string };
  };
  process: {
    title: string;
    step1: { title: string; desc: string };
    step2: { title: string; desc: string };
    step3: { title: string; desc: string };
    step4: { title: string; desc: string };
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    whatsapp: string;
    address: string;
    send: string;
  };
  footer: {
    rights: string;
    tagline: string;
  };
}

export interface SectionContent {
  id: string;
  title: string;
  description: string;
  advantages: string[];
}
