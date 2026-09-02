"use client";

import { useState } from "react";
import Link from "next/link";
import ContactModal from "../components/contact-modal";
import Illustration from "../svgs/svg-illustration";
import Illustration4 from "../svgs/svg-illustration4";
import SiteFooter from "../components/site-footer";

// Deterministic number formatter for SSR hydration parity
const formatNum = (val: number): string => new Intl.NumberFormat("en-US").format(val);

export default function CalculatorPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mode, setMode] = useState<"quick" | "advanced">("quick");

  // Quick mode state & formulas ($150 avg value, 30% conversion)
  const [callsPerDay, setCallsPerDay] = useState<number>(15);
  const quickDailyLoss = callsPerDay * 150 * 0.3;
  const quickMonthlyLoss = Math.round(quickDailyLoss * 30);
  const quickAnnualLoss = Math.round(quickDailyLoss * 365);

  // Advanced mode state & formulas
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState<number>(10);
  const [avgJobValue, setAvgJobValue] = useState<number>(450);
  const [conversionRate, setConversionRate] = useState<number>(50);

  const monthlyMissedCalls = missedCallsPerWeek * 4.333;
  const monthlyJobsLost = Math.round(monthlyMissedCalls * (conversionRate / 100));
  const monthlyLoss = Math.round(monthlyJobsLost * avgJobValue);
  const yearlyLoss = Math.round(monthlyLoss * 12);
  const yearlyJobsLost = Math.round(monthlyJobsLost * 12);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between selection:bg-emerald-200 selection:text-slate-900">
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      {/* Mobile menu backdrop */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
      </div>

      {/* Mobile menu drawer — Light Theme */}
      <nav
        className={`fixed top-0 right-0 bottom-0 w-72 max-w-[85vw] bg-white border-l border-slate-200/80 shadow-2xl flex flex-col z-[101] md:hidden transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <span className="text-lg font-bold text-slate-900 [font-family:avantt,_'avantt_Fallback',_system-ui,_sans-serif]">Menu</span>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col px-4 py-4 gap-1 flex-1 overflow-y-auto">
          <li>
            <Link
              href="/#technology"
              className="block py-3 px-3.5 text-slate-700 hover:text-slate-950 text-[15px] font-medium rounded-xl hover:bg-slate-100/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Technology
            </Link>
          </li>
          <li>
            <Link
              href="/#benefits"
              className="block py-3 px-3.5 text-slate-700 hover:text-slate-950 text-[15px] font-medium rounded-xl hover:bg-slate-100/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </Link>
          </li>
          <li>
            <Link
              href="/calculator"
              className="block py-3 px-3.5 text-emerald-600 font-bold text-[15px] rounded-xl bg-emerald-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Calculator
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="block py-3 px-3.5 text-slate-700 hover:text-slate-950 text-[15px] font-medium rounded-xl hover:bg-slate-100/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/#customers"
              className="block py-3 px-3.5 text-slate-700 hover:text-slate-950 text-[15px] font-medium rounded-xl hover:bg-slate-100/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Customers
            </Link>
          </li>
        </ul>
        <div className="p-5 border-t border-slate-100">
          <button
            type="button"
            className="w-full h-11 flex items-center justify-center rounded-xl bg-primary text-slate-950 text-[15px] font-bold hover:opacity-90 transition-opacity shadow-md shadow-primary/25 cursor-pointer"
            onClick={() => { setContactOpen(true); setMobileMenuOpen(false); }}
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* Header */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Illustration />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/#technology" className="hover:text-slate-900 transition-colors">Technology</Link>
            <Link href="/#benefits" className="hover:text-slate-900 transition-colors">Benefits</Link>
            <Link href="/calculator" className="text-emerald-600 font-bold">Calculator</Link>
            <Link href="/blog" className="hover:text-slate-900 transition-colors">Blog</Link>
            <Link href="/#customers" className="hover:text-slate-900 transition-colors">Customers</Link>
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="hidden sm:inline-flex px-4 py-1.5 rounded-lg text-sm font-bold text-slate-950 bg-primary hover:opacity-90 transition-opacity shadow-xs"
            >
              Contact Us
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Open menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-6 px-4 max-w-3xl mx-auto w-full">
        <div className="text-center max-w-xl mx-auto mb-6">
          <span className="inline-block text-emerald-600 [font-family:foundryGridnik,_'foundryGridnik_Fallback'] text-[11px] font-bold uppercase tracking-[1.5px] mb-1">
            Missed Call Revenue Calculator
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 mb-2 [font-family:avantt,_'avantt_Fallback',_system-ui,_sans-serif]">
            Calculate Your Revenue Loss
          </h1>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            See how much revenue your business loses to unanswered calls and after-hours voicemails.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white border border-slate-200/90 shadow-md rounded-2xl p-5 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
            <h2 className="text-base md:text-lg font-black tracking-tight text-slate-900 uppercase [font-family:avantt,_'avantt_Fallback',_system-ui,_sans-serif]">
              Revenue Impact Calculator
            </h2>

            <div className="inline-flex p-0.5 bg-slate-100 rounded-xl border border-slate-200/80 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setMode("quick")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  mode === "quick" ? "bg-emerald-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Quick Estimate
              </button>
              <button
                type="button"
                onClick={() => setMode("advanced")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  mode === "advanced" ? "bg-emerald-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Calculate Exact Loss
              </button>
            </div>
          </div>

          {/* Quick Mode */}
          {mode === "quick" && (
            <div className="pt-5 space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs md:text-sm font-bold text-slate-800">Calls missed per day</label>
                  <span className="text-xl font-black text-emerald-600">{callsPerDay}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={50}
                  step={1}
                  value={callsPerDay}
                  onChange={(e) => setCallsPerDay(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
                  <span>1 call</span>
                  <span>50 calls</span>
                </div>
              </div>

              {/* Loss Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-red-50/50 border border-red-200/60 rounded-xl p-3.5 text-center shadow-2xs flex flex-col justify-center">
                  <p className="text-xl md:text-2xl font-extrabold text-red-600 tracking-tight">${formatNum(quickDailyLoss)}</p>
                  <p className="text-[10px] uppercase font-extrabold tracking-wider text-slate-500 mt-1">Daily Revenue Loss</p>
                </div>
                <div className="bg-red-50/50 border border-red-200/60 rounded-xl p-3.5 text-center shadow-2xs flex flex-col justify-center">
                  <p className="text-xl md:text-2xl font-extrabold text-red-600 tracking-tight">${formatNum(quickMonthlyLoss)}</p>
                  <p className="text-[10px] uppercase font-extrabold tracking-wider text-slate-500 mt-1">Monthly Loss</p>
                </div>
                <div className="bg-red-50/60 border border-red-200/80 rounded-xl p-3.5 text-center shadow-2xs flex flex-col justify-center">
                  <p className="text-xl md:text-2xl font-extrabold text-red-600 tracking-tight">${formatNum(quickAnnualLoss)}</p>
                  <p className="text-[10px] uppercase font-extrabold tracking-wider text-slate-500 mt-1">Annual Revenue At Risk</p>
                </div>
              </div>

              <div className="rounded-xl bg-emerald-50/90 border border-emerald-200/70 p-3 text-center">
                <p className="text-xs font-medium text-slate-800">
                  <strong className="text-emerald-700 font-bold">Vectolift captures 100% of these calls</strong> — turning missed opportunities into confirmed revenue
                </p>
              </div>

              <p className="text-center text-[10px] text-slate-400 italic">
                * Quick estimate based on $150 average call value and 30% conversion rate
              </p>

              <div className="pt-1 text-center">
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="px-6 py-2.5 rounded-xl font-bold text-white bg-slate-950 hover:bg-slate-900 transition-all text-xs shadow-md inline-flex items-center gap-2"
                >
                  <span>Start Capturing Your Missed Calls</span>
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Advanced Mode */}
          {mode === "advanced" && (
            <div className="pt-5 grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-6 space-y-5">
                <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5 uppercase tracking-wider">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  Custom Business Metrics
                </h3>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-semibold text-slate-800">Missed Calls per Week</label>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {missedCallsPerWeek} calls / wk
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={50}
                    step={1}
                    value={missedCallsPerWeek}
                    onChange={(e) => setMissedCallsPerWeek(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-medium">
                    <span>1 call</span>
                    <span>25 calls</span>
                    <span>50 calls</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-semibold text-slate-800">Average Job Value ($ AUD)</label>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      ${formatNum(avgJobValue)} AUD
                    </span>
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={3000}
                    step={25}
                    value={avgJobValue}
                    onChange={(e) => setAvgJobValue(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="text-[10px] text-slate-500 font-medium">Presets:</span>
                    {[250, 450, 850, 1500].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setAvgJobValue(val)}
                        className={`text-[10px] px-2 py-0.5 rounded border transition-all ${
                          avgJobValue === val
                            ? "bg-emerald-600 text-white border-emerald-600 font-bold shadow-2xs"
                            : "bg-white border-slate-200 hover:border-slate-400 text-slate-700 font-medium"
                        }`}
                      >
                        ${val}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-semibold text-slate-800">Lead-to-Job Conversion Rate</label>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {conversionRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={90}
                    step={5}
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-medium">
                    <span>10% (Low)</span>
                    <span>50% (Avg)</span>
                    <span>90% (High)</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[10px] text-slate-600 flex items-start gap-2">
                  <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Based on 4.33 weeks/month. Australian trades lose an avg 4-8 jobs weekly to missed calls.</span>
                </div>
              </div>

              {/* Advanced Results */}
              <div className="md:col-span-6 flex flex-col justify-between gap-4">
                <div className="bg-red-50/70 border border-red-200/90 rounded-xl p-4 relative overflow-hidden shadow-2xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-red-700 font-bold mb-0.5">Estimated Monthly Loss</p>
                      <p className="text-2xl font-extrabold text-red-600 tracking-tight">
                        ${formatNum(monthlyLoss)} <span className="text-xs font-semibold text-slate-600">/ mo</span>
                      </p>
                    </div>
                    <span className="p-2 bg-red-100 border border-red-200 rounded-lg text-red-600">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-600 font-medium mt-1.5">
                    Losing approx. <strong className="text-slate-900 font-bold">{formatNum(monthlyJobsLost)} booked jobs</strong> every month.
                  </p>
                </div>

                <div className="bg-red-50/70 border border-red-200/90 rounded-xl p-4 relative overflow-hidden shadow-2xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-red-700 font-bold mb-0.5">Estimated Annual Loss</p>
                      <p className="text-2xl font-extrabold text-red-600 tracking-tight">
                        ${formatNum(yearlyLoss)} <span className="text-xs font-semibold text-slate-600">/ yr</span>
                      </p>
                    </div>
                    <span className="p-2 bg-red-100 border border-red-200 rounded-lg text-red-600">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-600 font-medium mt-1.5">
                    Miss out on <strong className="text-slate-900 font-bold">{formatNum(yearlyJobsLost)} potential jobs</strong> per year.
                  </p>
                </div>

                <div className="bg-emerald-500 text-slate-950 rounded-xl p-4 flex flex-col justify-between gap-3 shadow-md shadow-emerald-500/15">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-extrabold text-slate-900/80">The Vectolift Advantage</span>
                    <h3 className="text-base font-extrabold text-slate-950 mt-0.5">Recover Up To ${formatNum(yearlyLoss)} AUD</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setContactOpen(true)}
                    className="w-full py-2.5 px-4 rounded-lg font-bold text-white bg-slate-950 hover:bg-slate-900 transition-colors flex items-center justify-center gap-2 text-xs shadow-xs"
                  >
                    <span>Start Recovering Lost Revenue</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
