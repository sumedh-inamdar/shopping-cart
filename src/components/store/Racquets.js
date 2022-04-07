import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

export default function Racquets({ items, setSection }) {
  const setBrands = new Set(items.map((item) => item.brand));
  useEffect(() => {
    setSection('racquets');
  });
  return (
    <div className="space-y-14 mt-10">
      {[...setBrands].map((brand) => (
        <div key={brand}>
          <div className="text-3xl font-medium my-3">{brand}</div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 md:min-w-[600px]">
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
