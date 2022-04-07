import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Clothing({ setSection }) {
  useEffect(() => {
    setSection('clothing');
  });
  return <div>Clothing</div>;
}
Clothing.propTypes = {
  setSection: PropTypes.func
};
