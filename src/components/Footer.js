import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="min-h-[200px] bg-indigo-500 text-white py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row space-y-9 md:space-y-0 px-4">
        <div className="flex-1 w-min space-y-4">
          <div className="text-xl font-bold">
            Join the TENNSCENTRL Mailing List
          </div>
          <div>Exclusive offers sent right to your inbox</div>
          <div className="flex mt-6">
            <input
              className="h-8 p-4 rounded-l bg-blue-50 hover:bg-white focus:bg-white focus:outline-none text-black"
              type="text"
              placeholder="Enter your email"
            />
            <button className="h-8 pt-1 w-24 bg-gray-900 text-white rounded-r transition hover:bg-indigo-700">
              Sign Up
            </button>
          </div>
        </div>
        <div className="flex-1 flex space-x-6">
          <ul className="flex-1 space-y-2">
            <div className="font-bold">TENNSCENTRL</div>
            <li>
              <Link to="/about">
                <div className="font-light">About</div>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <div className="font-light">Careers</div>
              </Link>
            </li>
          </ul>
          <ul className="flex-1 space-y-2">
            <div className="font-bold">SHOP</div>
            <li>
              <Link to="/store/racquets">
                <div className="font-light">Tennis Racquets</div>
              </Link>
            </li>
            <li>
              <Link to="/store/mensClothing">
                <div className="font-light">Men{"'"}s Clothing</div>
              </Link>
            </li>
            <li>
              <Link to="/store/womensClothing">
                <div className="font-light">Women{"'"}s Clothing</div>
              </Link>
            </li>
            <li>
              <Link to="/store/strings">
                <div className="font-light">Strings</div>
              </Link>
            </li>
          </ul>
          <ul className="flex-1 space-y-2">
            <div className="font-bold">CONTACT</div>
            <li>
              <a href="mailto:sinamdar@gmail.com">
                <div className="font-light">Email</div>
              </a>
            </li>
            <a
              href="https://github.com/sumedh-inamdar"
              target="_blank"
              rel="noreferrer">
              <div className="font-light">Github</div>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
