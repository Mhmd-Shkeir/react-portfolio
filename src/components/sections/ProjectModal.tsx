import { FiExternalLink, FiGithub } from 'react-icons/fi'
import type { Project } from '@/types'
import Modal from '@/components/ui/Modal'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Modal isOpen={project !== null} onClose={onClose}>
      {project && (
        <div>
          <h3 className="pr-8 text-2xl font-semibold text-ink">
            {project.title}
          </h3>

          <p className="mt-4 text-base leading-relaxed text-muted">
            {project.longDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent"
              >
                {tag}
              </span>
            ))}
          </div>

          {((project.repos && project.repos.length > 0) || project.demo) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {project.repos?.map((repo) => (
                <a
                  key={repo.url}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface-hover"
                >
                  <FiGithub size={16} /> {repo.label}
                </a>
              ))}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
                >
                  <FiExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </Modal>
  )
}
