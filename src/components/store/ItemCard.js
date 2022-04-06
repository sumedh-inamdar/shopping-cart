import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ItemCard({ itemObj }) {
  return (
    <div className="block mx-auto text-center">
      <Link to={`./${itemObj.id}`}>
        <img className="h-72 m-auto" src={itemObj.image} />
        <div className="mt-6 font-semibold text-lg">{itemObj.name}</div>
        <div className="mt-1 font-normal text-lg">${itemObj.price}</div>
      </Link>
      <div className="mt-1 font-light text-lg">{itemObj.description}</div>
    </div>
  );
}

ItemCard.propTypes = {
  itemObj: PropTypes.object
};
