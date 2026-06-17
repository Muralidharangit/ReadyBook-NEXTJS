"use client";

import React, { useState, useEffect, useRef } from "react";
import { matchesData, MatchData, MatchOdds } from "@/data/games";

interface SelectedBet {
  runnerName: string;
  odds: number;
  type: "Back" | "Lay";
}

export const Games: React.FC = () => {
  // Simulator State
  const [activeStep, setActiveStep] = useState<number>(1);
  const [currentSport, setCurrentSport] = useState<"cricket" | "soccer" | "tennis">("cricket");
  const [currentMatchId, setCurrentMatchId] = useState<string | null>(null);
  const [selectedBet, setSelectedBet] = useState<SelectedBet | null>(null);
  const [stake, setStake] = useState<number>(1000);
  const [isBetslipOpen, setIsBetslipOpen] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [redirecting, setRedirecting] = useState<boolean>(false);

  // Dynamic odds values that will fluctuate
  const [localOdds, setLocalOdds] = useState<Record<string, MatchOdds>>({});
  // Track which buttons are currently flashing up/down
  const [flashStates, setFlashStates] = useState<Record<string, "up" | "down" | null>>({});

  useEffect(() => {
    // Load initial odds
    const oddsMap: Record<string, MatchOdds> = {};
    Object.keys(matchesData).forEach((key) => {
      oddsMap[key] = { ...matchesData[key].odds };
    });
    setLocalOdds(oddsMap);
  }, []);

  // Live Odds Fluctuation Interval
  useEffect(() => {
    if (!currentMatchId || showSuccess) return;

    const interval = setInterval(() => {
      setLocalOdds((prevOdds) => {
        const matchOdds = prevOdds[currentMatchId];
        if (!matchOdds) return prevOdds;

        const keys = Object.keys(matchOdds) as Array<keyof MatchOdds>;
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const currentVal = matchOdds[randomKey];

        const up = Math.random() > 0.5;
        const fluctuation = parseFloat((Math.random() * 0.04).toFixed(2));
        let newVal = up ? currentVal + fluctuation : currentVal - fluctuation;
        if (newVal < 1.01) newVal = 1.01;
        newVal = parseFloat(newVal.toFixed(2));

        // Trigger flashing effect
        const flashId = `${currentMatchId}-${randomKey}`;
        setFlashStates((prev) => ({
          ...prev,
          [flashId]: up ? "up" : "down",
        }));

        setTimeout(() => {
          setFlashStates((prev) => ({
            ...prev,
            [flashId]: null,
          }));
        }, 800);

        return {
          ...prevOdds,
          [currentMatchId]: {
            ...matchOdds,
            [randomKey]: newVal,
          },
        };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [currentMatchId, showSuccess]);

  // Calculations
  const calcProfit = () => {
    if (!selectedBet) return "₹0.00";
    const oddsVal = selectedBet.odds;
    const type = selectedBet.type;

    if (type === "Back") {
      const profit = stake * (oddsVal - 1);
      return `₹${profit.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else {
      const win = stake;
      const liability = stake * (oddsVal - 1);
      return `₹${win.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (Liability: ₹${liability.toFixed(2)})`;
    }
  };

  const handleEnterMatch = (matchId: string) => {
    setCurrentMatchId(matchId);
    setActiveStep(2);
  };

  const handleBackToLobby = () => {
    setCurrentMatchId(null);
    setSelectedBet(null);
    setIsBetslipOpen(false);
    setActiveStep(1);
  };

  const handleSelectOdds = (runnerName: string, odds: number, type: "Back" | "Lay") => {
    setSelectedBet({ runnerName, odds, type });
    setIsBetslipOpen(true);
    setActiveStep(3);
  };

  const handleCloseBetslip = () => {
    setIsBetslipOpen(false);
    setSelectedBet(null);
    setActiveStep(currentMatchId ? 2 : 1);
  };

  const handleAddStake = (amount: number) => {
    setStake((prev) => prev + amount);
  };

  const handleSubmitBet = () => {
    setShowSuccess(true);
    setRedirecting(true);

    setTimeout(() => {
      setRedirecting(false);
      if (selectedBet) {
        const text = encodeURIComponent(
          `Hi! I am using the Reddy Book Demo Sportsbook and want to place a ${selectedBet.type} bet on ${selectedBet.runnerName} at odds of ${selectedBet.odds.toFixed(2)} with a stake of ₹${stake}. Please set up my ID and credit!`
        );
        window.open(`https://wa.me/919999999999?text=${text}`, "_blank");
      }
    }, 2500);
  };

  const handleResetSimulator = () => {
    setShowSuccess(false);
    handleBackToLobby();
  };

  const currentMatch = currentMatchId ? matchesData[currentMatchId] : null;
  const currentOdds = currentMatchId && localOdds[currentMatchId] ? localOdds[currentMatchId] : null;

  return (
    <>
      {/* Live Ticker Section */}
      <section id="live-ticker">
        <div className="ticker-header-bar">
          <div className="ticker-live-label">
            <span className="ticker-live-dot"></span>
            <span>LIVE MARKETS</span>
          </div>
          <div className="ticker-fade-left"></div>
          <div className="ticker-wrap">
            <div className="ticker-marquee">
              {/* Duplicate contents to ensure smooth marquee loop */}
              {[1, 2].map((loopIndex) => (
                <React.Fragment key={loopIndex}>
                  <div className="ticker-item">
                    <span className="ticker-live-indicator"><span className="tlive-dot"></span>LIVE</span>
                    <span className="ticker-sport-pill cricket">🏏 CRICKET</span>
                    <span className="ticker-teams">India <span className="ticker-vs">vs</span> Australia</span>
                    <span className="ticker-scores">284/4 · 42.3 ov</span>
                    <span className="ticker-odds-pair">
                      <span className="ticker-odds back">IND 1.45</span>
                      <span className="ticker-odds lay">AUS 3.20</span>
                    </span>
                  </div>
                  <div className="ticker-item">
                    <span className="ticker-live-indicator"><span className="tlive-dot"></span>LIVE</span>
                    <span className="ticker-sport-pill soccer">⚽ SOCCER</span>
                    <span className="ticker-teams">Real Madrid <span className="ticker-vs">vs</span> Barcelona</span>
                    <span className="ticker-scores">2–1 · 74&apos;</span>
                    <span className="ticker-odds-pair">
                      <span className="ticker-odds back">RMA 1.25</span>
                      <span className="ticker-odds lay">BAR 4.50</span>
                    </span>
                  </div>
                  <div className="ticker-item">
                    <span className="ticker-live-indicator"><span className="tlive-dot"></span>LIVE</span>
                    <span className="ticker-sport-pill tennis">🎾 TENNIS</span>
                    <span className="ticker-teams">Djokovic <span className="ticker-vs">vs</span> Alcaraz</span>
                    <span className="ticker-scores">6-4, 3-6, 4-2</span>
                    <span className="ticker-odds-pair">
                      <span className="ticker-odds back">DJO 1.80</span>
                      <span className="ticker-odds lay">ALC 2.10</span>
                    </span>
                  </div>
                  <div className="ticker-item">
                    <span className="ticker-live-indicator"><span className="tlive-dot"></span>LIVE</span>
                    <span className="ticker-sport-pill cricket">🏏 IPL</span>
                    <span className="ticker-teams">CSK <span className="ticker-vs">vs</span> MI</span>
                    <span className="ticker-scores">178/2 · 16.4 ov</span>
                    <span className="ticker-odds-pair">
                      <span className="ticker-odds back">CSK 1.62</span>
                      <span className="ticker-odds lay">MI 2.40</span>
                    </span>
                  </div>
                  <div className="ticker-item">
                    <span className="ticker-live-indicator"><span className="tlive-dot"></span>LIVE</span>
                    <span className="ticker-sport-pill esports">🎮 ESPORTS</span>
                    <span className="ticker-teams">Vitality <span className="ticker-vs">vs</span> G2</span>
                    <span className="ticker-scores">10–8 · Map 2</span>
                    <span className="ticker-odds-pair">
                      <span className="ticker-odds back">VIT 1.80</span>
                      <span className="ticker-odds lay">G2 2.10</span>
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="ticker-fade-right"></div>
        </div>
      </section>

      {/* Simulator Section */}
      <section id="live-markets" className="py-24 bg-bg-secondary relative border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal-up">
            <span className="section-tag">⚡ PLAY DEMO SPORTSBOOK &amp; EXCHANGE</span>
            <h2 className="mb-4 font-heading font-extrabold uppercase" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
              BETTING <span className="gold-text">EXCHANGE SIMULATOR</span>
            </h2>
            <p className="text-muted max-w-[550px] mx-auto text-[0.95rem]">
              Try our interactive demo sportsbook and exchange below to see how easy it is to back and lay bets in real-time.
            </p>
          </div>

          <div className="simulator-container">
            {/* Left Steps Menu */}
            <div className="sim-steps-wrapper">
              <h4 className="text-white mb-6 font-heading font-extrabold text-[1.2rem] tracking-wider">
                HOW TO BET FLOW
              </h4>

              {/* Step 1 */}
              <div className={`sim-step-item ${activeStep === 1 ? "active" : ""} ${activeStep > 1 ? "completed" : ""}`}>
                <div className="sim-step-badge">1</div>
                <div className="sim-step-content">
                  <h5>Choose Sport &amp; Match</h5>
                  <p>Select a live cricket or soccer match in play from the exchange lobby.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className={`sim-step-item ${activeStep === 2 ? "active" : ""} ${activeStep > 2 ? "completed" : ""}`}>
                <div className="sim-step-badge">2</div>
                <div className="sim-step-content">
                  <h5>Select Back or Lay Odds</h5>
                  <p>Choose <strong>Back</strong> (blue) to bet ON a team, or <strong>Lay</strong> (pink) to bet AGAINST them.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className={`sim-step-item ${activeStep === 3 ? "active" : ""} ${activeStep > 3 ? "completed" : ""}`}>
                <div className="sim-step-badge">3</div>
                <div className="sim-step-content">
                  <h5>Set Stake &amp; Play</h5>
                  <p>Enter your play amount in the bet slip and lock in your verified ID setup instantly.</p>
                </div>
              </div>
            </div>

            {/* Right Device Mockup */}
            <div className="sim-console">
              {/* Header */}
              <div className="sim-console-header">
                <div className="sim-console-title flex items-center gap-2">
                  <i className="bi bi-cpu-fill text-gold"></i> REDDY BOOK DEMO
                </div>
                <div className="sim-console-status flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#28a745] inline-block animate-pulse"></span>
                  <span>Live Betfair API</span>
                </div>
              </div>

              <div className="sim-console-screen">
                {/* STATE 1: LOBBY */}
                {!currentMatchId && (
                  <div id="simStateLobby">
                    <div className="sim-sport-tab-bar">
                      <button
                        onClick={() => setCurrentSport("cricket")}
                        className={`sim-sport-tab ${currentSport === "cricket" ? "active" : ""}`}
                      >
                        🏏 Cricket
                      </button>
                      <button
                        onClick={() => setCurrentSport("soccer")}
                        className={`sim-sport-tab ${currentSport === "soccer" ? "active" : ""}`}
                      >
                        ⚽ Soccer
                      </button>
                      <button
                        onClick={() => setCurrentSport("tennis")}
                        className={`sim-sport-tab ${currentSport === "tennis" ? "active" : ""}`}
                      >
                        🎾 Tennis
                      </button>
                    </div>

                    {/* Cricket Section */}
                    {currentSport === "cricket" && (
                      <div className="sim-sport-section">
                        <div className="sim-sport-header-row">
                          <span>IPL &amp; Domestic Leagues</span>
                          <span className="text-[0.65rem] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-[#28a745] rounded-full"></span> Live
                          </span>
                        </div>
                        <div className="sim-lobby-table">
                          <div className="sim-lobby-row" onClick={() => handleEnterMatch("wizard")}>
                            <div className="sim-lobby-match-info">
                              <div className="sim-lobby-match-title">Rashmi Medinipur Wizard v Murshidabad Kings</div>
                              <div className="sim-lobby-league text-[0.7rem] text-dim">Bengal T20 League · 1:00 PM</div>
                            </div>
                            <div className="sim-lobby-quick-odds">
                              <div className="sim-quick-odds-btn back">2.68</div>
                              <div className="sim-quick-odds-btn lay">2.94</div>
                            </div>
                          </div>
                          <div className="sim-lobby-row" onClick={() => handleEnterMatch("kings")}>
                            <div className="sim-lobby-match-info">
                              <div className="sim-lobby-match-title">Kakinada Kings v Vijayawada Sunshine</div>
                              <div className="sim-lobby-league text-[0.7rem] text-dim">Andhra Premier League · 1:30 PM</div>
                            </div>
                            <div className="sim-lobby-quick-odds">
                              <div className="sim-quick-odds-btn back">2.00</div>
                              <div className="sim-quick-odds-btn lay">2.02</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Soccer Section */}
                    {currentSport === "soccer" && (
                      <div className="sim-sport-section">
                        <div className="sim-sport-header-row">
                          <span>FIFA World Cup</span>
                          <span className="text-[0.65rem] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-[#28a745] rounded-full"></span> Live
                          </span>
                        </div>
                        <div className="sim-lobby-table">
                          <div className="sim-lobby-row" onClick={() => handleEnterMatch("canada")}>
                            <div className="sim-lobby-match-info">
                              <div className="sim-lobby-match-title">Canada v Bosnia</div>
                              <div className="sim-lobby-league text-[0.7rem] text-dim">FIFA World Cup · 12:30 AM</div>
                            </div>
                            <div className="sim-lobby-quick-odds">
                              <div className="sim-quick-odds-btn back">1.90</div>
                              <div className="sim-quick-odds-btn lay">1.91</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tennis Section */}
                    {currentSport === "tennis" && (
                      <div className="sim-sport-section">
                        <div className="sim-sport-header-row">
                          <span>ATP Exclusive Tour</span>
                          <span className="text-[0.65rem] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-[#28a745] rounded-full"></span> Live
                          </span>
                        </div>
                        <div className="sim-lobby-table">
                          <div className="sim-lobby-row" onClick={() => handleEnterMatch("conor")}>
                            <div className="sim-lobby-match-info">
                              <div className="sim-lobby-match-title">Gannon Conor vs Neimanis Pih</div>
                              <div className="sim-lobby-league text-[0.7rem] text-dim">Exclusive League · 1:30 PM</div>
                            </div>
                            <div className="sim-lobby-quick-odds">
                              <div className="sim-quick-odds-btn back">1.88</div>
                              <div className="sim-quick-odds-btn lay">1.94</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* STATE 2: MATCH DETAIL GRID */}
                {currentMatch && currentOdds && (
                  <div id="simStateDetail">
                    <div className="sim-detail-back-bar" onClick={handleBackToLobby}>
                      <i className="bi bi-chevron-left"></i> Back to Lobby
                    </div>

                    <div className="sim-detail-header-card">
                      <div className="sim-detail-league">{currentMatch.league}</div>
                      <div className="sim-detail-title">{currentMatch.title}</div>
                      <div className="sim-detail-status">
                        <span className="w-2 h-2 rounded-full bg-[#28a745] inline-block"></span>
                        In-Play · Match Odds
                      </div>
                    </div>

                    <div className="sim-grid-header">
                      <span>MARKET RUNNER</span>
                      <span className="text-center text-[#72bbef]">BACK</span>
                      <span className="text-center text-[#faa9ba]">LAY</span>
                    </div>

                    {/* Runner 1 */}
                    <div className="sim-grid-row">
                      <span className="sim-runner-name">{currentMatch.r1Name}</span>
                      <div className="sim-odds-btn-group">
                        <button
                          onClick={() => handleSelectOdds(currentMatch.r1Name, currentOdds.r1b1, "Back")}
                          className={`sim-odds-btn back ${flashStates[`${currentMatch.id}-r1b1`] === "up" ? "odds-flash-up" : flashStates[`${currentMatch.id}-r1b1`] === "down" ? "odds-flash-down" : ""}`}
                        >
                          <span className="odd">{currentOdds.r1b1.toFixed(2)}</span>
                          <span className="vol">4981</span>
                        </button>
                        <button
                          onClick={() => handleSelectOdds(currentMatch.r1Name, currentOdds.r1b2, "Back")}
                          className={`sim-odds-btn back ${flashStates[`${currentMatch.id}-r1b2`] === "up" ? "odds-flash-up" : flashStates[`${currentMatch.id}-r1b2`] === "down" ? "odds-flash-down" : ""}`}
                        >
                          <span className="odd">{currentOdds.r1b2.toFixed(2)}</span>
                          <span className="vol">1937</span>
                        </button>
                        <button
                          onClick={() => handleSelectOdds(currentMatch.r1Name, currentOdds.r1b3, "Back")}
                          className={`sim-odds-btn back featured ${flashStates[`${currentMatch.id}-r1b3`] === "up" ? "odds-flash-up" : flashStates[`${currentMatch.id}-r1b3`] === "down" ? "odds-flash-down" : ""}`}
                        >
                          <span className="odd">{currentOdds.r1b3.toFixed(2)}</span>
                          <span className="vol">144</span>
                        </button>
                      </div>
                      <div className="sim-odds-btn-group">
                        <button
                          onClick={() => handleSelectOdds(currentMatch.r1Name, currentOdds.r1l1, "Lay")}
                          className={`sim-odds-btn lay featured ${flashStates[`${currentMatch.id}-r1l1`] === "up" ? "odds-flash-up" : flashStates[`${currentMatch.id}-r1l1`] === "down" ? "odds-flash-down" : ""}`}
                        >
                          <span className="odd">{currentOdds.r1l1.toFixed(2)}</span>
                          <span className="vol">386</span>
                        </button>
                        <button
                          onClick={() => handleSelectOdds(currentMatch.r1Name, currentOdds.r1l2, "Lay")}
                          className={`sim-odds-btn lay ${flashStates[`${currentMatch.id}-r1l2`] === "up" ? "odds-flash-up" : flashStates[`${currentMatch.id}-r1l2`] === "down" ? "odds-flash-down" : ""}`}
                        >
                          <span className="odd">{currentOdds.r1l2.toFixed(2)}</span>
                          <span className="vol">143</span>
                        </button>
                        <button
                          onClick={() => handleSelectOdds(currentMatch.r1Name, currentOdds.r1l3, "Lay")}
                          className={`sim-odds-btn lay ${flashStates[`${currentMatch.id}-r1l3`] === "up" ? "odds-flash-up" : flashStates[`${currentMatch.id}-r1l3`] === "down" ? "odds-flash-down" : ""}`}
                        >
                          <span className="odd">{currentOdds.r1l3.toFixed(2)}</span>
                          <span className="vol">10k</span>
                        </button>
                      </div>
                    </div>

                    {/* Runner 2 */}
                    <div className="sim-grid-row">
                      <span className="sim-runner-name">{currentMatch.r2Name}</span>
                      <div className="sim-odds-btn-group">
                        <button
                          onClick={() => handleSelectOdds(currentMatch.r2Name, currentOdds.r2b1, "Back")}
                          className={`sim-odds-btn back ${flashStates[`${currentMatch.id}-r2b1`] === "up" ? "odds-flash-up" : flashStates[`${currentMatch.id}-r2b1`] === "down" ? "odds-flash-down" : ""}`}
                        >
                          <span className="odd">{currentOdds.r2b1.toFixed(2)}</span>
                          <span className="vol">7212</span>
                        </button>
                        <button
                          onClick={() => handleSelectOdds(currentMatch.r2Name, currentOdds.r2b2, "Back")}
                          className={`sim-odds-btn back ${flashStates[`${currentMatch.id}-r2b2`] === "up" ? "odds-flash-up" : flashStates[`${currentMatch.id}-r2b2`] === "down" ? "odds-flash-down" : ""}`}
                        >
                          <span className="odd">{currentOdds.r2b2.toFixed(2)}</span>
                          <span className="vol">21k</span>
                        </button>
                        <button
                          onClick={() => handleSelectOdds(currentMatch.r2Name, currentOdds.r2b3, "Back")}
                          className={`sim-odds-btn back featured ${flashStates[`${currentMatch.id}-r2b3`] === "up" ? "odds-flash-up" : flashStates[`${currentMatch.id}-r2b3`] === "down" ? "odds-flash-down" : ""}`}
                        >
                          <span className="odd">{currentOdds.r2b3.toFixed(2)}</span>
                          <span className="vol">746</span>
                        </button>
                      </div>
                      <div className="sim-odds-btn-group">
                        <button
                          onClick={() => handleSelectOdds(currentMatch.r2Name, currentOdds.r2l1, "Lay")}
                          className={`sim-odds-btn lay featured ${flashStates[`${currentMatch.id}-r2l1`] === "up" ? "odds-flash-up" : flashStates[`${currentMatch.id}-r2l1`] === "down" ? "odds-flash-down" : ""}`}
                        >
                          <span className="odd">{currentOdds.r2l1.toFixed(2)}</span>
                          <span className="vol">34k</span>
                        </button>
                        <button
                          onClick={() => handleSelectOdds(currentMatch.r2Name, currentOdds.r2l2, "Lay")}
                          className={`sim-odds-btn lay ${flashStates[`${currentMatch.id}-r2l2`] === "up" ? "odds-flash-up" : flashStates[`${currentMatch.id}-r2l2`] === "down" ? "odds-flash-down" : ""}`}
                        >
                          <span className="odd">{currentOdds.r2l2.toFixed(2)}</span>
                          <span className="vol">5670</span>
                        </button>
                        <button
                          onClick={() => handleSelectOdds(currentMatch.r2Name, currentOdds.r2l3, "Lay")}
                          className={`sim-odds-btn lay ${flashStates[`${currentMatch.id}-r2l3`] === "up" ? "odds-flash-up" : flashStates[`${currentMatch.id}-r2l3`] === "down" ? "odds-flash-down" : ""}`}
                        >
                          <span className="odd">{currentOdds.r2l3.toFixed(2)}</span>
                          <span className="vol">1168</span>
                        </button>
                      </div>
                    </div>

                    {/* Fancy tabs mock */}
                    <div className="sim-fancy-tabs-wrap flex gap-1 scrollbar-none">
                      <span className="sim-fancy-tab">FANCY</span>
                      <span className="sim-fancy-tab active">PREMIUM FANCY</span>
                      <span className="sim-fancy-tab">LINE MARKETS</span>
                      <span className="sim-fancy-tab">SESSION MARKETS</span>
                      <span className="sim-fancy-tab">BALL BY BALL</span>
                    </div>
                  </div>
                )}

                {/* BET SLIP */}
                {selectedBet && (
                  <div className={`sim-betslip ${isBetslipOpen ? "open" : ""}`}>
                    <div className="sim-slip-header">
                      <span className={`sim-slip-title ${selectedBet.type === "Back" ? "back" : "lay"}`}>
                        <i className="bi bi-plus-circle-fill"></i> {selectedBet.type.toUpperCase()} BET
                      </span>
                      <button className="sim-slip-close" onClick={handleCloseBetslip}>
                        <i className="bi bi-x"></i>
                      </button>
                    </div>
                    <div className="sim-slip-runner">{selectedBet.runnerName}</div>
                    <div className="sim-slip-odds-display">
                      Selected Odds: <span>{selectedBet.odds.toFixed(2)}</span>
                    </div>

                    <div className="sim-slip-inputs">
                      <div className="sim-slip-input-group">
                        <label>Odds</label>
                        <input type="text" value={selectedBet.odds.toFixed(2)} readOnly />
                      </div>
                      <div className="sim-slip-input-group">
                        <label>Stake (₹)</label>
                        <input
                          type="number"
                          value={stake}
                          onChange={(e) => setStake(Math.max(0, parseInt(e.target.value) || 0))}
                        />
                      </div>
                    </div>

                    <div className="sim-slip-presets">
                      <button className="sim-preset-btn" onClick={() => handleAddStake(500)}>+500</button>
                      <button className="sim-preset-btn" onClick={() => handleAddStake(1000)}>+1000</button>
                      <button className="sim-preset-btn" onClick={() => handleAddStake(5000)}>+5000</button>
                      <button className="sim-preset-btn" onClick={() => handleAddStake(10000)}>+10000</button>
                    </div>

                    <div className="sim-slip-profit-row">
                      <span className="sim-profit-label">
                        {selectedBet.type === "Back" ? "EST. PROFIT:" : "EST. WIN:"}
                      </span>
                      <span className="sim-profit-value">{calcProfit()}</span>
                    </div>

                    <button className="sim-place-btn" onClick={handleSubmitBet}>
                      ⚡ PLACE BET VIA WHATSAPP (INSTANT ID)
                    </button>
                  </div>
                )}

                {/* SUCCESS SCREEN */}
                <div className={`sim-success-screen ${showSuccess ? "active" : ""}`}>
                  {redirecting ? (
                    <div className="flex flex-col items-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold mb-4"></div>
                      <h4 className="sim-success-title">CONNECTING WHATSAPP...</h4>
                      <p className="sim-success-desc text-muted">Redirecting you to our live chat assistance...</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="sim-success-icon">
                        <i className="bi bi-check-lg"></i>
                      </div>
                      <h4 className="sim-success-title">BET INITIATED!</h4>
                      <p className="sim-success-desc">
                        Your slip has been captured. We are redirecting you to our WhatsApp helper to activate your Betting ID and load credits.
                      </p>
                      <button onClick={handleResetSimulator} className="btn btn-gold px-6 py-2">
                        Continue to WhatsApp
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Games;
