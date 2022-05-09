import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { storeItems } from '../../data/data';
import Clothing from './sections/Clothing';
import ItemPage from './ItemPage/ItemPage';
import Racquets from './sections/Racquets';
import Strings from './sections/Strings';
import StoreDropdown from './StoreDropdown';
import StoreNav from './StoreNav';

export default function Store() {
  const [section, setSection] = useState('racquets');

  const arrayRacquets = storeItems.filter(
    (item) => item.category === 'Tennis Racquets'
  );
  const arrayMensClothing = storeItems.filter(
    (item) => item.category === `Men's Clothing`
  );
  const arrayWomensClothing = storeItems.filter(
    (item) => item.category === `Women's Clothing`
  );
  const arrayStrings = storeItems.filter((item) => item.category === `Strings`);

  // applies styling to active store section in side nav
  useEffect(() => {
    document
      .querySelectorAll(`.section`)
      .forEach((el) => el.classList.remove('activeSection'));
    document.querySelector(`#${section}`).classList.add('activeSection');
  }, [section]);

  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row px-6">
      <div className="md:hidden mx-5 mt-5 text-3xl">
        <StoreDropdown section={section} setSection={setSection} />
      </div>
      <div className="hidden md:block basis-60 mt-10 shrink-0">
        <StoreNav setSection={setSection} />
      </div>
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Navigate to={`./${section}`} />} />
          <Route
            path="/racquets"
            element={<Racquets items={arrayRacquets} setSection={setSection} />}
          />
          <Route
            path="/racquets/:id"
            element={<ItemPage setSection={setSection} />}
          />
          <Route
            path="/mensClothing"
            element={
              <Clothing
                items={arrayMensClothing}
                section="mensClothing"
                setSection={setSection}
              />
            }
          />
          <Route
            path="/mensClothing/:id"
            element={<ItemPage setSection={setSection} />}
          />
          <Route
            path="/womensClothing"
            element={
              <Clothing
                section="womensClothing"
                items={arrayWomensClothing}
                setSection={setSection}
              />
            }
          />
          <Route
            path="/womensClothing/:id"
            element={<ItemPage setSection={setSection} />}
          />
          <Route
            path="/strings"
            element={<Strings items={arrayStrings} setSection={setSection} />}
          />
          <Route
            path="/strings/:id"
            element={<ItemPage setSection={setSection} />}
          />
        </Routes>
      </div>
    </div>
  );
}
