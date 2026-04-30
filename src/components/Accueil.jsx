import MatrixBackground from './MatrixBackground'
import { images } from "../constants/images";

export default function Accueil() {
  const postes = [
          "Technicien systèmes et réseaux",
          "Administrateur systèmes et réseaux",
          "Technicien support / Helpdesk",
          "Technicien de maintenance informatique",
          "Gestionnaire de parc informatique",
          "Technicien réseau & télécoms",
          "Technicien infrastructure",
          "Analyste d’exploitation informatique",
          "Pilote d’exploitation informatique",
          "Responsable d’exploitation informatique",
          "Technicien cybersécurité",
          "Analyste SOC junior",
          "Administrateur sécurité informatique",
          "Webmaster",
          "Technicien support applicatif",
          "DevOps / Cloud junior",
          "Technicien virtualisation / stockage",
          "IT consultant / Assistant consultant"
        ];
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col md:grid md:grid-cols-2 items-center bg-linear-to-r from-blue-600 to-violet-200 overflow-hidden px-6 md:px-16 py-20"
    >
      <MatrixBackground />

      {/* ===== Colonne gauche ===== */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={images.moi}
          alt="Photo de profil"
          className="w-48 h-48 md:w-125 md:h-125 rounded-full border-4 border-purple-400 shadow-lg mb-6 object-cover"
        />

        <p className="text-base md:text-xl text-purple-200 text-center max-w-xs md:max-w-none">
          Dev Web / Cybersecurite / Recherche d'alternance.
        </p>
      </div>

      {/* ===== Colonne droite ===== */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6">

        {/* Titre remonté */}
        <h1 className="text-3xl md:text-5xl font-bold text-purple-200 mb-4">
          Bienvenue sur mon portfolio
        </h1>

        {/* Zone description scrollable */}
        <div className="w-full max-w-xl bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
          <div className="text-left text-purple-100 text-sm md:text-base max-h-82 overflow-y-auto pr-2">
            <div className="space-y-4">
              
              <p>
              Je m'appelle Enzo Courvalet. Je suis étudiant en première année de Bachelor informatique.
              </p>

              <p>
              Je recherche une alternance pour septembre 2026 afin d'effectuer un BTS SIO option SISR.
              </p>

              <p>
              Actuellement chez Ynov Campus (Rennes), 
              j'aimerais intégrer une formation en alternance qui me rapprocherait du monde professionnel et
               élargirait mon horizon d'expérience.
              </p>
              <p>
                Si vous voulez en savoir plus sur mon parcours, n'hésitez pas à naviguer sur ce portfolio ! 
              </p>
              <p>
                Ci-dessous une partie des postes auxquels je postule. 
                Je suis ouvert à toute proposition, quelle qu'elle soit. N'hésitez pas à me contacter!
              </p>

              <ul className="list-disc pl-5 space-y-1">
                {postes.map((poste, index) => (
                  <li key={index}>{poste}</li>
                ))}
              </ul>

            </div>
          </div>
        </div>

        {/* Boutons alignés */}
        <div className="w-full max-w-xl flex flex-wrap gap-4 justify-center pt-4">

          <a
            href="CvEnzoCourvalet.pdf"
            download
            className="flex-1 min-w-45 text-center bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition"
          >
            CV
          </a>

          <a
            href="https://www.linkedin.com/in/courvaletenzo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-45 text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/enzo959"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-45 text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition"
          >
            GitHub
          </a>

        </div>
      </div>
    </section>
  );
}
