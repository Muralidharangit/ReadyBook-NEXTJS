import React from "react";
import Button from "@/components/common/Button";
import { casinoGames, matchesData } from "@/data/games";

interface LobbyProps {
  onTriggerDemo: (title: string) => void;
}

export const Lobby: React.FC<LobbyProps> = ({ onTriggerDemo }) => {
  const matches = Object.values(matchesData);
  const featuredMatch = matches[0];
  const otherMatches = matches.slice(1, 4);

  return (
    <>
      {/* Sports Exchange Section - PRO SPORTSBOOK LAYOUT */}
      <section id="sports-exchange" className="py-16 bg-gradient-to-b from-white/[0.02] to-transparent relative">
        <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 reveal-up">
            <div className="text-left max-w-2xl">
              <span className="section-tag inline-flex items-center gap-2 mb-4 bg-green-500/10 text-green-500 border border-green-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Live In-Play
              </span>
              <h2 className="font-heading font-extrabold uppercase leading-tight text-4xl md:text-5xl lg:text-6xl mb-4">
                SPORTS <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">EXCHANGE</span>
              </h2>
              <p className="text-muted text-lg">
                Industry-leading odds with instant settlement. Back or lay your favorite teams.
              </p>
            </div>
            <div className="hidden md:block">
              <Button href="https://wa.me/919999999999" target="_blank" variant="gold-outline" className="px-6 py-3">View All Markets</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Featured Match - Huge Card */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="glass-card flex-grow rounded-2xl border border-white/10 p-0 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-purple-900/20 opacity-50"></div>
                <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-center mb-12">
                    <span className="text-gold font-bold tracking-widest text-sm uppercase">{featuredMatch.league}</span>
                    <i className="bi bi-broadcast text-green-500 text-xl animate-pulse"></i>
                  </div>

                  <div className="flex justify-between items-center mb-12 relative">
                    <div className="text-center w-5/12">
                      <div className="w-20 h-20 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:border-gold/50 transition-colors">
                        <i className="bi bi-shield-fill text-3xl text-gray-400 group-hover:text-gold transition-colors"></i>
                      </div>
                      <h3 className="font-heading font-bold text-xl md:text-2xl leading-tight">{featuredMatch.r1Name}</h3>
                    </div>
                    <div className="w-2/12 text-center relative z-20">
                      <span className="bg-gold text-black font-black italic px-4 py-2 rounded-lg text-xl transform -skew-x-12 inline-block shadow-[0_0_20px_rgba(252,212,90,0.3)]">VS</span>
                    </div>
                    <div className="text-center w-5/12">
                      <div className="w-20 h-20 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:border-gold/50 transition-colors">
                        <i className="bi bi-shield-fill text-3xl text-gray-400 group-hover:text-gold transition-colors"></i>
                      </div>
                      <h3 className="font-heading font-bold text-xl md:text-2xl leading-tight">{featuredMatch.r2Name}</h3>
                    </div>
                  </div>

                  <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/5">
                    <div className="flex justify-between items-center text-xs text-dim font-bold mb-3 px-2">
                      <span className="w-1/3">MATCH ODDS</span>
                      <div className="w-2/3 flex justify-end gap-2">
                        <span className="w-14 text-center text-blue-300">BACK</span>
                        <span className="w-14 text-center text-pink-300">LAY</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {/* Team 1 Odds */}
                      <div className="flex items-center justify-between bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-colors">
                        <span className="font-bold text-sm truncate w-1/3 pl-2 text-gray-200">{featuredMatch.r1Name}</span>
                        <div className="flex gap-2">
                          <button className="w-14 py-2 bg-[#72bbff]/20 text-[#72bbff] border border-[#72bbff]/30 rounded font-bold hover:bg-[#72bbff]/40 transition-colors shadow-inner">{featuredMatch.odds.r1b1}</button>
                          <button className="w-14 py-2 bg-[#faa9ba]/20 text-[#faa9ba] border border-[#faa9ba]/30 rounded font-bold hover:bg-[#faa9ba]/40 transition-colors shadow-inner">{featuredMatch.odds.r1l1}</button>
                        </div>
                      </div>
                      {/* Team 2 Odds */}
                      <div className="flex items-center justify-between bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-colors">
                        <span className="font-bold text-sm truncate w-1/3 pl-2 text-gray-200">{featuredMatch.r2Name}</span>
                        <div className="flex gap-2">
                          <button className="w-14 py-2 bg-[#72bbff]/20 text-[#72bbff] border border-[#72bbff]/30 rounded font-bold hover:bg-[#72bbff]/40 transition-colors shadow-inner">{featuredMatch.odds.r2b1}</button>
                          <button className="w-14 py-2 bg-[#faa9ba]/20 text-[#faa9ba] border border-[#faa9ba]/30 rounded font-bold hover:bg-[#faa9ba]/40 transition-colors shadow-inner">{featuredMatch.odds.r2l1}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Matches List */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              {otherMatches.map((match) => (
                <div key={match.id} className="glass-card rounded-xl p-5 border border-white/5 hover:border-gold/30 hover:bg-white/[0.03] transition-all group flex flex-col justify-between flex-grow hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[0.65rem] text-gold font-bold tracking-widest uppercase mb-1 block">{match.league}</span>
                      <h4 className="font-bold text-white text-[1rem] group-hover:text-gold transition-colors">{match.title}</h4>
                    </div>
                    <i className="bi bi-play-circle text-gray-500 group-hover:text-gold transition-colors text-2xl"></i>
                  </div>

                  <div className="flex justify-between mt-auto gap-3">
                    <button className="flex-1 py-2.5 bg-[#72bbff]/10 text-[#72bbff] border border-[#72bbff]/20 rounded font-bold text-sm hover:bg-[#72bbff]/30 transition-colors flex justify-between px-4 items-center">
                      <span className="opacity-60 text-xs">1</span>
                      <span className="text-base">{match.odds.r1b1}</span>
                    </button>
                    <button className="flex-1 py-2.5 bg-[#72bbff]/10 text-[#72bbff] border border-[#72bbff]/20 rounded font-bold text-sm hover:bg-[#72bbff]/30 transition-colors flex justify-between px-4 items-center">
                      <span className="opacity-60 text-xs">2</span>
                      <span className="text-base">{match.odds.r2b1}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-full md:hidden mt-4">
              <Button href="#all-matches" variant="gold-outline" className="w-full py-3">View All Markets</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Casino Section - Premium Interlocking Bento Grid */}
      <section id="live-casino" className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-up">
            <div className="text-left max-w-2xl">
              <span className="section-tag inline-block mb-4">🎰 Premium Casino</span>
              <h2 className="font-heading font-extrabold uppercase leading-tight text-4xl md:text-5xl lg:text-6xl mb-4">
                LIVE DEALER <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">LOBBY</span>
              </h2>
              <p className="text-muted text-lg">
                Immerse yourself in HD streamed table games with professional dealers. Click any game to load a demo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {casinoGames.map((game, index) => {
              // Create an interlocking asymmetrical bento layout
              let colSpan = "lg:col-span-6";

              if (index === 0) colSpan = "lg:col-span-8 md:col-span-2";
              else if (index === 1) colSpan = "lg:col-span-4 md:col-span-1";
              else if (index === 2) colSpan = "lg:col-span-4 md:col-span-1";
              else if (index === 3) colSpan = "lg:col-span-8 md:col-span-2";

              return (
                <div
                  key={game.id}
                  className={`${colSpan} w-full reveal-up`}
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div
                    onClick={() => onTriggerDemo(game.title)}
                    className="glass-card rounded-2xl overflow-hidden relative group cursor-pointer border border-white/10 hover:border-gold/40 transition-all duration-500 h-[400px] flex flex-col justify-end p-8 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(252,212,90,0.15)]"
                  >
                    {/* Background Image with Zoom */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                      style={{
                        backgroundImage: game.imageUrl ? `url('${game.imageUrl}')` : game.bgGradient,
                      }}
                    ></div>

                    {/* Gradient Overlay for Text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>

                    {/* Category Badge */}
                    <span className="absolute top-6 left-6 z-20 bg-black/60 backdrop-blur-md text-gold border border-gold/30 text-xs font-black tracking-widest px-4 py-1.5 rounded-full uppercase">
                      {game.category}
                    </span>

                    {/* Content */}
                    <div className="relative z-20 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="w-14 h-14 rounded-full bg-gold text-black flex items-center justify-center mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_#fcd45a] scale-75 group-hover:scale-100">
                        <i className="bi bi-play-fill text-3xl ml-1"></i>
                      </div>
                      <h3 className="text-white font-heading font-black text-3xl md:text-4xl mb-3 tracking-wide group-hover:text-gold transition-colors duration-300 drop-shadow-lg">{game.title}</h3>
                      <p className="text-gray-300 text-[1rem] leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-md font-medium">
                        {game.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Lobby;

