import MatrixBackground from "./MatrixBackground";
import SkillsCard from "./SkillsCard";
import { images } from "../constants/images";

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
            logo={images.react}
            name="React"
            description="Composants, Hooks, State management"
          />
          <SkillsCard
            logo={images.go}
            name="Go"
            description="API REST, JWT, PostgreSQL"
          />
          <SkillsCard
            logo={images.cors}
            name="CORS"
            description="middleware"
          />
          <SkillsCard
            logo={images.docker}
            name="Docker"
            description="container"
          />
          <SkillsCard
            logo={images.postgresql}
            name="PostgreSQL"
            description="système de base de données objet-relationnel puissant "
          />
          <SkillsCard
            logo={images.jwt}
            name="JWT"
            description="middleware d'authentification"
          />
          <SkillsCard
            logo={images.java}
            name="JAVA"
            description="langage de POO (Programation Orienté Objet)"
          />
          <SkillsCard
            logo={images.css}
            name="CSS"
            description="langage de présentation"
          />
          <SkillsCard
            logo={images.tailwind}
            name="Tailwind"
            description="framework de CSS"
          />
          <SkillsCard
            logo={images.virtualbox}
            name="Virtual Box"
            description="Logiciel de machine virtuelle"
          />
        </div>

      </div>
    </section>
  );
}

