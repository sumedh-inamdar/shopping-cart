import React from 'react';
import homeBG from '../assets/homepage-bg-red.jpg';
import rackets from '../assets/featured collections/rackets.jpg';
import mensClothing from '../assets/featured collections/mens-clothing.jpg';
import womensClothing from '../assets/featured collections/womens-clothing.jpg';
import strings from '../assets/featured collections/strings.jpg';
import serve from '../assets/homepage-serve.jpg';
import style from '../assets/homepage-style.jpg';
import solar from '../assets/homepage-solar.jpg';
import variety from '../assets/homepage-variety.jpg';
import robot from '../assets/homepage-robot.jpg';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// begins animation after assets are loaded
function showAnimation(event) {
  event.target.closest('.animate-hold').classList.remove('animate-hold');
}

function HomeSectionOne() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35
  });

  return (
    <div
      className="max-w-6xl py-12 md:py-32 px-6 mx-auto min-h-[350px]"
      ref={ref}>
      {inView ? (
        <div>
          <div className="text-4xl md:text-5xl mb-6 text-center animate-fade-in-top-0">
            Featured Collections
          </div>
          <ul className="text-center text-2xl font-light flex flex-col md:flex-row justify-around space-y-6 md:space-y-0 md:space-x-6">
            <Link to="/store/racquets/">
              <li className="space-y-4 cursor-pointer animate-fade-in-top-250 opacity-0 animate-hold">
                <div className="hover:scale-105 transition-transform hover:text-red-500 duration-200">
                  <img
                    onLoad={showAnimation}
                    src={rackets}
                    className="m-auto w-64 shadow-xl"
                  />
                  <p className="">Tennis Rackets</p>
                </div>
              </li>
            </Link>
            <Link to="/store/mensClothing/">
              <li className="space-y-4 cursor-pointer animate-fade-in-top-500 opacity-0 animate-hold">
                <div className="hover:scale-105 transition-transform hover:text-red-500 duration-200">
                  <img
                    onLoad={showAnimation}
                    src={mensClothing}
                    className="m-auto w-64 shadow-xl"
                  />
                  <p className="">Men{`'`}s Clothing</p>
                </div>
              </li>
            </Link>
            <Link to="/store/womensClothing/">
              <li className="space-y-4 cursor-pointer animate-fade-in-top-750 opacity-0 animate-hold">
                <div className="hover:scale-105 transition-transform hover:text-red-500 duration-200">
                  <img
                    onLoad={showAnimation}
                    src={womensClothing}
                    className="m-auto w-64 shadow-xl"
                  />
                  <p className="">Women{`'`}s Clothing</p>
                </div>
              </li>
            </Link>
            <Link to="/store/strings/">
              <li className="space-y-4 cursor-pointer animate-fade-in-top-1000 opacity-0 animate-hold">
                <div className="hover:scale-105 transition-transform hover:text-red-500 duration-200">
                  <img
                    onLoad={showAnimation}
                    src={strings}
                    className="m-auto w-64 shadow-xl"
                  />
                  <p className="">Strings</p>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      ) : undefined}
    </div>
  );
}
function HomeSectionTwo() {
  return (
    <div className="bg-slate-200 py-12 md:py-32 px-6">
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
function HomeSectionThree() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  return (
    <div className="bg-white min-h-[350px] py-12 md:py-32 px-6" ref={ref}>
      {inView ? (
        <div className="max-w-6xl mx-auto space-y-10 md:space-y-16">
          <div className="text-4xl md:text-5xl text-center animate-fade-in-top-0">
            Why You{"'"}ll Love TENNSCENTRL
          </div>
          <ul className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-6">
            <li className="flex-1 opacity-0 animate-fade-in-top-250">
              <img
                className="h-52 rounded-full m-auto"
                src={solar}
                alt="solar planels"
              />
              <div className="text-center text-lg mt-5">Sustainability</div>
              <div className="text-center text-medium font-light mt-5">
                Laborum consequat aliquip et in dolore enim veniam laboris
                adipisicing.Non veniam fugiat culpa proident enim in esse.
              </div>
            </li>
            <li className="flex-1 opacity-0 animate-fade-in-top-500">
              <img
                className="h-52 rounded-full m-auto"
                src={variety}
                alt="solar planels"
              />
              <div className="text-center text-lg mt-5">Variety</div>
              <div className="text-center text-medium font-light mt-5">
                Eu deserunt cillum aliqua sint velit est et ad eu eiusmod
                aliquip aliqua ex.Consequat cillum commodo dolor ipsum fugiat in
                excepteur id sunt.
              </div>
            </li>
            <li className="flex-1 opacity-0 animate-fade-in-top-750">
              <img
                className="h-52 rounded-full m-auto"
                src={robot}
                alt="factory robot"
              />
              <div className="text-center text-lg mt-5">Innovation</div>
              <div className="text-center text-medium font-light mt-5">
                Excepteur cupidatat anim mollit excepteur ut quis.Elit nisi
                Lorem aliqua enim nostrud fugiat ex aliquip nostrud ullamco
                excepteur aute amet.
              </div>
            </li>
          </ul>
        </div>
      ) : undefined}
    </div>
  );
}
export default function Home() {
  return (
    <div id="home">
      <div className="bg-gradient-to-r from-teal-500 to-indigo-500">
        <div className="h-[540px] md:h-[720px] max-w-6xl mx-auto flex ">
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
                to="/store"
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
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
    </div>
  );
}
