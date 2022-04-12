import React from 'react';
import PropTypes from 'prop-types';

export default function ItemOption({ options, optionsState, setOptions }) {
  return options.map((optionObj) => {
    const optionName = Object.keys(optionObj)[0];
    const optionsValue = optionsState.find(
      (option) => Object.keys(option)[0] === optionName
    )[optionName];

    function optionsHandler(event) {
      const optionValue = event.target.value;
      const optionsStateCopy = optionsState.map((option) =>
        Object.assign({}, option)
      );
      const targetOption = optionsStateCopy.find(
        (option) => option[optionName]
      );
      targetOption[optionName] = optionValue;
      setOptions(optionsStateCopy);
    }
    return (
      <div className="flex" key={optionName}>
        <div className="w-fit">{optionName}: </div>
        <select
          value={optionsValue}
          onChange={optionsHandler}
          className="ml-2 font-light">
          {optionObj[optionName].map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  });
}
ItemOption.propTypes = {
  options: PropTypes.array,
  optionsState: PropTypes.array,
  setOptions: PropTypes.func
};
