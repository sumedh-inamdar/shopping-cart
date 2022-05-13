import React from 'react';
import PropTypes from 'prop-types';
import { calcCartItemPrice } from '../../../utils/helperFunc';

export default function ItemOption({ options, cartItemObj, setCartItemObj }) {
  return options.map((optionObj) => {
    const optionName = Object.keys(optionObj)[0];
    const optionsValue = cartItemObj.options.find(
      (option) => Object.keys(option)[0] === optionName
    )[optionName];

    function optionsHandler(event) {
      const optionValue = event.target.value;
      const optionsStateCopy = cartItemObj.options.map((option) =>
        Object.assign({}, option)
      );
      const targetOption = optionsStateCopy.find(
        (option) => option[optionName]
      );
      targetOption[optionName] = optionValue;
      setCartItemObj({
        ...cartItemObj,
        options: optionsStateCopy,
        unitPrice: calcCartItemPrice(cartItemObj.item.price, optionsStateCopy)
      });
    }
    return (
      <div className="flex" key={optionName}>
        <div className="w-fit">{optionName}: </div>
        <select
          aria-label={optionName}
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
  cartItemObj: PropTypes.object,
  setCartItemObj: PropTypes.func
};
