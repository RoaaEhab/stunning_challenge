"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import IdeaForm from './components/IdeaForm';
import SectionsPreview from './components/SectionsPreview';

interface Section {
  title: string;
  content: string;
}

export default function Home() {
  const [sections, setSections] = useState<Section[]>([]);
  const [websiteIdea, setWebsiteIdea] = useState('');

  useEffect(() => {
    if (websiteIdea) {
      fetchSections(websiteIdea);
    }
  }, [websiteIdea]);

  const fetchSections = async (idea: string) => {
    try {
      const response = await axios.get(`http://localhost:3000/sections?websiteIdea=${idea}`);
      setSections(response.data);
    } catch (err) {
      console.error('Failed to fetch sections:', err);
    }
  };

  const handleSubmit = (newSections: Section[], idea: string) => {
    setSections(newSections);
    setWebsiteIdea(idea);
  };

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Website Idea Generator</h1>
      <IdeaForm onSubmit={handleSubmit} />
      <SectionsPreview sections={sections} />
    </main>
  );
}