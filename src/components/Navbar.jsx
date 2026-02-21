export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-black/50 backdrop-blur-sm py-4">
      <ul className="flex justify-center gap-8 text-purple-200 font-bold">
        <li>
          <a href="#accueil" className="hover:text-purple-400">Accueil</a>
        </li>
        <li>
          <a href="#experience" className="hover:text-purple-400">Expérience</a>
        </li>
        <li>
          <a href="#skills" className="hover:text-purple-400">Skills</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
