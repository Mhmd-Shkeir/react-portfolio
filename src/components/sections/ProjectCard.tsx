import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 text-left transition-colors duration-200 hover:bg-surface-hover hover:border-accent/40"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
        {project.repos && project.repos.length > 0 && (
          <FiGithub size={18} className="mt-1 shrink-0 text-muted" />
        )}
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.button>
  )
}
