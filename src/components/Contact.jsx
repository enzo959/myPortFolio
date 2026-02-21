import { useState } from "react";

export default function Contact() {

  const [status, setStatus] = useState("");

  return (
    <section
      id="contact"
      className="relative h-screen flex flex-wrap justify-center items-center bg-linear-to-r from-blue-900 to-violet-900"
    >

    <MatrixBackground />
      <div className="relative z-10 flex flex-col items-center w-full">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Contact
        </h2>

        <form
          action="https://formspree.io/f/mdkvrzzo"
          method="POST"
          className="w-full max-w-6xl space-y-6 mx-auto"
        >

          {/* Nom */}
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <label className="text-white block mb-2">Nom</label>
            <input
              type="text"
              name="nom"
              required
              className="w-full p-5 rounded-lg bg-slate-900 text-white border border-slate-700 focus:border-purple-500 outline-none"
            />
          </div>

          {/* Email */}
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <label className="text-white block mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-5 rounded-lg bg-slate-900 text-white border border-slate-700 focus:border-purple-500 outline-none"
            />
          </div>

          {/* Message */}
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <label className="text-white block mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-5 rounded-lg bg-slate-900 text-white border border-slate-700 focus:border-purple-500 outline-none"
            />
          </div>

          {/* Honeypot */}
          <input type="text" name="_gotcha" className="hidden" />

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition"
          >
            Envoyer
          </button>

        </form>
      </div>

      {status && (
        <p className="text-green-400 text-center mt-4">
          {status}
        </p>
      )}
    </section>
  );
}
