import React from 'react';
import homeBG from '../assets/homepage-bg-red.jpg';
import rackets from '../assets/featured collections/rackets.jpg';
import mensClothing from '../assets/featured collections/mens-clothing.jpg';
import womensClothing from '../assets/featured collections/womens-clothing.jpg';
import strings from '../assets/featured collections/strings.jpg';
import { Link } from 'react-router-dom';
function FeaturedCollections() {
  return (
    <div className="max-w-6xl mx-auto mt-12 pb-7">
      <div className="text-5xl mb-6 text-center pt-7 pb-7">
        Featured Collections
      </div>
      <ul className="text-center text-2xl font-light flex flex-col md:flex-row justify-around space-y-6 md:space-y-0 md:space-x-6 mx-6">
        <Link to="/store/racquets/">
          <li className="m-auto space-y-4 hover:scale-105 hover:text-red-500 duration-200 transform cursor-pointer">
            <img src={rackets} className="w-64 shadow-xl" />
            <p className="">Tennis Rackets</p>
          </li>
        </Link>
        <Link to="/store/mensClothing/">
          <li className="m-auto space-y-4 hover:scale-105 hover:text-red-500 duration-200 transform cursor-pointer">
            <img src={mensClothing} className="w-64 shadow-xl" />
            <p className="">Men{`'`}s Clothing</p>
          </li>
        </Link>
        <Link to="/store/womensClothing/">
          <li className="m-auto space-y-4 hover:scale-105 hover:text-red-500 duration-200 transform cursor-pointer">
            <img src={womensClothing} className="w-64 shadow-xl" />
            <p className="">Women{`'`}s Clothing</p>
          </li>
        </Link>
        <Link to="/store/strings/">
          <li className="m-auto space-y-4 hover:scale-105 hover:text-red-500 duration-200 transform cursor-pointer">
            <img src={strings} className="w-64 shadow-xl" />
            <p className="">Strings</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}
export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-r from-teal-500 to-indigo-500">
        <div className="h-[720px] max-w-6xl mx-auto flex ">
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
              <Link
                to="/store"
                className="opacity-0 animate-fade-in-left-1000 md:w-3/4 bg-blue-400 hover:bg-blue-500 transition-colors pt-1 border-2">
                <button className="w-full">Shop Now</button>
              </Link>
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
      <FeaturedCollections />
    </div>
  );
}
