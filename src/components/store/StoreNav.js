import React from 'react';
import { storeItems, categoryRouteMapping } from '../../data/data';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function StoreNav({ setSection }) {
  const setCategories = new Set(storeItems.map((item) => item.category));

  return (
    <ul className="space-y-6 mx-6" aria-label="store-nav-list">
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
  );
}
StoreNav.propTypes = {
  setSection: PropTypes.func.isRequired
};
