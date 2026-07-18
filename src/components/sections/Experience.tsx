import { motion } from 'framer-motion'
import { experience } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        description="Internships across full-stack, backend, and AI/XR engineering."
      />

      <div className="relative">
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-1/2 sm:-translate-x-1/2"
          aria-hidden="true"
        />

        <ol className="space-y-12">
          {experience.map((entry, index) => {
            const isEven = index % 2 === 0
            return (
              <li key={entry.id} className="relative sm:grid sm:grid-cols-2 sm:gap-12">
                <span
                  className="absolute left-0 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-accent bg-bg sm:left-1/2"
                  aria-hidden="true"
                />

                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5 }}
                  className={`pl-8 sm:pl-0 ${
                    isEven
                      ? 'sm:col-start-1 sm:text-right sm:pr-12'
                      : 'sm:col-start-2 sm:pl-12'
                  }`}
                >
                  <div className="rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 hover:bg-surface-hover">
                    <p className="font-mono text-xs font-medium text-accent">
                      {entry.period}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-ink">
                      {entry.company}
                    </h3>
                    <p className="text-sm text-muted">{entry.role}</p>

                    <ul
                      className={`mt-4 space-y-2 text-sm leading-relaxed text-muted ${
                        isEven ? 'sm:text-right' : ''
                      }`}
                    >
                      {entry.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>

                    <div
                      className={`mt-4 flex flex-wrap gap-2 ${
                        isEven ? 'sm:justify-end' : ''
                      }`}
                    >
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
