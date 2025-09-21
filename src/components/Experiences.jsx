import { experiences } from '../data/experiences'
import ExperienceCard from './ExperienceCard'

export default function Experiences() {
  return (
    <section id="experiences" className="py-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Experiences</h2>
      <div className="grid gap-6 lg:grid-cols-1">
        {experiences.map(p => <ExperienceCard key={p.id} {...p} />)}
      </div>
    </section>
  )
}