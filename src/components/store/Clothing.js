import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

export default function Clothing({ items, section, setSection }) {
  const setType = new Set(items.map((item) => item.type));
  useEffect(() => {
    setSection(section);
  });
  return (
    <div className="space-y-14 mt-5 md:mt-10">
      {[...setType].map((type) => (
        <div key={type}>
          <div className="text-3xl font-medium my-3">{type}</div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 md:min-w-[600px]">
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
