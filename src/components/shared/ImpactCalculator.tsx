"use client";

import React, { useState, useEffect } from "react";
import { Calculator, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { filterSchemes, calculateTotalBenefit } from "@/lib/schemes";
import type { Scheme } from "@/types";

export default function ImpactCalculator() {
  const [occupation, setOccupation] = useState("");
  const [income, setIncome] = useState("");
  const [state, setState] = useState("");
  
  const [calculated, setCalculated] = useState(false);
  const [matchedSchemes, setMatchedSchemes] = useState<Scheme[]>([]);
  const [benefitAmount, setBenefitAmount] = useState("");
  const [count, setCount] = useState(0);

  const handleCalculate = () => {
    if (!occupation || !income || !state) return;
    
    // Use the core filter function directly for instantaneous feedback
    const matches = filterSchemes({
      occupation: occupation as any,
      annualIncome: income as any,
      state: state
    });

    setMatchedSchemes(matches);
    setBenefitAmount(calculateTotalBenefit(matches));
    setCalculated(true);
  };

  // Simple animation for the count
  useEffect(() => {
    if (calculated && matchedSchemes.length > 0) {
      let current = 0;
      const interval = setInterval(() => {
        if (current < matchedSchemes.length) {
          current++;
          setCount(current);
        } else {
          clearInterval(interval);
        }
      }, 50); // 50ms per tick
      return () => clearInterval(interval);
    }
  }, [calculated, matchedSchemes.length]);

  return (
    <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 border border-blue-100 dark:border-slate-700 max-w-3xl mx-auto shadow-inner relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center relative z-10">
        How Much Could <span className="text-blue-600 dark:text-blue-400">YOU</span> Be Getting?
      </h3>
      
      {!calculated ? (
        <div className="space-y-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <select 
              value={occupation} 
              onChange={e => setOccupation(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Occupation...</option>
              <option value="farmer">Farmer</option>
              <option value="student">Student</option>
              <option value="business">Business Owner</option>
              <option value="unemployed">Unemployed</option>
              <option value="salaried">Salaried</option>
            </select>
            <select 
              value={income} 
              onChange={e => setIncome(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Income Range...</option>
              <option value="below-1l">Below ₹1 Lakh</option>
              <option value="1-3l">₹1L - ₹3L</option>
              <option value="3-6l">₹3L - ₹6L</option>
              <option value="6-12l">₹6L - ₹12L</option>
              <option value="above-12l">Above ₹12 Lakh</option>
            </select>
            <select 
              value={state} 
              onChange={e => setState(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Your State...</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
            </select>
          </div>
          <button 
            onClick={handleCalculate}
            disabled={!occupation || !income || !state}
            className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 text-white font-bold text-lg shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-4"
          >
            <Calculator className="w-5 h-5" />
            Calculate My Benefits
          </button>
        </div>
      ) : (
        <div className="text-center py-6 animate-in zoom-in-95 duration-300 relative z-10">
          <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-2">🎉 People like you typically qualify for:</p>
          <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
            {count} Schemes
          </div>
          <p className="text-slate-600 dark:text-slate-400 font-medium max-w-xl mx-auto mb-6">
            Worth approximately <strong className="text-green-600 dark:text-green-400 text-xl">{benefitAmount}</strong> annually.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              onClick={() => setCalculated(false)}
              className="px-6 py-3 rounded-xl border-2 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 font-bold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              Recalculate
            </button>
            <Link 
              href={`/schemes?occupation=${occupation}&income=${income}&state=${state}`}
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center gap-2"
            >
              View My Schemes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}