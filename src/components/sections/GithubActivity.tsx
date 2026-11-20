import { useState } from 'react'
import { FiGithub } from 'react-icons/fi'
import { GITHUB_USERNAME } from '@/lib/constants'

export default function GithubActivity() {
  const [chartFailed, setChartFailed] = useState(false)

  return (
    <div className="mt-20">
      <div className="mb-8 flex items-center gap-2">
        <FiGithub size={20} className="text-ink" />
        <h3 className="text-xl font-semibold text-ink">Latest from GitHub</h3>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border bg-surface p-4">
        {chartFailed ? (
          <p className="text-sm text-muted">
            Couldn't load the contribution graph right now — see it on{' '}
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
        ) : (
          <img
            src={`https://ghchart.rshah.org/3b82f6/${GITHUB_USERNAME}`}
            alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
            className="mx-auto min-w-[640px]"
            loading="lazy"
            onError={() => setChartFailed(true)}
          />
        )}
      </div>
    </div>
  )
}
