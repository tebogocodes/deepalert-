import React from 'react';
import { Filter } from 'lucide-react';

interface IssueFilterBarProps {
  filter: 'all' | 'open' | 'closed';
  onFilterChange: (filter: 'all' | 'open' | 'closed') => void;
  totalIssues: number;
}

export function IssueFilterBar({ filter, onFilterChange, totalIssues }: IssueFilterBarProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Filter size={20} className="text-gray-500" />
          <span className="text-sm font-medium text-gray-700">
            {totalIssues} {totalIssues === 1 ? 'issue' : 'issues'}
          </span>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onFilterChange('all')}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => onFilterChange('open')}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              filter === 'open'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Open
          </button>
          <button
            onClick={() => onFilterChange('closed')}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              filter === 'closed'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Closed
          </button>
        </div>
      </div>
    </div>
  );
}