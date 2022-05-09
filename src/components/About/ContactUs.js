import React from 'react';
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

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto px-6 py-12 md:py-20 space-y-8 bg-slate-100">
      <h1 className="text-4xl md:text-5xl md:mb-6">Contact Us</h1>
      <div className="font-light text-xl text-center">
        Questions? Comments? We{`'`}d love to hear from you
      </div>
      <div className="flex justify-around w-full">
        <div
          className="labelParent text-center"
          onMouseEnter={displayLabel}
          onMouseLeave={removeLabel}>
          <a href="mailto:sinamdar@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="text-6xl" />
            <div className="opacity-0 transition-opacity text-center activeSection">
              Email
            </div>
          </a>
        </div>
        <div
          className="labelParent text-center"
          onMouseEnter={displayLabel}
          onMouseLeave={removeLabel}>
          <FontAwesomeIcon icon={faPhone} className="text-6xl mb-2" />
          <div className="opacity-0 transition-opacity text-center activeSection">
            Phone
          </div>
        </div>
        <div
          className="labelParent text-center"
          onMouseEnter={displayLabel}
          onMouseLeave={removeLabel}>
          <a
            href="https://github.com/sumedh-inamdar"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-6xl pb-2" />
            <div className="opacity-0 transition-opacity text-center activeSection">
              Github
            </div>
          </a>
        </div>
        <div
          className="labelParent text-center"
          onMouseEnter={displayLabel}
          onMouseLeave={removeLabel}>
          <a
            href="https://www.linkedin.com/in/sumedhi/"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-6xl pb-2" />
            <div className="opacity-0 transition-opacity text-center activeSection">
              LinkedIn
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
