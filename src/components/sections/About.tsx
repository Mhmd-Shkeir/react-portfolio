import { motion } from 'framer-motion'
import { profile } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="About" title="A little about me" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl space-y-6"
      >
        <p className="text-balance text-xl leading-relaxed text-muted">
          {profile.summary}
        </p>
        <p className="text-base leading-relaxed text-muted">
          {profile.education.degree}
          <br />
          {profile.education.school} — {profile.education.period}
        </p>
      </motion.div>
    </section>
  )
}
