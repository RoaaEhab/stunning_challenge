"use client";

import { useState } from 'react';
import axios from 'axios';

export type Section = {
  title: string;
  content: string;
};

export default function IdeaForm({ onSubmit }: { onSubmit: (sections: Section[], idea: string) => void }) {
  const [websiteIdea, setWebsiteIdea] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteIdea.trim()) {
      setError('Please enter a website idea');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:3000/sections', { websiteIdea });
      onSubmit(response.data, websiteIdea);
    } catch (err) {
      setError('Failed to generate sections. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="websiteIdea" className="block text-sm font-medium">
            Website Idea
          </label>
          <input
            id="websiteIdea"
            type="text"
            value={websiteIdea}
            onChange={(e) => setWebsiteIdea(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            placeholder="e.g., Landing page for bakery"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white p-2 rounded disabled:opacity-50"
        >
          {isLoading ? 'Generating...' : 'Generate Sections'}
        </button>
      </form>
    </div>
  );
}