import axios from 'axios';
import { SearchResponse, Repository, Issue } from '../types/github';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export const searchRepositories = async (query: string): Promise<SearchResponse<Repository>> => {
  const response = await api.get<SearchResponse<Repository>>(`/search/repositories?q=${query}`);
  return response.data;
};

export const getRepositoryIssues = async (owner: string, repo: string, state?: string): Promise<Issue[]> => {
  const response = await api.get<Issue[]>(`/repos/${owner}/${repo}/issues?state=${state || 'all'}`);
  return response.data;
};