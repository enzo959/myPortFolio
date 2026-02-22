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

      {/* ===== Colonne gauche (Photo + métier) ===== */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={images.moi}
          alt="Photo de profil"
          className="w-48 h-48 md:w-125 md:h-125 rounded-full border-4 border-purple-400 shadow-lg mb-6 object-cover"
        />

        <p className="text-base md:text-xl text-purple-200 text-center max-w-xs md:max-w-none">
          Developper Web / Cybersécurité / Nouvelle technologie
        </p>
      </div>

      {/* ===== Colonne droite (Texte + bouton) ===== */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 mt-12 md:mt-0">

        <h1 className="text-3xl md:text-5xl font-bold text-purple-200">
          Bienvenue sur mon portfolio.
        </h1>

        <a
          href={MonCV}
          download
          className="w-full md:w-fit bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition"
        >
          Télécharger le CV
        </a>

      </div>
    </section>
  );
}
