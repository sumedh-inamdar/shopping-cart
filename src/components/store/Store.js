import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { categoryRouteMapping, storeItems } from '../../data/data';
import Clothing from './Clothing';
import ItemPage from './ItemPage';
import Racquets from './Racquets';
import Shoes from './Shoes';
import StoreHome from './StoreHome';
import Strings from './Strings';

export default function Store() {
  const setCategories = new Set(storeItems.map((item) => item.category));
  const arrayRacquets = storeItems.filter(
    (item) => item.category === 'Tennis Racquets'
  );

  return (
    <div className="max-w-6xl mx-auto flex">
      <div className="basis-60 text-center mt-10">
        <ul className="space-y-6">
          {[...setCategories].map((category) => (
            <li key={category}>
              <Link
                key={categoryRouteMapping.get(category)}
                to={`/store/${categoryRouteMapping.get(category)}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<StoreHome />} />
          <Route
            path="/racquets"
            element={<Racquets items={arrayRacquets} />}
          />
          <Route path="/racquets/:id" element={<ItemPage />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/strings" element={<Strings />} />
        </Routes>
      </div>
    </div>
  );
}
