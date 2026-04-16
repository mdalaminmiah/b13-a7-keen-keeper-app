"use client";

import React, { useState, useMemo } from 'react';
import { useTimeline } from '@/Lib/TimelineProvider.mjs';
import { FaFilter } from "react-icons/fa6";
import { MdForwardToInbox } from "react-icons/md";
import TimelineItem from '@/components/ui/TimelineItem';

export default function TimelinePage() {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState('all');

  // ES6 Filter logic: Derived state is always better than extra useEffects
  const displayList = useMemo(() => (
    filter === 'all' ? entries : entries.filter(e => e.type === filter)
  ), [entries, filter]);

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <header className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-black text-[#1C4D42] tracking-tighter uppercase">Timeline </h1>
          <p className="text-slate-500 text-sm">Your latest interactions at a glance.</p>
        </div>

        <div className="relative w-full sm:w-44">
          <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 text-xs font-bold rounded-xl appearance-none outline-none focus:ring-2 focus:ring-emerald-50 cursor-pointer"
          >
            <option value="all">All Logs</option>
            <option value="call">Calls</option>
            <option value="text">Texts</option>
            <option value="video">Videos</option>
          </select>
        </div>
      </header>

      <section className="space-y-3">
        {displayList.length > 0 ? (
          displayList.map(entry => <TimelineItem key={entry.id} entry={entry} />)
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-4xl border-2 border-dashed border-slate-200">
            <MdForwardToInbox className="mx-auto text-slate-300 mb-2" size={40} />
            <p className="text-slate-400 font-bold text-sm">No activity recorded yet.</p>
          </div>
        )}
      </section>
    </main>
  );
}