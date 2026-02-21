import MatrixBackground from "./MatrixBackground";
import SkillsCard from "./SkillsCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center bg-slate-900"
    >

      {/* Fond Matrix */}
      <MatrixBackground />

      {/* Contenu au-dessus */}
      <div className="relative z-10 flex flex-col items-center">

        <h2 className="text-4xl font-bold text-white mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <SkillsCard
            logo="../assets/react.svg"
            name="React"
            description="Composants, Hooks, State management"
          />
          <SkillsCard
            logo="../assets/go.png"
            name="Go"
            description="API REST, JWT, PostgreSQL"
          />
          <SkillsCard
            logo="../assets/cors.png"
            name="CORS"
            description="middleware"
          />
          <SkillsCard
            logo="../assets/docker.png"
            name="Docker"
            description="container"
          />
          <SkillsCard
            logo="../assets/postgresql.png"
            name="PostgreSQL"
            description="système de base de données objet-relationnel puissant "
          />
          <SkillsCard
            logo="../assets/jwt.png"
            name="JWT"
            description="middleware d'authentification"
          />
          <SkillsCard
            logo="../assets/java.png"
            name="JAVA"
            description="langage de POO (Programation Orienté Objet)"
          />
          <SkillsCard
            logo="../assets/css.png"
            name="CSS"
            description="langage de présentation"
          />
          <SkillsCard
            logo="../assets/tailwind.png"
            name="Tailwind"
            description="framework de CSS"
          />
          <SkillsCard
            logo="../assets/virtualbox.png"
            name="Virtual Box"
            description="Logiciel de machine virtuelle"
          />
        </div>

      </div>
    </section>
  );
}

