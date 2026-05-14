export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="relative mb-6">
        {/* Pulsing background */}
        <div className="absolute inset-0 rounded-2xl bg-blue-500 opacity-20 animate-ping" />
        
        {/* Logo container */}
        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-xl shadow-blue-500/30">
          <span className="text-4xl animate-bounce">🇮🇳</span>
        </div>
      </div>
      
      <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
        SchemeBot is thinking...
      </h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 text-center">
        Finding the best government schemes for you
      </p>

      {/* Progress Bar */}
      <div className="w-full max-w-[200px] h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <div className="h-full bg-blue-600 rounded-full w-1/3 animate-[loadingBar_1.5s_ease-in-out_infinite]" />
      </div>

      <style>{`
        @keyframes loadingBar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); width: 60%; }
          100% { transform: translateX(300%); width: 30%; }
        }
      `}</style>
    </div>
  );
}