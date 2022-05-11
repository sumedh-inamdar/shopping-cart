import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import 'react-intersection-observer/test-utils';
import ItemOption from './ItemOption';

describe('select/option test', () => {
  const options = [
    {
      'Grip Size': [
        '4 1/8" (#1)',
        '4 1/4" (#2)',
        '4 3/8" (#3)',
        '4 1/2" (#4)',
        '4 5/8" (#5)'
      ]
    },
    {
      Strings: [
        'Unstrung',
        'Synthetic Gut - $10',
        'Polyester - $15',
        'Multifilament - $20',
        'Natural Gut - $40'
      ]
    }
  ];
  const cartItemObj = {
    options: [{ 'Grip Size': '4 1/8" (#1)' }, { Strings: 'Unstrung' }]
  };
  const setCartItemObj = jest.fn();

  it('Select options', () => {
    render(
      <ItemOption
        options={options}
        cartItemObj={cartItemObj}
        setCartItemObj={setCartItemObj}
      />
    );
    userEvent.selectOptions(
      screen.getByRole('combobox', { name: /grip size/i }),
      screen.getByRole('option', { name: /#3/i })
    );
    userEvent.selectOptions(
      screen.getByRole('combobox', { name: /strings/i }),
      screen.getByRole('option', { name: /polyester/i })
    );
    expect(setCartItemObj).toHaveBeenCalledTimes(2);
    expect(setCartItemObj).toHaveBeenNthCalledWith(1, {
      options: [{ 'Grip Size': '4 3/8" (#3)' }, { Strings: 'Unstrung' }]
    });
    expect(setCartItemObj).toHaveBeenNthCalledWith(2, {
      options: [{ 'Grip Size': '4 1/8" (#1)' }, { Strings: 'Polyester - $15' }]
    });
  });
});
