import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../ItemCard';

export default function Racquets({ items, setSection }) {
  const setBrands = new Set(items.map((item) => item.brand));
  useEffect(() => {
    setSection('racquets');
  });
  return (
    <div className="space-y-10 my-14">
      {[...setBrands].map((brand) => (
        <div key={brand}>
          <div className="text-3xl md:text-4xl font-medium my-5 text-center md:text-left">
            {brand}
          </div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(225px,_1fr))]">
            {items
              .filter((item) => item.brand === brand)
              .map((item) => (
                <ItemCard itemObj={item} key={item.id} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
Racquets.propTypes = {
  items: PropTypes.array,
  setSection: PropTypes.func
};
