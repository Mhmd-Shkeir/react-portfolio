import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile, socialLinks, stats } from '@/data/content'
import Button from '@/components/ui/Button'
import TypingText from '@/components/shared/TypingText'
import ParticleBackground from '@/components/shared/ParticleBackground'
import AnimatedCounter from '@/components/shared/AnimatedCounter'

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail,
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <ParticleBackground />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(600px circle at 50% 20%, rgba(59,130,246,0.12), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.p
          variants={item}
          className="mb-4 font-mono text-sm font-medium text-accent"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          variants={item}
          className="text-balance text-4xl font-bold tracking-tight text-ink sm:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-4 h-10 text-xl font-medium text-muted sm:text-2xl"
        >
          <TypingText words={profile.roles} />
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View Projects
          </Button>
          <Button variant="secondary" href={profile.resumeUrl} download>
            <FiDownload size={16} /> Download Resume
          </Button>
          <Button
            variant="ghost"
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 flex items-center justify-center gap-5"
        >
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
                {Icon && <Icon size={20} />}
              </a>
            )
          })}
        </motion.div>

        <motion.div
          variants={item}
          className="mx-auto mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="block text-2xl font-semibold text-ink sm:text-3xl"
              />
              <p className="mt-1 text-xs text-muted sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted"
        aria-hidden="true"
      >
        <FiArrowDown size={20} />
      </motion.div>
    </section>
  )
}
