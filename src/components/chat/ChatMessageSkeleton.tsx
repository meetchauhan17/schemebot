import React from "react";

export default function ChatMessageSkeleton() {
  return (
    <div className="flex gap-4 mb-6 animate-pulse">
      <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-xl shrink-0" />
      <div className="flex-1 space-y-3">
        <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded" />
        <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-800 rounded" />
      </div>
    </div>
  );
}
