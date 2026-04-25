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
                    title="Bachelor 1 informatique"
                    duration="2025 - 2026"
                    description="Étudiant avec une option cybersécurité, j'ai acquis des bases solides grâce à la réalisation de projets concrets."
                />
                <ExperienceCard
                    title="Réserviste Opérationel"
                    duration="2024 - actuellement"
                    description="Je suis actuellement engagé, sur mon temps libre, en tant que soldat dans l’Armée de Terre, où j’effectue toutes les missions qui me sont attribuées."
                />
                <ExperienceCard
                    title="Employé polyvalant, Mcdonald's"
                    duration="2025 - actuellement"
                    description="Je suis actuellement employé polyvalent et je réalise des tâches comme la cuisine, le service à table et la prise de commandes."
                />
                <ExperienceCard
                    title="Lycée Notre Dame"
                    duration="2022 - 2025"
                    description="Spécialités : Mathématiques, NSI (programmation Python), SES, option sport et option math experte."
                />
            </div>
    </section>
  );
}

