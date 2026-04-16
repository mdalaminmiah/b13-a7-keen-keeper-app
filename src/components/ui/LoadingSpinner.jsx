"use client"
import { BiLoaderCircle } from "react-icons/bi";
import React from 'react';

const LoadingSpinner = () => {
return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full bg-[#FBFBFA]">
      <div className="relative flex items-center justify-center">
        {/* Outer Ring Animation (DaisyUI) */}
        <span className="loading loading-ring loading-lg w-24 h-24 text-[#1C4D42]/20"></span>
        
        {/* Inner Spinner Icon (Lucide) */}
        <div className="absolute">
          <BiLoaderCircle className="w-10 h-10 text-[#1C4D42] animate-spin" />
        </div>
      </div>
      
      {/* Branding text */}
      <h2 className="mt-6 text-xl font-bold text-slate-800 tracking-tight">
        Keen<span className="text-[#1C4D42]">Keeper</span>
      </h2>
      <p className="mt-2 text-sm font-medium text-slate-400 animate-pulse">
        Fetching your circle of friends...
      </p>
    </div>
  );
};

export default LoadingSpinner;