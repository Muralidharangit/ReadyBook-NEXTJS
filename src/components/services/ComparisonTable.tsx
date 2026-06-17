import React from "react";

export const ComparisonTable: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-12 reveal-up">
          <span className="section-tag">📊 Platform Matchup</span>
          <h2 className="mb-4 font-heading font-extrabold uppercase leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            REDDY VS <span className="gold-text">TRADITIONAL</span>
          </h2>
          <p className="text-muted max-w-[550px] mx-auto">
            See why professional sports and casino players choose our interactive exchange model.
          </p>
        </div>

        <div className="comp-table-card glass-card mt-12 reveal-up">
          <table className="comp-table w-full">
            <thead>
              <tr>
                <th className="font-heading font-extrabold text-gold">Feature</th>
                <th className="font-heading font-extrabold text-gold">Traditional Bookie</th>
                <th className="font-heading font-extrabold text-gold">Reddy Book Exchange</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-white font-semibold">Back &amp; Lay Bets</td>
                <td className="text-muted">❌ Not Supported (Back Only)</td>
                <td className="text-gold font-bold">✅ Fully Supported</td>
              </tr>
              <tr>
                <td className="text-white font-semibold">Odds Margin</td>
                <td className="text-muted">High Bookmaker Margins</td>
                <td className="text-gold font-bold">Lowest Commissions (Low Vig)</td>
              </tr>
              <tr>
                <td className="text-white font-semibold">Account Setup</td>
                <td className="text-muted">Slow (Takes days with KYC verification)</td>
                <td className="text-gold font-bold">Instant (Under 60s via WhatsApp)</td>
              </tr>
              <tr>
                <td className="text-white font-semibold">Withdrawal Time</td>
                <td className="text-muted">24 to 72 Hours processing queue</td>
                <td className="text-gold font-bold">Instant (Under 2 minutes via UPI)</td>
              </tr>
              <tr>
                <td className="text-white font-semibold">Live Casino Streams</td>
                <td className="text-muted">Limited tables, high lag</td>
                <td className="text-gold font-bold">HD 24/7 tables with native dealers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
