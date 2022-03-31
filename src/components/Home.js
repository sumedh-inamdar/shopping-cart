import React from 'react';
import homeBG from '../assets/homepage-bg-red.jpg';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-indigo-500">
      <div className=" h-[720px] max-w-6xl mx-auto flex">
        <div className="flex-1 h-full">
          <div className="flex flex-col h-full justify-center mx-8 md:mx-0 relative md:left-1/4 md:w-3/4 space-y-7 text-white">
            <div className="flex flex-col text-6xl space-y-3">
              <div className="opacity-0 animate-fade-in-down-250">GAME</div>
              <div className="opacity-0 animate-fade-in-down-500">SET</div>
              <div className="opacity-0 animate-fade-in-down-750">MATCH</div>
            </div>
            <div className="text-xl opacity-0 animate-fade-in-left-1000">
              Your number one premier tennis equipment supplier.
            </div>
            <button className="opacity-0 animate-fade-in-left-1000 md:w-3/4 bg-gradient-to-r from-cyan-500 to-blue-500  pt-1 border-2">
              Shop Now
            </button>
          </div>
        </div>
        <div className="hidden md:block flex-1 m-auto mx-6">
          <img
            className="border-2 object-scale-down rounded-lg drop-shadow-lg opacity-0 animate-fade-in-left-1000"
            src={homeBG}
          />
        </div>
      </div>
    </div>
  );
}
