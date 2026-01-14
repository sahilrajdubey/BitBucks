export default function Events() {
  return (
    <div className="min-h-screen bg-black">

      <section className="relative min-h-screen pt-32 pb-20 px-6 lg:px-8">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Glassmorphism Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-3"></span>
              <span className="text-gray-400 text-sm font-medium tracking-wide">UPCOMING EVENTS</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
              Tech <span className="text-gray-400">Events</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
              Join us for exciting hackathons, workshops, tech talks, and networking events
              designed to elevate your skills and expand your network.
            </p>
          </div>

          {/* Featured Event */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></span>
              Featured Event
            </h2>
            <div className="group relative">
              <div className="absolute inset-0 bg-white/10 rounded-3xl blur-2xl group-hover:bg-white/15 transition-all duration-500"></div>
              <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300">
                <div className="grid md:grid-cols-2">
                  <div className="p-12">
                    <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white text-sm font-bold mb-6">
                      HACKATHON
                    </div>
                    <h3 className="text-5xl font-black text-white mb-6">TechFest 2026</h3>
                    <p className="text-gray-500 text-lg leading-relaxed mb-8">
                      Join the biggest tech event of the year! 48 hours of non-stop coding,
                      innovation, and collaboration. Build amazing projects, win exciting prizes,
                      and connect with industry leaders.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center text-gray-400">
                        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        February 15-17, 2026
                      </div>
                      <div className="flex items-center text-gray-400">
                        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Tech Campus, Hall A
                      </div>
                      <div className="flex items-center text-gray-400">
                        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        500+ Participants Expected
                      </div>
                    </div>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-semibold hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                      Register Now
                    </button>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-l border-white/10 flex items-center justify-center p-12">
                    <div className="text-9xl">🏆</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events Grid */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">All Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'AI/ML Workshop',
                  date: 'Feb 20, 2026',
                  time: '2:00 PM - 5:00 PM',
                  type: 'Workshop',
                  desc: 'Deep dive into machine learning algorithms and practical implementations.',
                  icon: '🤖'
                },
                {
                  title: 'Web3 Summit',
                  date: 'Mar 5, 2026',
                  time: '10:00 AM - 6:00 PM',
                  type: 'Conference',
                  desc: 'Explore the future of decentralized web and blockchain technology.',
                  icon: '⛓️'
                },
                {
                  title: 'Tech Talk: Cloud Computing',
                  date: 'Mar 12, 2026',
                  time: '4:00 PM - 5:30 PM',
                  type: 'Talk',
                  desc: 'Industry experts share insights on modern cloud architecture.',
                  icon: '☁️'
                },
                {
                  title: 'UI/UX Design Bootcamp',
                  date: 'Mar 18, 2026',
                  time: '1:00 PM - 4:00 PM',
                  type: 'Bootcamp',
                  desc: 'Master the principles of user-centered design and prototyping.',
                  icon: '🎨'
                },
                {
                  title: 'Cybersecurity Workshop',
                  date: 'Mar 25, 2026',
                  time: '3:00 PM - 6:00 PM',
                  type: 'Workshop',
                  desc: 'Learn ethical hacking techniques and security best practices.',
                  icon: '🔒'
                },
                {
                  title: 'Startup Pitch Night',
                  date: 'Apr 2, 2026',
                  time: '6:00 PM - 9:00 PM',
                  type: 'Networking',
                  desc: 'Present your startup ideas to investors and get valuable feedback.',
                  icon: '💼'
                }
              ].map((event, i) => (
                <div key={i} className="group relative">
                  <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:bg-white/10 transition-all duration-500"></div>
                  <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 transform group-hover:scale-105">
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-5xl">{event.icon}</div>
                      <div className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl text-white text-xs font-bold">
                        {event.type}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                    <p className="text-gray-500 mb-6 leading-relaxed">{event.desc}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {event.time}
                      </div>
                    </div>
                    <button className="flex items-center text-white font-medium group-hover:gap-3 gap-2 transition-all">
                      Learn More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
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
