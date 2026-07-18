import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { certifications } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Certifications" title="Courses & credentials" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            whileHover={{ y: -4 }}
            className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 hover:bg-surface-hover"
          >
            <div className="rounded-full bg-accent-soft p-2.5 text-accent">
              <FiAward size={20} />
            </div>
            <div>
              <h3 className="font-medium text-ink">{cert.title}</h3>
              <p className="mt-1 text-sm text-muted">
                {cert.issuer}
                {cert.period ? ` · ${cert.period}` : ''}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
