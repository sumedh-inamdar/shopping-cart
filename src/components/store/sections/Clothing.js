import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../ItemCard';

export default function Clothing({ items, section, setSection }) {
  const setType = new Set(items.map((item) => item.type));
  useEffect(() => {
    setSection(section);
  });
  return (
    <div className="space-y-10 my-14">
      {[...setType].map((type) => (
        <div key={type}>
          <div className="text-3xl md:text-4xl font-medium my-3 text-center md:text-left">
            {type}
          </div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(225px,_1fr))]">
            {items
              .filter((item) => item.type === type)
              .map((item) => (
                <ItemCard itemObj={item} key={item.id} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
Clothing.propTypes = {
  items: PropTypes.array.isRequired,
  section: PropTypes.string.isRequired,
  setSection: PropTypes.func.isRequired
};
