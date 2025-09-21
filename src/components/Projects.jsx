import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState(null);

  // Filter projects based on selected tag
  const filteredProjects = selectedTag
    ? projects.filter(p => p.tags.includes(selectedTag))
    : projects;

  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Projects</h2>

      {/* Optional: Show current filter */}
      {selectedTag && (
        <div className="mb-4">
          <span className="text-sm text-gray-500 mr-2">Filtering by:</span>
          <span className="bg-gray-300 text-gray-800 px-2 py-1 rounded cursor-pointer hover:bg-gray-400 transition" onClick={() => setSelectedTag(null)}>
            {selectedTag} ✕
          </span>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map(p => (
          <ProjectCard
            key={p.id}
            {...p}
            onTagClick={tag => setSelectedTag(tag)}
          />
        ))}
      </div>
    </section>
  );
}
