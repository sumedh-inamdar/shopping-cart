import React, { useEffect, useState } from 'react';
import { Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import { categoryRouteMapping, storeItems } from '../../data/data';
import Clothing from './Clothing';
import ItemPage from './ItemPage';
import Racquets from './Racquets';
import Shoes from './Shoes';
// import StoreHome from './StoreHome';
import Strings from './Strings';
import PropTypes from 'prop-types';

export default function Store({ cart, setCart }) {
  const [section, setSection] = useState('racquets');
  const navigate = useNavigate();
  const setCategories = new Set(storeItems.map((item) => item.category));
  const arrayRacquets = storeItems.filter(
    (item) => item.category === 'Tennis Racquets'
  );
  const arrayMensClothing = storeItems.filter(
    (item) => item.category === `Men's Clothing`
  );
  const arrayWomensClothing = storeItems.filter(
    (item) => item.category === `Women's Clothing`
  );

  useEffect(() => {
    document
      .querySelectorAll(`.section`)
      .forEach((el) => el.classList.remove('activeSection'));
    document.querySelector(`#${section}`).classList.add('activeSection');
  }, [section]);

  function handleSelect(event) {
    const path = event.target.value;
    setSection(path);
    navigate(`./${path}`);
  }

  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
      <div className="md:hidden mx-5 mt-5 text-3xl">
        <select
          value={section}
          onChange={handleSelect}
          className="bg-gradient-to-r from-teal-200 to-indigo-200 px-2 py-3">
          {[...setCategories].map((category) => {
            const path = categoryRouteMapping.get(category);
            return (
              <option key={path} value={path}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
      <div className="hidden md:block basis-60 mt-10 shrink-0">
        <ul className="space-y-6 mx-6">
          {[...setCategories].map((category) => {
            const path = categoryRouteMapping.get(category);
            return (
              <li id={path} className="section" key={path}>
                <Link to={`/store/${path}`} onClick={() => setSection(path)}>
                  {category}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex-1 mx-5">
        <Routes>
          <Route path="/" element={<Navigate to={`./${section}`} />} />
          <Route
            path="/racquets"
            element={<Racquets items={arrayRacquets} setSection={setSection} />}
          />
          <Route
            path="/racquets/:id"
            element={
              <ItemPage setSection={setSection} cart={cart} setCart={setCart} />
            }
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
            element={
              <ItemPage setSection={setSection} cart={cart} setCart={setCart} />
            }
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
            element={
              <ItemPage setSection={setSection} cart={cart} setCart={setCart} />
            }
          />
          <Route path="/shoes" element={<Shoes setSection={setSection} />} />
          <Route
            path="/strings"
            element={<Strings setSection={setSection} />}
          />
        </Routes>
      </div>
    </div>
  );
}
Store.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func
};
