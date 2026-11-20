import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { featuredProjectIds, projects } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/sections/ProjectCard'
import ProjectModal from '@/components/sections/ProjectModal'
import GithubActivity from '@/components/sections/GithubActivity'
import type { Project } from '@/types'

const featured = featuredProjectIds
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is Project => project !== undefined)

const more = projects.filter((project) => !featuredProjectIds.includes(project.id))

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [showMore, setShowMore] = useState(false)

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="Full-stack, mobile, AI, and computer vision projects from internships, coursework, and personal work."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelected(project)}
            className={index === 0 ? 'lg:col-span-2' : ''}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={() => setShowMore((open) => !open)}
          aria-expanded={showMore}
          aria-controls="more-projects"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {showMore ? 'Show fewer projects' : `More projects (${more.length})`}
          <FiChevronDown
            size={16}
            aria-hidden="true"
            className={`transition-transform duration-200 ${showMore ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {showMore && (
          <motion.div
            id="more-projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {more.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelected(project)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />

      <GithubActivity />
    </section>
  )
}
