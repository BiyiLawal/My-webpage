import { useState, useEffect } from 'react'
import { StarIcon, CodeBracketIcon } from '@heroicons/react/24/solid'
import { fetchGithubRepos } from '@/utils/github'
import { Repository } from '@/types'

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const username = 'BiyiLawal' 
    fetchGithubRepos(username)
      .then(setRepos)
      .catch(err => setError('Failed to fetch projects. Please try again later.'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="text-center">Loading projects...</div>
  if (error) return <div className="text-center text-red-500">{error}</div>

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-4xl font-bold mb-8 text-center">Projects from {new Date().getFullYear()}</h2>
      {repos.length === 0 ? (
        <p className="text-center">No projects found for the current year.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo) => (
            <div key={repo.id} className="bg-white p-6 rounded-lg shadow-neo transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <CodeBracketIcon className="h-6 w-6 mr-2 text-primary" />
                {repo.name}
              </h3>
              <p className="text-gray-600 mb-4">{repo.description || 'No description available'}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {repo.language && (
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                      {repo.language}
                    </span>
                  )}
                  {repo.topics && repo.topics.map((topic) => (
                    <span key={topic} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center"
                >
                  <StarIcon className="h-5 w-5 mr-1" />
                  View on GitHub
                </a>
                <span className="text-gray-500 text-sm">
                  ⭐ {repo.stargazers_count}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}