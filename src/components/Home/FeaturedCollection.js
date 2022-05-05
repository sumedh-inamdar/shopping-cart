import React from 'react';
import PropTypes from 'prop-types';

export default function FeaturedCollection({
  animation,
  showAnimation,
  image,
  title
}) {
  return (
    <li
      className={`${animation} space-y-4 cursor-pointer opacity-0 animate-hold`}>
      <div className="hover:scale-105 transition-transform hover:text-red-500 duration-200">
        <img
          onLoad={showAnimation}
          src={image}
          className="m-auto w-64 shadow-xl"
        />
        <p>{title}</p>
      </div>
    </li>
  );
}
FeaturedCollection.propTypes = {
  animation: PropTypes.string,
  showAnimation: PropTypes.func,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
