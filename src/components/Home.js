import React from 'react';
// import homeBG from '../assets/homepage-bg.jpg';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-indigo-500">
      <div className=" h-[720px]  max-w-6xl mx-auto">
        <div className="w-1/2 h-full">
          <div className="flex flex-col h-full justify-center relative left-1/4 w-3/4 space-y-7">
            <div className="flex flex-col text-6xl space-y-3">
              <div>GAME</div>
              <div>SET</div>
              <div>MATCH!</div>
            </div>
            <div className="text-xl">Lorem Ipsum</div>
            <button className="bg-green-200 shadow-[6px_6px_2px_1px_rgba(0,0,255,0.4)]">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
