import React from "react";

export const Milestones: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-12 reveal-up">
          <span className="section-tag">📈 Our Journey</span>
          <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            GROWTH <span className="gold-text">MILESTONES</span>
          </h2>
          <p className="text-muted max-w-[550px] mx-auto">
            How we grew from a boutique sports book into the preferred platform for thousands of active players.
          </p>
        </div>

        <div className="milestones-wrap mt-12 reveal-up">
          {/* Node 1 */}
          <div className="milestone-node">
            <div className="milestone-year">2022</div>
            <h5 className="text-white font-bold text-[1.1rem] mb-2">Exchange Foundation</h5>
            <p className="text-dim text-[0.9rem] max-w-[600px]">
              Launched our peer-to-peer sports exchange system, allowing users to back and lay cricket matches with low commissions.
            </p>
          </div>

          {/* Node 2 */}
          <div className="milestone-node">
            <div className="milestone-year">2023</div>
            <h5 className="text-white font-bold text-[1.1rem] mb-2">Casino Integration</h5>
            <p className="text-dim text-[0.9rem] max-w-[600px]">
              Partnered with top-tier live dealer studios to offer Roulette, Teen Patti, and Blackjack streamed in crystal clear HD.
            </p>
          </div>

          {/* Node 3 */}
          <div className="milestone-node">
            <div className="milestone-year">2024</div>
            <h5 className="text-white font-bold text-[1.1rem] mb-2">10,000 Active Players</h5>
            <p className="text-dim text-[0.9rem] max-w-[600px]">
              Achieved our major scale milestone, supporting more than ten thousand concurrent bets on premium sports markets.
            </p>
          </div>

          {/* Node 4 */}
          <div className="milestone-node !pb-0">
            <div className="milestone-year">2026</div>
            <h5 className="text-white font-bold text-[1.1rem] mb-2">Auto-Withdrawal Engines</h5>
            <p className="text-dim text-[0.9rem] max-w-[600px]">
              Upgraded our payment gateways to auto-process client withdrawals, reducing payouts to an average of just 2 minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
