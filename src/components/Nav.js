import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="flex justify-around items-center h-12 bg-gray-400 text-white">
      <h3>Logo</h3>
      <ul className="flex w-1/2 justify-around items-center list-none">
        <Link className="navLink" to="/">
          <li>Home</li>
        </Link>
        <Link className="navLink" to="/store">
          <li>Store</li>
        </Link>
        <Link className="navLink" to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}
