import React from 'react';
import homeBG from '../../assets/homepage-bg-red.jpg';
import HomeSectionOne from './HomeSectionOne';
import HomeSectionTwo from './HomeSectionTwo';
import HomeSectionThree from './HomeSectionThree';
import { Link } from 'react-router-dom';

// begins animation after assets are loaded
function showAnimation(event) {
  event.target.closest('.animate-hold').classList.remove('animate-hold');
}

export default function Home() {
  return (
    <div id="home">
      <div className="bg-gradient-to-r from-teal-500 to-indigo-500">
        <div className="h-[540px] md:h-[720px] max-w-6xl mx-auto flex px-6">
          <div className="flex-1 h-full">
            <div className="flex flex-col h-full justify-center mx-8 md:mx-0 relative md:left-1/4 md:w-3/4 space-y-7 text-white">
              <div className="flex flex-col text-6xl space-y-3">
                <div className="opacity-0 animate-fade-in-left-250">GAME</div>
                <div className="opacity-0 animate-fade-in-left-500">SET</div>
                <div className="opacity-0 animate-fade-in-left-750">MATCH</div>
              </div>
              <div className="text-xl opacity-0 animate-fade-in-top-1000">
                Your number one premier tennis equipment supplier.
              </div>
              <Link
                to="/store/racquets"
                className="opacity-0 animate-fade-in-top-1000 md:w-3/4 bg-blue-400 hover:bg-blue-500 transition-colors pt-1 border-2">
                <button className="w-full">Shop Now</button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block flex-1 m-auto mx-6">
            <img
              onLoad={showAnimation}
              className="border-2 object-scale-down rounded-lg drop-shadow-lg opacity-0 animate-fade-in-top-1000 animate-hold"
              src={homeBG}
            />
          </div>
        </div>
      </div>
      <HomeSectionOne showAnimation={showAnimation} />
      <HomeSectionTwo />
      <HomeSectionThree />
    </div>
  );
}
