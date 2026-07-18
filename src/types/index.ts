export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  bullets: string[]
  tags: string[]
}

export interface ProjectRepo {
  label: string
  url: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  repos?: ProjectRepo[]
  demo?: string
  featured?: boolean
}

export interface Skill {
  name: string
  icon: string
}

export interface SkillCategory {
  id: string
  name: string
  skills: Skill[]
}

export interface Certification {
  title: string
  issuer: string
  period?: string
}

export interface SocialLink {
  label: string
  url: string
  icon: string
}

export interface Stat {
  label: string
  value: number
  suffix?: string
}
