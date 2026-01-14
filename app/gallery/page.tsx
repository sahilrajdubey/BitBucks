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
          <Masonry
            items={[
              { id: 1, img: 'https://images.unsplash.com/photo-1531297461136-82lw8m2m5-unsplash.jpg', height: 400 },
              { id: 2, img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b', height: 600 },
              { id: 3, img: 'https://images.unsplash.com/photo-1518770660439-4636190af475', height: 300 },
              { id: 4, img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6', height: 500 },
              { id: 5, img: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3', height: 400 },
              { id: 6, img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5', height: 550 },
              { id: 7, img: 'https://images.unsplash.com/photo-1531297461136-82lw8m2m5-unsplash.jpg', height: 400 },
              { id: 8, img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b', height: 600 },
              { id: 9, img: 'https://images.unsplash.com/photo-1518770660439-4636190af475', height: 300 },
              { id: 10, img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6', height: 500 },
              { id: 11, img: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3', height: 400 },
              { id: 12, img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5', height: 550 },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
