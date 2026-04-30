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
            title="Coup"
            description="Bot Discord permettant de jouer au jeu de société “Coup” directement sur un serveur. Développé en TypeScript avec Discord.js, il gère les parties, les interactions privées et les commandes utilisateurs. Ce projet m’a permis de découvrir les bots et les systèmes temps réel sur Discord."
            tech={["TypeScript", "MySQL"]}
            github="https://github.com/bmarielou/Chifoumi_bot_discord.git"
            linkedin=""
            pdf="/rapportCoup.pdf"
          />
          <ProjectsCard
            title="F.Y.T"
            description="Plateforme web de billetterie musicale développée en binôme avec un backend Go et un frontend React. Le projet permet la gestion d’utilisateurs, la consultation d’artistes et l’achat de billets. Il inclut une base de données PostgreSQL et une architecture complète d’application web."
            tech={["Go", "PostgreSQL", "Docker", "React", "Tailwind"]}
            github="https://github.com/enzo959/projet_gp_tracker_backend"
            linkedin=""
            pdf="/rapportFYT.pdf"
          />
          <ProjectsCard
            title="Portfolio"
            description="Site personnel développé avec React et Tailwind CSS afin de présenter mes projets et compétences. Il intègre des animations, un système de contact, et le téléchargement de documents. Ce projet m’a permis de renforcer mes compétences frontend et mon utilisation de l’IA dans le développement."
            tech={["React", "Tailwind"]}
            github="https://github.com/enzo959/myPortFolio"
            linkedin=""
            pdf="/rapprtPortfolio.pdf"
          />
          <ProjectsCard
            title="Chat"
            description="Chat de communication"
            tech={["GO", "TCP/IP"]}
            github="https://github.com"
            linkedin=""
            pdf=""
          />
          <ProjectsCard
            title="Connect 4"
            description="Application web du jeu Puissance 4 combinant un backend en Go et un frontend en HTML/CSS. Le serveur gère la logique du jeu et les interactions via des handlers, tandis que l’interface permet une expérience jouable sur navigateur. Projet axé sur la communication frontend/backend."
            tech={["HTML", "CSS", "Go"]}
            github="https://github.com/enzo959/connect4.git"
            linkedin=""
            pdf="/rapportConnect4.pdf"
          />
          <ProjectsCard
            title="Fromboots-to-brass"
            description="Projet scolaire réalisé en Go visant à découvrir le langage et les bases du développement en terminal. Il met en place une logique de jeu simple avec interactions utilisateur et gestion d’entrées/sorties. Ce projet m’a permis de structurer mon code et de comprendre les bases de Go."
            tech={["Go"]}
            github="https://github.com/enzo959/from-boots-to-brass.git"
            linkedin=""
            pdf="/rapportFromBootsToBrass.pdf"
          />

        </div>

      </div>
    </section>
  );
}
