export default function SkillsCard({ logo, name, description }) {
  return (
    <div className="group relative w-40 h-40 bg-slate-800 rounded-xl flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-slate-700 cursor-pointer">
      
      {/* Logo */}
      <img src={logo} alt={name} className="w-22 h-22 " />

      {/* Nom (apparait au hover) */}
      <h3 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {name}
      </h3>

      {/* Description (slide up) */}
      <p className="text-xs text-gray-400 text-center px-2 mt-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        {description}
      </p>

    </div>
  );
}
