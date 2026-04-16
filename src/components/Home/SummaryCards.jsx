"use client"
import React from 'react';
import friendsData from '@/data/friends.json';

export default function SummaryCards() {
  const stats = {
    total: friendsData.length,
    overdue: friendsData.filter(f => f.status === 'overdue').length,
    almostDue: friendsData.filter(f => f.status === 'almost due').length,
    onTrack: friendsData.filter(f => f.status === 'on-track').length,
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <StatCard label="Total Friends" value={stats.total} color="text-slate-800" />
      <StatCard label="Overdue" value={stats.overdue} color="text-red-500" />
      <StatCard label="Almost Due" value={stats.almostDue} color="text-amber-500" />
      <StatCard label="On-Track" value={stats.onTrack} color="text-emerald-600" />
    </div>
  );
}

const StatCard = ({ label, value, color }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{label}</p>
    <p className={`text-2xl font-black ${color}`}>{value}</p>
  </div>
);