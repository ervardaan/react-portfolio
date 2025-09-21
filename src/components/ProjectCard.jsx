export default function ProjectCard({ title, description, tech, link }) {
  return (
    <article className="p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4 text-sm text-gray-100">{description}</p>
      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-200">{tech?.join(' · ')}</div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline text-sm hover:text-gray-200"
        >
          GitHub
        </a>
      </div>
    </article>
  )
}

