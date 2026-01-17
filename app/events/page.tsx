export default function Events() {
  return (
    <div className="min-h-screen bg-black">

      <section className="relative min-h-screen pt-32 pb-20 px-6 lg:px-8 flex items-center justify-center">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Glassmorphism Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Header */}
          <h1 className="text-6xl md:text-8xl font-black text-gray-400 mb-6 tracking-tighter">
            Events
          </h1>
          <p className="text-xl text-gray-500 font-light">
            Stay tuned for upcoming events
          </p>
        </div>
      </section>

    </div>
  );
}
