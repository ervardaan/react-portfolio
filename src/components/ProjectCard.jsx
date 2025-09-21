import { motion } from 'framer-motion'

export default function ProjectCard({ id, title, description, tech, link, tags, onTagClick }) {
  const gradients = [
    'from-indigo-500 via-purple-500 to-pink-500',
    'from-sky-500 via-cyan-500 to-emerald-500',
    'from-orange-400 via-red-500 to-pink-600',
    'from-teal-400 via-green-500 to-lime-500',
    'from-fuchsia-500 via-purple-600 to-indigo-600',
    'from-yellow-400 via-orange-500 to-red-500',
  ]

  const gradient = gradients[id % gradients.length]

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`p-6 bg-gradient-to-r ${gradient} text-white rounded-lg shadow`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4 text-sm text-left text-gray-100">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2 text-xs text-gray-200">
          {tech?.map((t, i) => (
            <span key={i} className="bg-black/20 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className="bg-white/20 text-white text-xs px-2 py-1 rounded-full cursor-pointer hover:bg-white/40 transition"
              onClick={() => onTagClick?.(tag)}
            >
              {tag}
            </span>
          ))}
        </div>


        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline text-sm hover:text-gray-200"
        >
          View
        </a>
      </div>
    </motion.article>
  )
}
