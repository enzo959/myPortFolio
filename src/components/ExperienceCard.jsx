import { useState } from "react";

export default function ExperienceCard({ title, duration, description }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-72 h-48 group perspective-1000 cursor-pointer m-4"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Face avant */}
        <div className="absolute w-full h-full backface-hidden bg-blue-900 text-purple-400 flex flex-col justify-center items-center p-4 rounded-lg shadow-lg border border-purple-500">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-2">{duration}</p>
        </div>

        {/* Face arrière */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-purple-900 text-white flex justify-center items-center p-4 rounded-lg shadow-lg border border-purple-400">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
