import React from 'react';
import { useNavigate } from 'react-router-dom';
import { storeItems, categoryRouteMapping } from '../../data/data';
import PropTypes from 'prop-types';

export default function StoreDropdown({ section, setSection }) {
  const navigate = useNavigate();

  const setCategories = new Set(storeItems.map((item) => item.category));

  function handleSelect(event) {
    const path = event.target.value;
    setSection(path);
    navigate(`./${path}`);
  }

  return (
    <select
      value={section}
      onChange={handleSelect}
      className="bg-gradient-to-r from-teal-200 to-indigo-200 px-2 py-3 w-full text-center">
      {[...setCategories].map((category) => {
        const path = categoryRouteMapping.get(category);
        return (
          <option key={path} value={path}>
            {category}
          </option>
        );
      })}
    </select>
  );
}
StoreDropdown.propTypes = {
  section: PropTypes.string.isRequired,
  setSection: PropTypes.func.isRequired
};
