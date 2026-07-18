export interface GithubRepo {
  id: number
  name: string
  htmlUrl: string
  description: string | null
  language: string | null
  stars: number
  updatedAt: string
}

const CACHE_KEY = 'github-repos-cache'
const CACHE_TTL_MS = 1000 * 60 * 30

interface CacheEntry {
  timestamp: number
  repos: GithubRepo[]
}

const FALLBACK_DESCRIPTIONS: Record<string, string> = {
  'react-portfolio': 'This personal portfolio site, built with React, Vite, and Tailwind CSS.',
  'Admin_client_console-Nodejs':
    'Full-stack Admin Console with JWT auth and role-based access, built on Node.js and Express.',
  'autocare-pro-javafx':
    'JavaFX vehicle maintenance management system with service tracking, payments, and PDF receipts.',
  'smart-university_iot_mobile':
    'Cross-platform Flutter app for campus attendance and classroom management with RFID/beacon tracking.',
  Multimedia:
    'AI sneaker recognition platform: image classification, price prediction, similarity search, and inventory management.',
}

export async function fetchLatestRepos(
  username: string,
  count = 6,
): Promise<GithubRepo[]> {
  const cached = readCache()
  if (cached) return cached

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
  )
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`)
  }

  const data = (await response.json()) as Array<{
    id: number
    name: string
    html_url: string
    description: string | null
    language: string | null
    stargazers_count: number
    updated_at: string
    fork: boolean
  }>

  const repos = data
    .filter((repo) => !repo.fork)
    .sort(
      (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
    )
    .slice(0, count)
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      htmlUrl: repo.html_url,
      description: repo.description ?? FALLBACK_DESCRIPTIONS[repo.name] ?? null,
      language: repo.language,
      stars: repo.stargazers_count,
      updatedAt: repo.updated_at,
    }))

  writeCache(repos)
  return repos
}

function readCache(): GithubRepo[] | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const entry = JSON.parse(raw) as CacheEntry
    if (Date.now() - entry.timestamp > CACHE_TTL_MS) return null
    return entry.repos
  } catch {
    return null
  }
}

function writeCache(repos: GithubRepo[]) {
  try {
    const entry: CacheEntry = { timestamp: Date.now(), repos }
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(entry))
  } catch {
    // sessionStorage unavailable — skip caching
  }
}
