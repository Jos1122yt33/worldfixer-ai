'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-900 to-emerald-950 text-white">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-6xl font-bold mb-4">🌍 WorldFixer AI</h1>
        <p className="text-2xl mb-8">Your personal coach for a better planet and secure future</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur">
            <h2 className="text-3xl mb-4">📉 Carbon Tracker</h2>
            <p className="text-xl">Log daily activities • Get AI insights</p>
          </div>
          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur">
            <h2 className="text-3xl mb-4">💰 Economic Coach</h2>
            <p className="text-xl">Budget tips • Skill-up for green jobs</p>
          </div>
        </div>

        <div className="mt-12">
          <a href="https://github.com/codespaces/new?repo=Jos1122yt33/worldfixer-ai" target="_blank" 
             className="inline-block bg-white text-black px-10 py-4 rounded-full text-xl font-semibold hover:bg-emerald-400 transition">
            🚀 Open in GitHub Codespace
          </a>
        </div>
      </div>
    </main>
  );
}