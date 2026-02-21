import MatrixBackground from './MatrixBackground'
import MonCV from '../assets/CvEnzoCourvalet.pdf'

export default function Accueil() {
  return (
    <section
      id="accueil"
      className="relative h-screen grid grid-cols-2 items-center bg-linear-to-r from-blue-600 to-violet-200 overflow-hidden px-16"
    >
      <MatrixBackground />

      {/* ===== Colonne gauche (Photo + métier) ===== */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          src="src/assets/moi.jpg"
          alt="Photo de profil"
          className="w-125 h-125 rounded-full border-4 border-purple-400 shadow-lg mb-6"
        />

        <p className="text-xl text-purple-200 text-center">
          Developper Web / Cybersécurité / Nouvelle technologie
        </p>
      </div>

      {/* ===== Colonne droite (Texte + bouton) ===== */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6">

        <h1 className="text-5xl font-bold text-purple-200">
          Bienvenue sur mon portfolio.
        </h1>

        <a
          href={MonCV}
          download
          className="w-fit bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition"
        >
          Télécharger le CV
        </a>

      </div>
    </section>
  );
}
