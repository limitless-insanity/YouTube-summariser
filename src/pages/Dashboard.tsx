import React from 'react';
import { YouTubeForm } from '../components/YouTubeForm';
import { SummaryList } from '../components/SummaryList';

export function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">YouTube Summary Dashboard</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Generate New Summary</h2>
        <YouTubeForm />
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Summaries</h2>
        <SummaryList />
      </div>
    </div>
  );
}