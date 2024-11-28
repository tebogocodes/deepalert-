import { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { RepositoryCard } from '../components/RepositoryCard';
import { searchRepositories } from '../services/github';
import { Repository } from '../types/github';
import { Loader2 } from 'lucide-react';
import { useAnimeJS } from '../hooks/useAnimeJS';

export function Home() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Animate title on mount
  useAnimeJS('.title', {
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 1000,
    easing: 'easeOutExpo',
  });

  // Animate search bar
  useAnimeJS('.search-container', {
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 800,
    delay: 200,
    easing: 'easeOutExpo',
  });

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await searchRepositories(query);
      setRepositories(response.items);
    } catch (err) {
      setError('Failed to fetch repositories. Please try again.');
      setRepositories([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="title text-4xl text-center mb-8 text-gray-900 dark:text-white">
      <span className="fade-in">🌟</span>
      <span className="fade-in fade-in-delay"> Discover,</span>
      <span className="fade-in fade-in-2"> Explore,</span>
      <span className="fade-in fade-in-3"> and</span>
      <span className="fade-in fade-in-4"> Dive Deep into GitHub Repositories with Ease!</span>
    </h1>

      
      
      <div className="search-container flex justify-center mb-12">
        <SearchBar onSearch={handleSearch} />
      </div>

      {loading && (
        <div className="flex justify-center">
          <Loader2 className="animate-spin text-gray-900 dark:text-white" size={32} />
        </div>
      )}

      {error && (
        <div className="text-red-600 dark:text-red-400 text-center mb-8">
          {error}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {repositories.map((repo, index) => (
          <div
            key={repo.id}
            className="repository-card"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
            }}
          >
            <RepositoryCard repository={repo} />
          </div>
        ))}
      </div>

      {!loading && !error && repositories.length === 0 && (
        <div className="text-center text-gray-600 dark:text-gray-400">
         Search, and engage with the community like never before.
        </div>
      )}
    </div>
  );
}