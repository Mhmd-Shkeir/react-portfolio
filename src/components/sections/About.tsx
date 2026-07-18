import { motion } from 'framer-motion'
import { profile } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="About" title="A little about me" />

      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,320px)_1fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto flex aspect-square w-full max-w-xs items-center justify-center rounded-3xl border border-border bg-surface"
        >
          <div
            className="flex h-40 w-40 items-center justify-center rounded-full text-4xl font-semibold text-ink"
            style={{
              background:
                'conic-gradient(from 180deg, rgba(59,130,246,0.35), rgba(59,130,246,0.05), rgba(59,130,246,0.35))',
            }}
          >
            MS
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <p className="text-balance text-lg leading-relaxed text-muted">
            {profile.summary}
          </p>
          <p className="text-sm text-muted">
            {profile.education.degree}
            <br />
            {profile.education.school} — {profile.education.period}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
