import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Strings({ setSection }) {
  useEffect(() => {
    setSection('strings');
  });
  return <div>Strings</div>;
}
Strings.propTypes = {
  setSection: PropTypes.func
};
