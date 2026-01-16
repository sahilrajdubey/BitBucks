'use client';
import { useState } from 'react';
import TiltedCard from '../../components/TiltedCard';

export default function Team() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  type TeamName = 'Technical' | 'Social Media' | 'PR & Marketing' | 'Event Management' | 'Creative';
  const [activeTeam, setActiveTeam] = useState<TeamName>('Technical');

  const teams: TeamName[] = [
    'Technical', 'Social Media', 'PR & Marketing', 'Event Management', 'Creative'
  ];

  const coreMembers: Record<TeamName, string[]> = {
    Technical: ['', '', '', ''],
    'Social Media': ['', '', '', ''],
    'PR & Marketing': ['', '', '', ''],
    'Event Management': ['', '', '', ''],
    Creative: ['', '', '', '']
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen pt-32 pb-20 px-6 lg:px-8">

        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl opacity-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto space-y-24">

          {/* Section 1: Faculty Coordinator */}
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter">
              Faculty <span className="text-gray-400">Coordinator</span>
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12 justify-items-center max-w-4xl mx-auto">
            {/* First Faculty Coordinator Card */}
            <div className="w-[320px] h-[320px]">
              <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop&crop=faces"
                altText="Faculty Coordinator"
                containerHeight="320px"
                containerWidth="320px"
                imageHeight="320px"
                imageWidth="320px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <div
                    className="relative rounded-[15px] overflow-hidden"
                    style={{ width: '320px', height: '320px' }}
                  >
                    <div className="absolute bottom-0 left-0 w-full px-6 py-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent text-center">
                      <h3 className="text-xl font-bold text-white mb-1">
                        Ms.Anjali Malik
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-green-400 font-medium">
                        Faculty Coordinator
                      </p>
                    </div>
                  </div>
                }
              />
            </div>

            {/* Second Faculty Coordinator Card */}
            <div className="w-[320px] h-[320px]">
              <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop&crop=faces"
                altText="Faculty Coordinator"
                containerHeight="320px"
                containerWidth="320px"
                imageHeight="320px"
                imageWidth="320px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <div
                    className="relative rounded-[15px] overflow-hidden"
                    style={{ width: '320px', height: '320px' }}
                  >
                    <div className="absolute bottom-0 left-0 w-full px-6 py-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent text-center">
                      <h3 className="text-xl font-bold text-white mb-1">
                        Dr.Karuna
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-green-400 font-medium">
                        Faculty Coordinator
                      </p>
                    </div>
                  </div>
                }
              />
            </div>
          </div>


          {/* Section 2: Title */}
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter">
              Our <span className="text-gray-400">Team</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              The visionaries and creators behind BitBucks.
            </p>
          </div>

          {/* Section 3: President & VP */}
          <div className="grid md:grid-cols-2 gap-12 justify-items-center max-w-4xl mx-auto">
            <div className="w-[320px] h-[320px]">
              <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop&crop=faces"
                altText="President"

                containerHeight="320px"
                containerWidth="320px"
                imageHeight="320px"
                imageWidth="320px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <div
                    className="relative rounded-[15px] overflow-hidden"
                    style={{ width: '320px', height: '320px' }}
                  >
                    <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                      <h3 className="text-xl font-bold text-white mb-1">Sahil Raj Dubey</h3>
                      <p className="text-xs uppercase tracking-widest text-gray-400 font-medium">President</p>
                    </div>
                  </div>
                }
              />
            </div>
            <div className="w-[320px] h-[320px]">
              <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop&crop=faces"
                altText="Vice President"

                containerHeight="320px"
                containerWidth="320px"
                imageHeight="320px"
                imageWidth="320px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <div
                    className="relative rounded-[15px] overflow-hidden"
                    style={{ width: '320px', height: '320px' }}
                  >
                    <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                      <h3 className="text-xl font-bold text-white mb-1">Ayaan Mirza Baig</h3>
                      <p className="text-xs uppercase tracking-widest text-gray-400 font-medium">Vice President</p>
                    </div>
                  </div>
                }
              />
            </div>
          </div>

          {/* Section 4: Leads (2 rows of 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center max-w-6xl mx-auto">
            {[
              { name: 'Ayush Dwivedi', role: 'Technical Lead', img: '/tech-lead.jpg' },
              { name: 'Pratik Singh', role: 'Social Media Lead', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956' },
              { name: 'Rashi Gupta ', role: 'PR and Marketing Lead', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d' },
              { name: 'Anushka Sharma', role: 'event management Lead', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb' },
              { name: 'Shikha Sharma', role: 'Creative Lead', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e' },

            ].map((lead, i) => (
              <div key={i} className="w-[320px] h-[320px]">
                <TiltedCard
                  imageSrc={`${lead.img}?q=80&w=800&auto=format&fit=crop&crop=faces`}
                  altText={lead.name}

                  containerHeight="320px"
                  containerWidth="320px"
                  imageHeight="320px"
                  imageWidth="320px"
                  rotateAmplitude={10}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <div
                      className="relative rounded-[15px] overflow-hidden"
                      style={{ width: '320px', height: '320px' }}
                    >
                      <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                        <h3 className="text-xl font-bold text-white mb-1">{lead.name}</h3>
                        <p className="text-xs uppercase tracking-widest text-gray-400 font-medium">{lead.role}</p>
                      </div>
                    </div>
                  }
                />
              </div>
            ))}
          </div>

          {/* Section 5: Core Members Drawer Trigger */}
          <div className="flex justify-center pt-12 pb-24">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="group relative px-12 py-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/5 blur-xl group-hover:bg-white/10 transition-all duration-500"></div>
              <span className="relative z-10 text-xl font-bold text-white tracking-widest uppercase">
                View All Core Members
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* Drawer Overlay */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsDrawerOpen(false)}
          ></div>

          <div className="absolute inset-y-0 right-0 max-w-2xl w-full bg-[#0a0a0a] border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col">

            {/* Drawer Header */}
            <div className="p-8 border-b border-white/10 flex justify-between items-center bg-black/50">
              <h2 className="text-3xl font-bold text-white">Core Members</h2>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-8">
              {/* Team Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {teams.map((team) => (
                  <button
                    key={team}
                    onClick={() => setActiveTeam(team)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeTeam === team
                      ? 'bg-white text-black'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                      }`}
                  >
                    {team}
                  </button>
                ))}
              </div>

              {/* Members Grid */}
              <div className="grid grid-cols-2 gap-4">
                {coreMembers[activeTeam].map((member, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-sm font-bold border border-white/10">
                      {member.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{member}</h4>
                      <p className="text-gray-500 text-xs">{activeTeam} Team</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>

  );
}
