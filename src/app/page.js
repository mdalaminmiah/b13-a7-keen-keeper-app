"use client";
import Banner from "@/components/Home/Banner";
import FriendCard from "@/components/Home/FriendCard";
import SummaryCards from "@/components/Home/SummaryCards";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import initialFriendsData from '@/data/friends.json';
import { useEffect, useState } from "react";

export default function Home() {
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const loadFriends = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                setFriends(initialFriendsData);
            } catch (error) {
                console.error("Failed to load friends:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadFriends();
    }, []);
  if (isLoading) {
    return <LoadingSpinner />;
  }


  return (
    <main className="min-h-screen bg-slate-50/30 pb-20 animate-in fade-in duration-700">
      <Banner />
      <SummaryCards friends={friends} />
       <section className="max-w-7xl mx-auto px-4 mt-20">
        <h2 className="text-xl font-bold text-slate-800 mb-8">Your Friends</h2>
        
        {/* Requirement: 4-column grid layout on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>

        {/* Empty State (Good UX practice) */}
        {friends.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400">No friends found. Time to make some connections!</p>
          </div>
        )}
      </section>
    </main>
  );
}
