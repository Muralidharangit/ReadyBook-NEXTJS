import React from "react";

export const Stats: React.FC = () => {
  return (
    <section id="social-stats">
      <div className="stats-bg-glow" aria-hidden="true"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 reveal-up">
          <span className="section-tag">📈 Live Activity</span>
          <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Trusted By <span className="gold-text">Thousands of Players</span>
          </h2>
          <p className="text-muted max-w-[550px] mx-auto">
            Check out our real-time active player metrics, massive daily jackpots, and ultra-fast withdrawal processing times.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="premium-stats-grid">
          <div className="flex flex-wrap -mx-4 gap-y-6 justify-center">
            {/* Card 1: Active Players */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="premium-stat-card card-players reveal-up">
                <div className="card-glow"></div>
                <div className="stat-card-header">
                  <div className="stat-badge-live">
                    <span className="live-pulse"></span> LIVE NOW
                  </div>
                  <div className="stat-icon-wrap">
                    <i className="bi bi-people-fill text-gold"></i>
                  </div>
                </div>
                <div className="stat-card-body">
                  <h3 className="stat-number-val gold-shimmer font-heading font-black">12,450+</h3>
                  <p className="stat-card-title m-0">Active Players Online</p>
                  <div className="stat-card-extra">
                    <div className="avatar-stack">
                      <span className="avatar-circle" style={{ background: "#5c1d7e" }}>A</span>
                      <span className="avatar-circle" style={{ background: "#9c27b0" }}>K</span>
                      <span className="avatar-circle" style={{ background: "#3f51b5" }}>S</span>
                      <span className="avatar-circle" style={{ background: "#ff9800" }}>+12k</span>
                    </div>
                    <span className="extra-text text-muted text-[0.72rem]">Matching bets in real-time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Biggest Win */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="premium-stat-card card-win reveal-up">
                <div className="card-glow"></div>
                <div className="stat-card-header">
                  <div className="stat-badge-win">
                    <i className="bi bi-trophy-fill mr-1"></i> JACKPOT
                  </div>
                  <div className="stat-icon-wrap">
                    <i className="bi bi-currency-rupee text-gold"></i>
                  </div>
                </div>
                <div className="stat-card-body">
                  <h3 className="stat-number-val gold-shimmer font-heading font-black">₹4,50,000</h3>
                  <p className="stat-card-title m-0">Today&apos;s Biggest Win</p>
                  <div className="stat-card-extra">
                    <span className="extra-text-highlight text-gold font-bold">
                      <i className="bi bi-check-circle-fill"></i> Payout Cleared
                    </span>
                    <span className="extra-text text-muted text-[0.72rem]">on Cricket Exchange</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Instant Withdrawals */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="premium-stat-card card-withdraw reveal-up">
                <div className="card-glow"></div>
                <div className="stat-card-header">
                  <div className="stat-badge-speed">
                    <i className="bi bi-lightning-fill mr-1"></i> INSTANT
                  </div>
                  <div className="stat-icon-wrap">
                    <i className="bi bi-clock-history text-gold"></i>
                  </div>
                </div>
                <div className="stat-card-body">
                  <h3 className="stat-number-val gold-shimmer font-heading font-black">2-Min</h3>
                  <p className="stat-card-title m-0">Instant Withdrawals</p>
                  <div className="stat-card-extra">
                    <div className="progress-bar-wrap">
                      <div className="progress-bar-fill"></div>
                    </div>
                    <span className="extra-text text-muted text-[0.72rem]">Auto-processed 24/7/365</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
