import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRepositoryIssues } from '../services/github';
import { Issue } from '../types/github';
import { IssuesList } from '../components/IssuesList';
import { IssuesChart } from '../components/IssuesChart';
import { Loader2 } from 'lucide-react';

export function Repository() {
  const { owner, name } = useParams<{ owner: string; name: string }>();
  const [issues, setIssues] = useState<Issue[]>([]);
  const [filter, setFilter] = useState<'all' | 'open' | 'closed'>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIssues = async () => {
      if (!owner || !name) return;
      
      try {
        setLoading(true);
        const data = await getRepositoryIssues(owner, name, filter === 'all' ? undefined : filter);
        setIssues(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch issues. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, [owner, name, filter]);

  const openIssues = issues.filter((issue) => issue.state === 'open').length;
  const closedIssues = issues.filter((issue) => issue.state === 'closed').length;

  if (!owner || !name) {
    return <div>Invalid repository</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">
          {owner}/{name}
        </h1>
        
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="animate-spin" size={32} />
          </div>
        ) : error ? (
          <div className="text-red-600 mb-8">{error}</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <IssuesList
                issues={issues}
                filter={filter}
                onFilterChange={setFilter}
              />
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Issues Overview</h2>
              <IssuesChart
                openCount={openIssues}
                closedCount={closedIssues}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}