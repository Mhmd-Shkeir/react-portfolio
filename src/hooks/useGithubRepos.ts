import { useEffect, useState } from 'react'
import { fetchLatestRepos, type GithubRepo } from '@/lib/github'

interface UseGithubReposResult {
  repos: GithubRepo[]
  isLoading: boolean
  error: string | null
}

export function useGithubRepos(
  username: string,
  count = 6,
): UseGithubReposResult {
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    fetchLatestRepos(username, count)
      .then((data) => {
        if (!cancelled) setRepos(data)
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message)
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [username, count])

  return { repos, isLoading, error }
}
