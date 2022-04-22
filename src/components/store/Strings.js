import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

export default function Strings({ items, setSection }) {
  const setMaterials = new Set(items.map((item) => item.material));
  useEffect(() => {
    setSection('strings');
  });
  return (
    <div className="space-y-14 mt-5 md:mt-10">
      {[...setMaterials].map((material) => (
        <div key={material}>
          <div className="text-3xl font-medium my-3">{material}</div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 md:min-w-[600px]">
            {items
              .filter((item) => item.material === material)
              .map((item) => (
                <ItemCard itemObj={item} key={item.id} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
Strings.propTypes = {
  items: PropTypes.array,
  setSection: PropTypes.func
};
