import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(p => <ProjectCard key={p.id} {...p} />)}
      </div>
    </section>
  )
}
