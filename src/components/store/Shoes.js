import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Shoes({ setSection }) {
  useEffect(() => {
    setSection('shoes');
  });
  return <div>Shoes</div>;
}
Shoes.propTypes = {
  setSection: PropTypes.func
};
