export default function ProjectCard({ title, description, tech, github }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2">

      <h3 className="text-2xl font-bold text-white mb-3">
        {title}
      </h3>

      <p className="text-gray-400 mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="bg-purple-600/20 text-white px-3 py-1 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-700 hover:underline"
      >
        Voir sur GitHub →
      </a>

    </div>
  );
}
