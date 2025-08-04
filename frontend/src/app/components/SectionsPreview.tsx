import { Section } from './IdeaForm';

export default function SectionsPreview({ sections }: { sections: Section[] }) {
  if (!sections.length) return null;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Generated Sections</h2>
      {sections.map((section, index) => (
        <div key={index} className="mb-4 p-4 border rounded">
          <h3 className="text-xl font-semibold">{section.title}</h3>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
}