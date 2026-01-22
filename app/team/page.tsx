'use client';
import { useState } from 'react';
import TiltedCard from '../../components/TiltedCard';
import LetterGlitch from '../../components/LetterGlitch';

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
    <div className="min-h-screen bg-black text-white relative">
      {/* LetterGlitch Background */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <LetterGlitch
          glitchSpeed={70}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      <section className="relative min-h-screen pt-32 pb-20 px-6 lg:px-8 z-10">

        <div className="relative z-10 max-w-7xl mx-auto space-y-24">

          {/* Section 1: Faculty Coordinator */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter 
            ">
              Faculty <span className="text-gray-400">Coordinator</span>
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 justify-items-center max-w-4xl mx-auto">
            {/* First Faculty Coordinator Card */}
            <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-square mx-auto">
              <TiltedCard
                imageSrc="/anjalimalik.jpg"
                name="Ms.Anjali Malik"
                role="Faculty Coordinator"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
              />
            </div>

            {/* Second Faculty Coordinator Card */}
            <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-square mx-auto">
              <TiltedCard
                imageSrc="/karunaguptacoordinator.jpg"
                name="Dr.Karuna Gupta"
                role="Faculty Coordinator"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
              />
            </div>
          </div>



          {/* Section 2: Title */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter ">
              Our <span className="text-gray-400">Team</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto font-light">
              The visionaries and creators behind BitBucks.
            </p>
          </div>

          {/* Section 3: President & VP */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 justify-items-center max-w-4xl mx-auto">
            <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-square mx-auto">
              <TiltedCard
                imageSrc="/sahilrajdubey.png"
                name="Sahil Raj Dubey"
                role="President"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
              />
            </div>
            <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-square mx-auto">
              <TiltedCard
                imageSrc="/ayaanmirzabaig.jpg"
                name="Ayaan Mirza Baig"
                role="Vice President"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
              />
            </div>
          </div>

          {/* Section 4: Leads (2 rows of 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center max-w-6xl mx-auto">
            {[
              { name: 'Ayush Dwivedi', role: 'Technical Lead', img: '/tech-lead.jpg' },
              { name: 'Pratik Raj', role: 'Social Media Lead', img: '/pratikraj.jpeg' },
              { name: 'Rashi Gupta ', role: 'PR and Marketing Lead', img: '/rashigupta.jpg' },
              { name: 'Anushka Sharma', role: 'event management Lead', img: '/anushkasharma.jpeg' },
              { name: 'Shikha Sharma', role: 'Creative Lead', img: '/shikhasharma.png' },

            ].map((lead, i) => (
              <div key={i} className="w-full max-w-[280px] sm:max-w-[320px] aspect-square mx-auto">
                <TiltedCard
                  imageSrc={`${lead.img}?q=80&w=800&auto=format&fit=crop&crop=faces`}
                  name={lead.name}
                  role={lead.role}
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={10}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={false}
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
      </section >

      {/* Drawer Overlay */}
      {
        isDrawerOpen && (
          <div className="fixed inset-0 z-[100] overflow-hidden">
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
        )
      }
    </div >

  );
}
