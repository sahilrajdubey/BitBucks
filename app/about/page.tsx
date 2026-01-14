export default function About() {
  return (
    <div className="min-h-screen bg-black">

      <section className="relative min-h-screen pt-32 pb-20 px-6 lg:px-8">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Glassmorphism Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8">
              <span className="text-gray-400 text-sm font-medium tracking-wide">WHO WE ARE</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
              About <span className="text-gray-400">Us</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
              We're a passionate community of innovators, developers, and tech enthusiasts
              dedicated to pushing the boundaries of technology and fostering excellence.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="group relative">
              <div className="absolute inset-0 bg-white/5 rounded-3xl blur-xl group-hover:bg-white/10 transition-all duration-500"></div>
              <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 hover:border-white/20 transition-all duration-300">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
                <p className="text-gray-500 leading-relaxed text-lg">
                  To create an inclusive ecosystem where technology enthusiasts can learn,
                  collaborate, and innovate together. We strive to bridge the gap between
                  theoretical knowledge and practical application through hands-on experiences.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-white/5 rounded-3xl blur-xl group-hover:bg-white/10 transition-all duration-500"></div>
              <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 hover:border-white/20 transition-all duration-300">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
                <p className="text-gray-500 leading-relaxed text-lg">
                  To be the leading tech community that empowers the next generation of
                  innovators and thought leaders. We envision a future where technology
                  serves as a catalyst for positive change and endless possibilities.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-16 text-center">
              Our <span className="text-gray-400">Values</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '💡',
                  title: 'Innovation',
                  desc: 'We constantly explore new ideas and cutting-edge technologies to stay ahead of the curve.'
                },
                {
                  icon: '🤝',
                  title: 'Collaboration',
                  desc: 'We believe in the power of teamwork and collective intelligence to solve complex problems.'
                },
                {
                  icon: '📚',
                  title: 'Learning',
                  desc: 'We foster a culture of continuous learning and knowledge sharing among our members.'
                },
                {
                  icon: '🌟',
                  title: 'Excellence',
                  desc: 'We maintain high standards in everything we do, from events to projects and beyond.'
                },
                {
                  icon: '🌍',
                  title: 'Impact',
                  desc: 'We focus on creating solutions that make a meaningful difference in our community.'
                },
                {
                  icon: '🔓',
                  title: 'Openness',
                  desc: 'We embrace diversity and welcome everyone who shares our passion for technology.'
                }
              ].map((value, i) => (
                <div key={i} className="group relative">
                  <div className="absolute inset-0 bg-white/5 rounded-2xl blur-lg group-hover:bg-white/10 transition-all duration-500"></div>
                  <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 transform group-hover:scale-105">
                    <div className="text-5xl mb-4">{value.icon}</div>
                    <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
