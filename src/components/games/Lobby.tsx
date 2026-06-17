import React from "react";
import Button from "@/components/common/Button";
import { casinoGames } from "@/data/games";

interface LobbyProps {
  onTriggerDemo: (title: string) => void;
}

export const Lobby: React.FC<LobbyProps> = ({ onTriggerDemo }) => {
  return (
    <>
      {/* Sports Exchange Section */}
      <section id="sports-exchange" className="py-12 bg-[#0d0419]/50">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-12 reveal-up">
            <span className="section-tag">🏏 Live Sports Markets</span>
            <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
              SPORTS <span className="gold-text">EXCHANGE</span>
            </h2>
            <p className="text-muted max-w-[550px] mx-auto">
              Back and lay odds on all active leagues with instant credit settlements.
            </p>
          </div>

          <div className="flex flex-wrap -mx-4 gap-y-6 mt-2">
            {/* Sport 1: Cricket */}
            <div className="w-full lg:w-1/3 md:w-1/2 px-4">
              <div className="glass-card p-6 h-full flex flex-col justify-between reveal-up transition-all duration-300">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-heading font-extrabold text-white text-[1.2rem] mb-0">Cricket</h4>
                    <span className="text-[0.75rem] bg-green-500/15 text-green-500 border border-green-500/25 px-2.5 py-1 rounded-full flex items-center gap-1.5 font-bold uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Live
                    </span>
                  </div>
                  <p className="text-dim text-[0.9rem] leading-relaxed mb-6">
                    IPL, ICC Cup, Big Bash League, Test Series, and County Cricket matches. High liquidity back and lay layouts.
                  </p>
                </div>
                <Button href="https://wa.me/919999999999" target="_blank" variant="gold-outline" className="w-full py-2.5">
                  Bet on Cricket
                </Button>
              </div>
            </div>

            {/* Sport 2: Soccer */}
            <div className="w-full lg:w-1/3 md:w-1/2 px-4">
              <div className="glass-card p-6 h-full flex flex-col justify-between reveal-up transition-all duration-300">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-heading font-extrabold text-white text-[1.2rem] mb-0">Soccer</h4>
                    <span className="text-[0.75rem] bg-green-500/15 text-green-500 border border-green-500/25 px-2.5 py-1 rounded-full flex items-center gap-1.5 font-bold uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Live
                    </span>
                  </div>
                  <p className="text-dim text-[0.9rem] leading-relaxed mb-6">
                    Premier League, UEFA Champions League, La Liga, Serie A, and FIFA matches with real-time Betfair odds.
                  </p>
                </div>
                <Button href="https://wa.me/919999999999" target="_blank" variant="gold-outline" className="w-full py-2.5">
                  Bet on Soccer
                </Button>
              </div>
            </div>

            {/* Sport 3: Tennis */}
            <div className="w-full lg:w-1/3 md:w-full px-4">
              <div className="glass-card p-6 h-full flex flex-col justify-between reveal-up transition-all duration-300">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-heading font-extrabold text-white text-[1.2rem] mb-0">Tennis</h4>
                    <span className="text-[0.75rem] bg-green-500/15 text-green-500 border border-green-500/25 px-2.5 py-1 rounded-full flex items-center gap-1.5 font-bold uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Live
                    </span>
                  </div>
                  <p className="text-dim text-[0.9rem] leading-relaxed mb-6">
                    ATP Tour, WTA Tour, US Open, Wimbledon, and French Open matches. Rapid game-by-game odds settlement.
                  </p>
                </div>
                <Button href="https://wa.me/919999999999" target="_blank" variant="gold-outline" className="w-full py-2.5">
                  Bet on Tennis
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Casino Section */}
      <section id="live-casino" className="py-12">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-12 reveal-up">
            <span className="section-tag">🎰 HD Casino Lobby</span>
            <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
              LIVE DEALER <span className="gold-text">GAMES</span>
            </h2>
            <p className="text-muted max-w-[550px] mx-auto">
              Play classic table games and slots with high payouts. Click below to load a simulated demo game instantly.
            </p>
          </div>

          <div className="flex flex-wrap -mx-4 gap-y-6 mt-2">
            {casinoGames.map((game, index) => (
              <div key={game.id} className="w-full sm:w-1/2 lg:w-1/4 px-4">
                <div 
                  onClick={() => onTriggerDemo(game.title)}
                  className="glass-card game-card p-4 h-full flex flex-col justify-between reveal-up cursor-pointer group"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div>
                    <div 
                      className="game-card-img rounded-xl mb-4 relative overflow-hidden aspect-video bg-cover bg-center flex items-center justify-center"
                      style={{ 
                        backgroundImage: game.bgGradient,
                        minHeight: "150px"
                      }}
                    >
                      <span className="game-category-badge absolute top-3 left-3 z-10 bg-gold/10 text-gold border border-gold/20 text-[0.65rem] font-black tracking-widest px-2 py-0.5 rounded">
                        {game.category}
                      </span>
                      <div className="play-btn-overlay absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-gold text-4xl">
                        <i className="bi bi-play-fill"></i>
                      </div>
                    </div>
                    <h5 className="text-white font-bold text-[1.1rem] mb-2">{game.title}</h5>
                    <p className="text-muted text-[0.8rem] leading-relaxed mb-0">
                      {game.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Lobby;
