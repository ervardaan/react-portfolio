import { motion } from "framer-motion";

export default function ExperienceCard({ title, org, location, dates, description, tech, link, logo }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        {/* Left: Bulleted content */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          {org && <div className="text-sm text-gray-200 mb-1">{org}</div>}
          {location && <div className="text-sm text-gray-200 mb-2">{location}</div>}
          {dates && <div className="text-sm text-gray-200 mb-4">{dates.join(" • ")}</div>}

          <ul className="mb-4 list-disc list-inside text-sm text-left text-gray-100 space-y-1">
            {description?.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>

          {tech && (
            <div className="flex flex-wrap gap-2 text-xs text-gray-200 mb-2">
              {tech.map((t, i) => (
                <span key={i} className="bg-black/20 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          )}

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline text-sm hover:text-gray-200"
            >
              GitHub
            </a>
          )}
        </div>

        {/* Right: Logo */}
        {logo && (
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt={`${title} logo`}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-white"
            />
          </div>
        )}
      </div>
    </motion.article>
  );
}
