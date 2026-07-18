import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile, socialLinks } from '@/data/content'

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">
          © {year} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap]
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="text-muted transition-colors duration-200 hover:text-accent"
              >
                {Icon && <Icon size={18} />}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
