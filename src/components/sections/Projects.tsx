import { useState } from 'react'
import { projects } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/sections/ProjectCard'
import ProjectModal from '@/components/sections/ProjectModal'
import GithubActivity from '@/components/sections/GithubActivity'
import type { Project } from '@/types'

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="A selection of full-stack, AI, and IoT projects from internships, coursework, and personal work."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />

      <GithubActivity />
    </section>
  )
}
