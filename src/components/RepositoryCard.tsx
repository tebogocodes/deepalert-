import React from 'react';
import { Star, GitFork, AlertCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Repository } from '../types/github';

interface RepositoryCardProps {
  repository: Repository;
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
            className="w-10 h-10 rounded-full ring-2 ring-blue-500 dark:ring-blue-400"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              <Link
                to={`/repository/${repository.full_name}`}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {repository.full_name}
              </Link>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{repository.owner.login}</p>
          </div>
        </div>
        <a
          href={repository.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          <ExternalLink size={20} />
        </a>
      </div>
      
      <p className="mt-4 text-gray-700 dark:text-gray-300">{repository.description}</p>
      
      <div className="mt-6 flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <Star size={18} className="text-yellow-500" />
          <span className="dark:text-gray-300">{repository.stargazers_count.toLocaleString()}</span>
        </div>
        <div className="flex items-center space-x-2">
          <GitFork size={18} className="text-blue-500" />
          <span className="dark:text-gray-300">{repository.forks_count.toLocaleString()}</span>
        </div>
        <div className="flex items-center space-x-2">
          <AlertCircle size={18} className="text-red-500" />
          <span className="dark:text-gray-300">{repository.open_issues_count.toLocaleString()} issues</span>
        </div>
      </div>
    </div>
  );
}