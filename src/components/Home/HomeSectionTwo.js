import React from 'react';
import serve from '../../assets/homepage-serve.jpg';
import style from '../../assets/homepage-style.jpg';

export default function HomeSectionTwo() {
  return (
    <div className="bg-slate-100 py-12 md:py-32 px-6">
      <div className="max-w-6xl mx-auto min-h-[550px] space-y-16">
        <div className="flex flex-col md:flex-row w-full space-x-0 md:space-x-6">
          <div className="flex-1 mb-6 md:mb-0">
            <img className="shadow-xl" src={serve} alt="person serving" />
          </div>
          <div className="flex-1 space-y-6 h-min m-auto">
            <p className="text-4xl md:text-5xl">Elevate your game</p>
            <div className="text-lg md:text-xl text-justify">
              Step in and enable your finest game with the right gear. Our
              trained staff can help your pick the right racket, strings, or
              answer any questions.
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full space-x-0 md:space-x-6">
          <div className="flex-1 space-y-6 h-min m-auto">
            <p className="text-4xl md:text-5xl md:text-right">Win with style</p>
            <div className="text-lg md:text-xl md:text-right">
              Feel amazing by winning in style with our fresh apparel collection
              from Nike, Adidas, and more!
            </div>
          </div>
          <div className="flex-1 order-first md:order-last mb-6 md:mb-0">
            <img
              className="shadow-xl"
              src={style}
              alt="girl sitting on court"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
