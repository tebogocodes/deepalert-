import React from 'react';
import { Issue } from '../types/github';
import { IssueCard } from './IssueCard';
import { IssueFilterBar } from './IssueFilterBar';

interface IssuesListProps {
  issues: Issue[];
  filter: 'all' | 'open' | 'closed';
  onFilterChange: (filter: 'all' | 'open' | 'closed') => void;
}

export function IssuesList({ issues, filter, onFilterChange }: IssuesListProps) {
  return (
    <div className="space-y-4">
      <IssueFilterBar
        filter={filter}
        onFilterChange={onFilterChange}
        totalIssues={issues.length}
      />
      
      {issues.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <p className="text-gray-600">No issues found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {issues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      )}
    </div>
  );
}