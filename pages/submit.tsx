import { useState } from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Submit() {
  const [form, setForm] = useState({
    name: "", company: "", born: "", died: "", category: "", causeOfDeath: "", ripQuote: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Submit a Death | AI Model Graveyard</title>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=IBM+Plex+Mono:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-grave-bg text-grave-white">
        <Navbar />

        <div className="max-w-2xl mx-auto px-4 pt-28 pb-20">
          <div className="text-center mb-10">
            <div className="text-6xl mb-4">📝</div>
            <h1 className="font-heading text-4xl text-grave-white mb-2">
              Report a <span className="text-red-400">Death</span>
            </h1>
            <p className="font-body text-grave-gray text-sm">
              Know an AI tool that died? Submit it to the graveyard. We verify and add it within 48 hours.
            </p>
          </div>

          {submitted ? (
            <div className="bg-grave-card border border-grave-green rounded-2xl p-10 text-center">
              <div className="text-6xl mb-4">🪦</div>
              <h2 className="font-heading text-2xl text-grave-green mb-2">Death Reported</h2>
              <p className="font-body text-grave-gray">
                Thank you. We&apos;ll verify and add it to the graveyard soon. R.I.P. 🕯️
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name:"",company:"",born:"",died:"",category:"",causeOfDeath:"",ripQuote:"" }); }}
                className="mt-6 font-body text-sm text-grave-green hover:underline"
              >
                Submit another →
              </button>
            </div>
          ) : (
            <div className="bg-grave-card border border-grave-border rounded-2xl p-8">
              <div className="space-y-5">
                {[
                  { name: "name", label: "AI Tool Name *", placeholder: "e.g. Google Duplex" },
                  { name: "company", label: "Company *", placeholder: "e.g. Google" },
                  { name: "born", label: "Launch Year *", placeholder: "e.g. 2019" },
                  { name: "died", label: "Death Year *", placeholder: "e.g. 2023" },
                  { name: "category", label: "Category", placeholder: "e.g. Voice AI, Image AI..." },
                ].map(field => (
                  <div key={field.name}>
                    <label className="font-body text-grave-gray text-sm block mb-1">{field.label}</label>
                    <input
                      type="text"
                      name={field.name}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full bg-grave-bg border border-grave-border rounded-xl px-4 py-3 font-body text-grave-white placeholder-grave-gray focus:outline-none focus:border-grave-green transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label className="font-body text-grave-gray text-sm block mb-1">Cause of Death *</label>
                  <textarea
                    name="causeOfDeath"
                    value={form.causeOfDeath}
                    onChange={handleChange}
                    placeholder="Why was it shut down? What happened?"
                    rows={3}
                    className="w-full bg-grave-bg border border-grave-border rounded-xl px-4 py-3 font-body text-grave-white placeholder-grave-gray focus:outline-none focus:border-grave-green transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="font-body text-grave-gray text-sm block mb-1">R.I.P. Quote (optional)</label>
                  <input
                    type="text"
                    name="ripQuote"
                    value={form.ripQuote}
                    onChange={handleChange}
                    placeholder="A memorable quote or tribute..."
                    className="w-full bg-grave-bg border border-grave-border rounded-xl px-4 py-3 font-body text-grave-white placeholder-grave-gray focus:outline-none focus:border-grave-green transition-colors"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!form.name || !form.company || !form.born || !form.died || !form.causeOfDeath}
                  className="w-full bg-grave-green text-black font-body font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  🪦 Submit to the Graveyard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
