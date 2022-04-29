import React from 'react';
import ground from '../assets/about-ground.jpg';
import shop from '../assets/about-shop.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function displayLabel(event) {
  event.target
    .closest('.labelParent')
    .querySelector('.activeSection').style.opacity = '1';
}

function removeLabel(event) {
  event.target
    .closest('.labelParent')
    .querySelector('.activeSection').style.opacity = '0';
}

export default function About() {
  return (
    <div className="">
      <div className="bg-tennis-court bg-bottom bg-cover bg-fixed bg-no-repeat h-[750px] md:w-full">
        <div className="flex text-5xl h-full w-full md:w-1/2 text-white justify-center items-center">
          About Us
        </div>
      </div>
      <div className="flex flex-col items-center max-w-6xl mx-auto px-6 py-12 md:py-32 space-y-8">
        <h1 className="text-4xl md:text-5xl md:mb-12">How it all started</h1>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
          <div className="flex-1 shadow-xl">
            <img src={ground} />
          </div>
          <div className="flex-1 flex self-center text-xl font-light text-justify leading-loose">
            Aliqua in anim ut velit eu ipsum minim Lorem dolore culpa. Do sit in
            dolor et ipsum dolore nostrud labore deserunt fugiat. Occaecat
            laborum sint adipisicing reprehenderit amet culpa pariatur amet sint
            irure elit et sit incididunt. Dolore laborum voluptate magna anim
            culpa deserunt laboris. Cupidatat dolor laborum sit esse.
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="flex-1 flex self-center text-xl font-light text-justify leading-loose">
            Aliqua in anim ut velit eu ipsum minim Lorem dolore culpa. Do sit in
            dolor et ipsum dolore nostrud labore deserunt fugiat. Occaecat
            laborum sint adipisicing reprehenderit amet culpa pariatur amet sint
            irure elit et sit incididunt. Dolore laborum voluptate magna anim
            culpa deserunt laboris. Cupidatat dolor laborum sit esse.
          </div>
          <div className="flex-1 shadow-xl order-first md:order-last mb-6 md:mb-0">
            <img src={shop} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center max-w-6xl mx-auto px-6 pb-12 md:pb-32 space-y-8">
        <h1 className="text-4xl md:text-5xl md:mb-6">Contact Us</h1>
        <div className="font-light text-xl">
          Questions? Comments? We{`'`}d love to hear from you
        </div>
        <div className="flex justify-around w-full">
          <div className="labelParent">
            <a href="mailto:sinamdar@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-6xl mb-2"
                onMouseEnter={displayLabel}
                onMouseLeave={removeLabel}
              />
            </a>
            <div className="opacity-0 transition-opacity text-center activeSection">
              Email
            </div>
          </div>
          <div className="labelParent">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-6xl mb-2"
              onMouseEnter={displayLabel}
              onMouseLeave={removeLabel}
            />
            <div className="opacity-0 transition-opacity text-center activeSection">
              Phone
            </div>
          </div>
          <div className="labelParent">
            <a
              href="https://github.com/sumedh-inamdar"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-6xl mb-2"
                onMouseEnter={displayLabel}
                onMouseLeave={removeLabel}
              />
            </a>
            <div className="opacity-0 transition-opacity text-center activeSection">
              Github
            </div>
          </div>
          <div className="labelParent">
            <a
              href="https://www.linkedin.com/in/sumedhi/"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-6xl mb-2"
                onMouseEnter={displayLabel}
                onMouseLeave={removeLabel}
              />
            </a>
            <div className="opacity-0 transition-opacity text-center activeSection">
              LinkedIn
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
