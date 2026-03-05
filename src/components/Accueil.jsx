import MatrixBackground from './MatrixBackground'
import MonCV from '../assets/CvEnzoCourvalet.pdf'
import { images } from "../constants/images";

export default function Accueil() {
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
          Bienvenue sur mon portfolio.
        </h1>

        {/* Zone description scrollable */}
        <div className="w-full max-w-xl bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
          <div className="text-purple-100 text-sm md:text-base max-h-64 overflow-y-auto pr-2">
            <p className="mb-4">
              👋 Présentation rapide — ici tu peux mettre une longue description de toi.
            </p>

            <p className="mb-4">
              Explique ton parcours, tes compétences, tes projets, et surtout ta recherche d’alternance.
            </p>

            <p className="mb-4">
              Tu peux parler de ton BTS SIO, de tes compétences en développement web,
              cybersécurité, et de tes objectifs professionnels.
            </p>

            <p>
              Ajoute autant de texte que tu veux — la zone devient scrollable automatiquement.
            </p>
          </div>
        </div>

        {/* Boutons alignés */}
        <div className="w-full max-w-xl flex flex-wrap gap-4 justify-center pt-4">

          <a
            href={MonCV}
            download
            className="flex-1 min-w-45 text-center bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition"
          >
            Télécharger le CV
          </a>

          <a
            href="https://www.linkedin.com/in/courvaletenzo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-45 text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition"
          >
            Voir mon LinkedIn
          </a>

          <a
            href="https://github.com/enzo959"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-45 text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition"
          >
            Voir mon GitHub
          </a>

        </div>
      </div>
    </section>
  );
}
