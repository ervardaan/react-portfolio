export default function ProjectCard({ title, description, tech, link }) {
  return (
    <article className="p-6 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4 text-sm">{description}</p>
      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-500">{tech?.join(' · ')}</div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm">View</a>
      </div>
    </article>
  )
}
