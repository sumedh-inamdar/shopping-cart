import React from 'react';
import { Link } from 'react-router-dom';
import { categoryRouteMapping, store } from '../data/store';

export default function Store() {
  const setCategories = new Set(store.map((item) => item.category));

  return (
    <div className="h-[720px] max-w-6xl mx-auto flex">
      <div className="basis-60 text-center mt-10">
        <ul className="space-y-6">
          {[...setCategories].map((category) => (
            <li key={category}>
              <Link
                key={categoryRouteMapping.get(category)}
                to={`/${categoryRouteMapping.get(category)}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1">Store Items</div>
    </div>
  );
}
