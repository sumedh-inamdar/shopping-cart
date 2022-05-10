import React, { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';
import ShoppingCart from './ShoppingCart';
import DesktopMenu from './DesktopMenu';
import HamburgerButton from './HamburgerButton';
import CompanyLogo from './CompanyLogo';

export default function Nav() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  useEffect(() => {
    if (mobileMenuVisible)
      window.addEventListener('click', mobileMenuClickHandler);
    return () => {
      window.removeEventListener('click', mobileMenuClickHandler);
    };
  }, [mobileMenuVisible]);

  function mobileMenuClickHandler(event) {
    if (event.target.closest('nav') === null) closeMobileMenu();
  }

  function closeMobileMenu() {
    setMobileMenuVisible(false);
    window.removeEventListener('click', mobileMenuClickHandler);
  }

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between">
          <HamburgerButton
            mobileMenuVisible={mobileMenuVisible}
            setMobileMenuVisible={setMobileMenuVisible}
          />
          <div className="flex space-x-7 min-w-fit">
            <CompanyLogo clickHandler={closeMobileMenu} />
            <DesktopMenu />
          </div>
          <ShoppingCart clickHandler={closeMobileMenu} />
        </div>
      </div>
      {mobileMenuVisible && <MobileMenu clickHandler={closeMobileMenu} />}
    </nav>
  );
}
