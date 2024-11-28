import React from 'react';
import { Issue } from '../types/github';
import { formatDate } from '../utils/date';
import { MessageCircle, GitPullRequest } from 'lucide-react';

interface IssueCardProps {
  issue: Issue;
}

export function IssueCard({ issue }: IssueCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <img
            src={issue.user.avatar_url}
            alt={issue.user.login}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <h4 className="font-medium text-gray-900">
              <a
                href={issue.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                {issue.title}
              </a>
            </h4>
            <p className="text-sm text-gray-600">
              Opened by {issue.user.login} on {formatDate(issue.created_at)}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {issue.pull_request && (
            <span className="text-purple-600">
              <GitPullRequest size={16} />
            </span>
          )}
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              issue.state === 'open'
                ? 'bg-green-100 text-green-800'
                : 'bg-purple-100 text-purple-800'
            }`}
          >
            {issue.state}
          </span>
        </div>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {issue.labels.map((label) => (
          <span
            key={label.name}
            className="px-2 py-1 rounded-md text-xs"
            style={{
              backgroundColor: `#${label.color}`,
              color: parseInt(label.color, 16) > 0xffffff / 2 ? '#000' : '#fff',
            }}
          >
            {label.name}
          </span>
        ))}
      </div>
      
      {issue.comments > 0 && (
        <div className="mt-4 flex items-center text-sm text-gray-600">
          <MessageCircle size={16} className="mr-1" />
          {issue.comments} {issue.comments === 1 ? 'comment' : 'comments'}
        </div>
      )}
    </div>
  );
}