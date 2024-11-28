import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub repositories..."
          className="w-full px-4 py-3 pl-12 text-gray-900 dark:text-white border dark:border-gray-700 rounded-lg 
                   bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   transition-colors duration-300"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 
                   bg-blue-600 hover:bg-blue-700 text-white rounded-md
                   transition-all duration-300 hover:shadow-lg"
        >
          Search
        </button>
      </div>
    </form>
  );
}