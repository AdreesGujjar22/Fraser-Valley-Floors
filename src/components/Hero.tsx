import React from "react";
import { Calculator, Shield, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

interface HeroProps {
  onStartCalculator: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartCalculator, onOpenConsultation }) => {
  return (
    <div className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Oak Hardwood Flooring Fraser Valley"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Fraser Valley's Flooring
              Specialists
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
              Premium Flooring,
              <br />
              <span className="text-amber-400">Crafted for Fraser Valley Living.</span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              From wide-plank engineered oak and 100% waterproof luxury vinyl to solid hardwood and
              plush carpets. We bring full showroom samples directly to your doorstep in Abbotsford,
              Chilliwack, Langley & Mission.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 py-2">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Free In-Home Consultations</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Lifetime Install Warranty</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Local Expert Installers</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onStartCalculator}
                className="inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-base group"
              >
                <Calculator className="w-5 h-5" />
                Calculate Instant Room Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3.5 rounded-xl border border-slate-700 transition-all text-base"
              >
                Request Free In-Home Samples
              </button>
            </div>
          </div>

          {/* Right Column Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-700/80 shadow-2xl space-y-6">
              <div className="border-b border-slate-700/80 pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-bold text-amber-400">
                    Direct From Showroom
                  </span>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 font-medium px-2 py-0.5 rounded border border-emerald-500/30">
                    In Stock Local
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  Book Your Mobile Showroom
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  We bring over 200+ physical samples right to your home so you can match your
                  lighting & decor!
                </p>
              </div>

              <div className="space-y-3 text-sm text-slate-200">
                <div className="flex items-start gap-3 bg-slate-900/60 p-3 rounded-lg border border-slate-700/50">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <strong className="text-white block">Select Your Preferred Styles</strong>
                    <span className="text-xs text-slate-400">
                      Hardwood, Waterproof LVP, Tile, or Laminate
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-900/60 p-3 rounded-lg border border-slate-700/50">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <strong className="text-white block">Exact Laser Measurement</strong>
                    <span className="text-xs text-slate-400">
                      Our local technician accurately measures every room
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-900/60 p-3 rounded-lg border border-slate-700/50">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <strong className="text-white block">Guaranteed Fixed Quote</strong>
                    <span className="text-xs text-slate-400">
                      No hidden fees or unexpected extras on install day
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-3.5 px-4 rounded-xl shadow-md transition-all text-center flex items-center justify-center gap-2"
              >
                Schedule Free Mobile Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
