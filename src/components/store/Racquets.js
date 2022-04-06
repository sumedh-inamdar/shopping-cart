import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

export default function Racquets({ items }) {
  const setBrands = new Set(items.map((item) => item.brand));
  return (
    <div>
      <div className="text-5xl font-semibold my-6">Tennis Racquets</div>
      {[...setBrands].map((brand) => (
        <div key={brand}>
          <div className="text-3xl font-medium my-3">{brand}</div>
          <div className="grid gap-4 grid-cols-3 min-w-[600px]">
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
  items: PropTypes.array
};
