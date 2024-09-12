import { Repository } from '@/types'

export async function fetchGithubRepos(username: string): Promise<Repository[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`)
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repositories')
  }
  const data: Repository[] = await response.json()
  const currentYear = new Date().getFullYear()
  return data.filter(repo => {
    const updatedAt = new Date(repo.updated_at)
    return updatedAt.getFullYear() === currentYear
  })
}
