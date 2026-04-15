"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const FriendCard = ({ friend }) => {
  const statusStyles = {
    "overdue": "bg-red-500 text-white",
    "almost due": "bg-amber-400 text-white",
    "on-track": "bg-emerald-800 text-white"
  };

  return (
    <Link href={`/friends/${friend.id}`} className="group">
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        
        {/* Profile Picture */}
        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-slate-50">
          {/* <img 
            src={friend.picture} 
            alt={friend.name} 
            className="w-full h-full object-cover"
          /> */}
          <Image
          className="dark:invert"
          src={friend.picture}
          alt={friend.name} 
          width={100}
          height={20}
          priority
          />
        </div>

        {/* Name & Contact Info */}
        <h3 className="text-lg font-bold text-slate-800">{friend.name}</h3>
        <p className="text-xs text-slate-400 mb-3">{friend.days_since_contact}d ago</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 justify-center mb-4">
          {friend.tags.map(tag => (
            <span key={tag} className="px-3 py-0.5 bg-emerald-50 text-[#1C4D42] text-[10px] font-bold uppercase rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Status Badge */}
        <div className={cn(
          "px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
          statusStyles[friend.status] || "bg-slate-200"
        )}>
          {friend.status}
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;