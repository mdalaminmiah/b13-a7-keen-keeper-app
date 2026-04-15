"use client";
import Banner from "@/components/Home/Banner";
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
    </main>
  );
}
