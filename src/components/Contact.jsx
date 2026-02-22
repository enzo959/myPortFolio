import { useState } from "react";
import MatrixBackground from "./MatrixBackground";

export default function Contact() {

  const [status, setStatus] = useState("");

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-linear-to-r from-blue-900 to-violet-900 px-6 py-20"
    >

    <MatrixBackground />

      <div className="relative z-10 flex flex-col items-center w-full">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Contact
        </h2>

        <form
          action="https://formspree.io/f/mdkvrzzo"
          method="POST"
          className="w-full max-w-lg space-y-6 mx-auto"
        >

          {/* Nom */}
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <label className="text-white block mb-2">git init (Prénom et Nom)</label>
            <input
              type="text"
              name="nom"
              required
              className="w-full p-4 md:p-5 rounded-lg bg-slate-900 text-white border border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 outline-none transition"
            />
          </div>

          {/* Email */}
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <label className="text-white block mb-2">git add (Email)</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-4 md:p-5 rounded-lg bg-slate-900 text-white border border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 outline-none transition"
            />
          </div>

          {/* Message */}
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <label className="text-white block mb-2">git commit (message)</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-4 md:p-5 rounded-lg bg-slate-900 text-white border border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 outline-none transition resize-none"
            />
          </div>

          {/* Honeypot */}
          <input type="text" name="_gotcha" className="hidden" />

          <button
            type="submit"
            className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            git push (envoyé)
          </button>

        </form>
      </div>

      {status && (
        <div className="mt-6 flex justify-center">
          <p className="px-6 py-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-center text-sm md:text-base shadow-md animate-fadeIn">
            {status}
          </p>
        </div>
)}
    </section>
  );
}
