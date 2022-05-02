import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ItemCard({ itemObj }) {
  return (
    <div className="block mx-auto text-center mb-4">
      <Link to={`./${itemObj.id}`}>
        <img className="h-72 mx-auto mb-2" src={itemObj.image} />
        <div className="font-semibold text-lg">{itemObj.name}</div>
        <div className="font-normal text-lg">${itemObj.price}</div>
      </Link>
      <div className="font-light text-lg">{itemObj.description}</div>
    </div>
  );
}

ItemCard.propTypes = {
  itemObj: PropTypes.object
};
