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
            title="F.Y.T"
            description="Site de vente de place d'événements."
            tech={["Go", "PostgreSQL", "Docker", "React", "Tailwind"]}
            github="https://github.com/enzo959/projet_gp_tracker_backend"
            linkedin="httpifhzri"
            pdf=""
          />

          <ProjectsCard
            title="Portfolio React"
            description="Mon portfolio thème 'Cyber'"
            tech={["React", "Tailwind"]}
            github="https://github.com/enzo959/myPortFolio"
            linkedin=""
            pdf=""
          />
          <ProjectsCard
            title="TCP/IP"
            description="Chat de communication"
            tech={["GO", "TCP/IP"]}
            github="https://github.com"
            linkedin="erojfefjrefjz"
            pdf=""
          />
          <ProjectsCard
            title="YLink"
            description="Platforme de mise en relation, recherche d'emploi/client."
            tech={["GO", "Postgresql", "Docker", "React", "Tailwind"]}
            github="https://github.com/enzo959/projet_ydays_backend"
            linkedin=""
            pdf=""
          />
          <ProjectsCard
            title="Projet Puissance 4"
            description="Jeu du 'puissance 4' classqiue. En solo ou à deux."
            tech={["HTML", "CSS", "JS"]}
            github="https://github.com/..."
            linkedin=""
            pdf=""
          />

        </div>

      </div>
    </section>
  );
}
