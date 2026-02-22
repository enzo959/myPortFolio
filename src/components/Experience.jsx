import ExperienceCard from "./ExperienceCard";
import MatrixBackground from "./MatrixBackground";


export default function Experience() {
  return (
    <section 
        id="experience" 
        className="relative min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-blue-900 to-violet-900 px-6 py-20"
    >  

            <MatrixBackground />

            <h2 className="relative z-10 text-4xl font-bold text-white text-center mb-16">
                Formation
            </h2>

            <div className="relative z-10 flex flex-wrap justify-center gap-6 max-w-6xl">
                <ExperienceCard
                    title="Lycée Notre Dame"
                    duration="Sep 2022 - Juin 2025"
                    description="Spé Math, NSI, SES en ppemière, Spé Math et NSI en Terminal, Option Sport de la Seconde à la Terminal et Option Math Experte en Terminal"
                />
                <ExperienceCard
                    title="Bachelor 1 informatique"
                    duration="Sep 2025 - juin 2026"
                    description="Developpement Web, Cybersecurité"
                />
                <ExperienceCard
                    title="Bachelor 1 informatique"
                    duration="Sep 2025 - juin 2026"
                    description="Developpement Web, Cybersecurité"
                />
                <ExperienceCard
                    title="Bachelor 1 informatique"
                    duration="Sep 2025 - juin 2026"
                    description="Developpement Web, Cybersecurité"
                />
                <ExperienceCard
                    title="Bachelor 1 informatique"
                    duration="Sep 2025 - juin 2026"
                    description="Developpement Web, Cybersecurité"
                />
                <ExperienceCard
                    title="Bachelor 1 informatique"
                    duration="Sep 2025 - juin 2026"
                    description="Developpement Web, Cybersecurité"
                />
            </div>
    </section>
  );
}

