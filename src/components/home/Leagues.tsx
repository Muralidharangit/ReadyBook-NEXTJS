import React from "react";

export const Leagues: React.FC = () => {
  return (
    <section id="leagues">
      <div 
        className="glow-orb glow-purple w-[500px] h-[500px] bottom-0 -right-[100px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-5">
        {/* Header */}
        <div className="text-center mb-12 reveal-up">
          <span className="section-tag">Leaderboards &amp; Statistics</span>
          <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            3 LEAGUES <span className="gold-text">REDDYBOOK</span><br className="hidden sm:block" /> GAMES CHALLENGE
          </h2>
          <p className="text-muted max-w-[650px] mx-auto">
            Rankings are calculated based on your activity on the ReddyBook platform. Compete in your league for monthly prizes.
          </p>
        </div>

        {/* League Cards Grid */}
        <div className="flex flex-wrap -mx-4 gap-y-6 mb-12">
          {/* League I */}
          <div className="w-full lg:w-1/3 px-4 reveal-up">
            <div className="league-card h-full flex flex-col justify-between">
              <div>
                <div className="league-head pink-head flex items-center gap-3">
                  <span className="league-icon-wrap"><i className="bi bi-trophy-fill"></i></span>
                  <div>
                    <div className="league-title">League I Ranking</div>
                    <div className="league-prize-subtitle">Prize Pool: ₹2,00,000</div>
                  </div>
                </div>
                <div className="league-subhead uppercase">Pokerstars · PokerMatch</div>
                <div className="overflow-x-auto w-full">
                  <table className="league-table w-full">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Points</th>
                        <th>Prize</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><span className="rank-badge rank-1">1</span></td>
                        <td>Player_01</td>
                        <td>1,400</td>
                        <td>₹10,000</td>
                      </tr>
                      <tr>
                        <td><span className="rank-badge rank-2">2</span></td>
                        <td>Player_02</td>
                        <td>1,200</td>
                        <td>₹7,500</td>
                      </tr>
                      <tr>
                        <td><span className="rank-badge rank-3">3</span></td>
                        <td>Player_03</td>
                        <td>1,050</td>
                        <td>₹5,000</td>
                      </tr>
                      <tr>
                        <td><span className="rank-badge rank-other">4</span></td>
                        <td>Player_04</td>
                        <td>900</td>
                        <td>₹3,000</td>
                      </tr>
                      <tr>
                        <td><span className="rank-badge rank-other">5</span></td>
                        <td>Player_05</td>
                        <td>780</td>
                        <td>₹1,500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="league-foot">
                <div className="league-status-info text-left">
                  <strong>Participating Statuses:</strong>
                  <span>Known, Outstanding, Expert, Guru, Elite, Legend.</span>
                </div>
              </div>
            </div>
          </div>

          {/* League II */}
          <div className="w-full lg:w-1/3 px-4 reveal-up">
            <div className="league-card h-full flex flex-col justify-between">
              <div>
                <div className="league-head purple-head flex items-center gap-3">
                  <span className="league-icon-wrap"><i className="bi bi-trophy-fill"></i></span>
                  <div>
                    <div className="league-title">League II Ranking</div>
                    <div className="league-prize-subtitle">Prize Pool: ₹1,00,000</div>
                  </div>
                </div>
                <div className="league-subhead uppercase">PokerStars · Unibet · 888poker</div>
                <div className="overflow-x-auto w-full">
                  <table className="league-table w-full">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Points</th>
                        <th>Prize</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><span className="rank-badge rank-1">1</span></td>
                        <td>Creator_01</td>
                        <td>1,340</td>
                        <td>₹5,000</td>
                      </tr>
                      <tr>
                        <td><span className="rank-badge rank-2">2</span></td>
                        <td>Creator_02</td>
                        <td>1,180</td>
                        <td>₹3,500</td>
                      </tr>
                      <tr>
                        <td><span className="rank-badge rank-3">3</span></td>
                        <td>Creator_03</td>
                        <td>1,020</td>
                        <td>₹2,500</td>
                      </tr>
                      <tr>
                        <td><span className="rank-badge rank-other">4</span></td>
                        <td>Creator_04</td>
                        <td>860</td>
                        <td>₹1,500</td>
                      </tr>
                      <tr>
                        <td><span className="rank-badge rank-other">5</span></td>
                        <td>Creator_05</td>
                        <td>740</td>
                        <td>₹750</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="league-foot">
                <div className="league-status-info text-left">
                  <strong>Participating Statuses:</strong>
                  <span>Lover, Respected.</span>
                </div>
              </div>
            </div>
          </div>

          {/* League III */}
          <div className="w-full lg:w-1/3 px-4 reveal-up">
            <div className="league-card h-full flex flex-col justify-between">
              <div>
                <div className="league-head blue-head flex items-center gap-3">
                  <span className="league-icon-wrap"><i className="bi bi-trophy-fill"></i></span>
                  <div>
                    <div className="league-title">League III Ranking</div>
                    <div className="league-prize-subtitle">Prize Pool: ₹50,000</div>
                  </div>
                </div>
                <div className="league-subhead uppercase">Novibet · Unzipped</div>
                <div className="overflow-x-auto w-full">
                  <table className="league-table w-full">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Points</th>
                        <th>Prize</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><span className="rank-badge rank-1">1</span></td>
                        <td>Blogger_01</td>
                        <td>1,100</td>
                        <td>₹2,000</td>
                      </tr>
                      <tr>
                        <td><span className="rank-badge rank-2">2</span></td>
                        <td>Blogger_02</td>
                        <td>980</td>
                        <td>₹1,500</td>
                      </tr>
                      <tr>
                        <td><span className="rank-badge rank-3">3</span></td>
                        <td>Blogger_03</td>
                        <td>850</td>
                        <td>₹1,000</td>
                      </tr>
                      <tr>
                        <td><span className="rank-badge rank-other">4</span></td>
                        <td>Blogger_04</td>
                        <td>720</td>
                        <td>₹750</td>
                      </tr>
                      <tr>
                        <td><span className="rank-badge rank-other">5</span></td>
                        <td>Blogger_05</td>
                        <td>640</td>
                        <td>₹500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="league-foot">
                <div className="league-status-info text-left">
                  <strong>Participating Statuses:</strong>
                  <span>Novice, Enthusiastic.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center mt-6 mb-12 reveal-up text-[0.85rem] text-dim max-w-[650px] mx-auto">
          Rankings update daily. Prizes are distributed monthly. <strong className="text-gold">A higher ranking in any month guarantees a prize.</strong>
        </p>

        {/* How Winners Determined */}
        <div id="winners" className="flex flex-wrap -mx-4 gap-y-12 items-center pt-12 border-t border-gold/20">
          {/* Visual Column */}
          <div className="w-full lg:w-1/2 px-4 text-center reveal-left">
            <div className="relative inline-block w-full">
              <div 
                className="glow-orb glow-gold w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
                aria-hidden="true"
              />
              <div className="about-img-wrap relative">
                <img 
                  src="/images/WINIMG.png" 
                  alt="Why Choose Reddy Book Exchange"
                  className="w-full about-img relative"
                />
                <div className="about-prize-badge">
                  100% <small>Secure Payments</small>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 px-4 reveal-right">
            <span className="section-tag">Judging Criteria</span>
            <h2 className="mb-6 uppercase leading-tight font-heading font-extrabold" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              HOW ARE <span className="gold-text">WINNERS</span><br />DETERMINED?
            </h2>
            <p className="mb-6 text-muted leading-relaxed">
              Winners are selected through a rigorous process combining editorial review, audience engagement metrics, and platform activity scores.
            </p>

            {/* Rules */}
            <div className="rule-card">
              <span className="rule-icon"><i className="bi bi-bullseye text-gold"></i></span>
              <div>
                <strong className="text-gold font-bold">Nominations</strong>
                <span className="text-muted text-[0.85rem]">Points are distributed based on editorial ranking. First place gets the highest prize, scaling down for subsequent positions.</span>
              </div>
            </div>

            <div className="rule-card">
              <span className="rule-icon"><i className="bi bi-bar-chart-line-fill text-gold"></i></span>
              <div>
                <strong className="text-gold font-bold">Leagues</strong>
                <span className="text-muted text-[0.85rem]">Rankings by monthly activity — posts, reader engagement, views, comments, and overall quality.</span>
              </div>
            </div>

            <div className="rule-card">
              <span className="rule-icon"><i className="bi bi-patch-check-fill text-gold"></i></span>
              <div>
                <strong className="text-gold font-bold">Eligibility</strong>
                <span className="text-muted text-[0.85rem]">All content must be original, published during the competition period, and adhere to community guidelines.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leagues;
