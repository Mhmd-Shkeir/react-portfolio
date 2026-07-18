import { useState } from 'react'
import { motion } from 'framer-motion'
import { skillCategories } from '@/data/content'
import { getSkillIcon } from '@/lib/icons'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id)
  const activeCategory =
    skillCategories.find((category) => category.id === activeId) ??
    skillCategories[0]

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I work with"
        description="Grouped by area — click a category to see the stack."
      />

      <div className="flex flex-wrap gap-2">
        {skillCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveId(category.id)}
            className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200"
          >
            {activeId === category.id && (
              <motion.span
                layoutId="skills-tab-bg"
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 ${
                activeId === category.id ? 'text-white' : 'text-muted'
              }`}
            >
              {category.name}
            </span>
          </button>
        ))}
      </div>

      <motion.div
        key={activeCategory.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
      >
        {activeCategory.skills.map((skill, index) => {
          const Icon = getSkillIcon(skill.icon)
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 transition-colors duration-200 hover:bg-surface-hover"
            >
              <Icon size={20} className="shrink-0 text-accent" />
              <span className="text-sm text-ink">{skill.name}</span>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
