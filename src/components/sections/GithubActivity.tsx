import { motion } from 'framer-motion'
import { FiGithub, FiStar } from 'react-icons/fi'
import { useGithubRepos } from '@/hooks/useGithubRepos'
import { GITHUB_USERNAME } from '@/lib/constants'

export default function GithubActivity() {
  const { repos, isLoading, error } = useGithubRepos(GITHUB_USERNAME, 6)

  return (
    <div className="mt-20">
      <div className="mb-8 flex items-center gap-2">
        <FiGithub size={20} className="text-ink" />
        <h3 className="text-xl font-semibold text-ink">Latest from GitHub</h3>
      </div>

      {!isLoading && !error && (
        <div className="mb-10 overflow-x-auto rounded-2xl border border-border bg-surface p-4">
          <img
            src={`https://ghchart.rshah.org/3b82f6/${GITHUB_USERNAME}`}
            alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
            className="mx-auto min-w-[640px]"
            loading="lazy"
          />
        </div>
      )}

      {error && (
        <p className="text-sm text-muted">
          Couldn't load live GitHub data right now — check out the full
          profile on{' '}
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      )}

      {isLoading && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-28 animate-pulse rounded-2xl border border-border bg-surface"
            />
          ))}
        </div>
      )}

      {!isLoading && !error && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, index) => (
            <motion.a
              key={repo.id}
              href={repo.htmlUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-border bg-surface p-5 transition-colors duration-200 hover:bg-surface-hover"
            >
              <div className="flex items-center justify-between gap-2">
                <h4 className="truncate font-mono text-sm font-medium text-ink">
                  {repo.name}
                </h4>
                {repo.stars > 0 && (
                  <span className="flex shrink-0 items-center gap-1 text-xs text-muted">
                    <FiStar size={12} /> {repo.stars}
                  </span>
                )}
              </div>
              <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted">
                {repo.description ?? 'No description provided.'}
              </p>
              {repo.language && (
                <span className="mt-3 inline-block rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                  {repo.language}
                </span>
              )}
            </motion.a>
          ))}
        </div>
      )}
    </div>
  )
}
