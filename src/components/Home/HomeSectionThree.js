import React from 'react';
import solar from '../../assets/homepage-solar.jpg';
import variety from '../../assets/homepage-variety.jpg';
import robot from '../../assets/homepage-robot.jpg';
import { useInView } from 'react-intersection-observer';

export default function HomeSectionThree() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  return (
    <div className="bg-white min-h-[350px] py-12 md:py-32 px-6" ref={ref}>
      {inView ? (
        <div className="max-w-6xl mx-auto space-y-10 md:space-y-16">
          <div className="text-4xl md:text-5xl text-center animate-fade-in-top-0">
            {`Why You'll Love TENNSCENTRL`}
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
