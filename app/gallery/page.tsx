'use client';
import Masonry from '../../components/Masonry';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative min-h-screen pt-32 pb-20 px-6 lg:px-8">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Glassmorphism Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full h-full min-h-[80vh]">
          {/* Gallery Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter">
              Our <span className="text-gray-400">Gallery</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Capturing moments and memories from our journey.
            </p>
          </div>

          <Masonry
            items={[]}
          />
        </div>
      </section>
    </div>
  );
}
