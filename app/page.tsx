import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black opacity-100">
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Glassmorphism Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
          <div className="space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/5">

            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter">
              Welcome to
              <span className="block mt-4 text-gray-400">BitBucks</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
              Join the elite community of innovators, developers, and tech enthusiasts
              shaping the future of technology.
            </p>

            {/* CTA Button */}
            <div className="flex items-center justify-center pt-8">
              <Link href="/about" className="group relative px-10 py-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white font-semibold text-lg hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center">
                  Get Started
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>


      </section>
    </div>
  );
}
