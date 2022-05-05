import React from 'react';
import { Link } from 'react-router-dom';

export default function DesktopMenu() {
  return (
    <div className="hidden md:flex items-center space-x-1">
      <Link
        className="py-4 px-2 navLink text-2xl font-light hover:text-zinc-600 transition duration-300"
        to="/">
        HOME
      </Link>
      <Link
        className="py-4 px-2 navLink text-2xl font-light hover:text-zinc-600 transition duration-300"
        to="/store">
        STORE
      </Link>
      <Link
        className="py-4 px-2 navLink text-2xl font-light hover:text-zinc-600 transition duration-300"
        to="/about">
        ABOUT
      </Link>
    </div>
  );
}
