import MatrixBackground from './MatrixBackground'
import ProjectsCard from "./ProjectsCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center bg-linear-to-r from-blue-600 to-violet-200 overflow-hidden py-20"
    >
        <MatrixBackground />
        <div className="relative z-10 w-full max-w-6xl px-6">

        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Projets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

          <ProjectsCard
            title="GP Tracker"
            description="API REST en Go avec JWT et PostgreSQL."
            tech={["Go", "PostgreSQL", "Docker"]}
            github="https://github.com/..."
          />

          <ProjectsCard
            title="Portfolio React"
            description="Portfolio moderne avec animations et effet Matrix."
            tech={["React", "Tailwind"]}
            github="https://github.com/..."
          />
          <ProjectsCard
            title="Portfolio React"
            description="Portfolio moderne avec animations et effet Matrix."
            tech={["React", "Tailwind"]}
            github="https://github.com/..."
          />
          <ProjectsCard
            title="Portfolio React"
            description="Portfolio moderne avec animations et effet Matrix."
            tech={["React", "Tailwind"]}
            github="https://github.com/..."
          />
          <ProjectsCard
            title="Portfolio React"
            description="Portfolio moderne avec animations et effet Matrix."
            tech={["React", "Tailwind"]}
            github="https://github.com/..."
          />

        </div>

      </div>
    </section>
  );
}
