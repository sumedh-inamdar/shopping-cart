import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import 'react-intersection-observer/test-utils';
import ItemQuantity from './ItemQuantity';

describe('Quantity user input test', () => {
  const cartItemObj = { quantity: 1 };
  const setCartItemObj = jest.fn();
  it('text input', () => {
    render(
      <ItemQuantity cartItemObj={cartItemObj} setCartItemObj={setCartItemObj} />
    );
    userEvent.clear(screen.getByRole('spinbutton'));
    userEvent.type(screen.getByRole('spinbutton'), '23');
    expect(setCartItemObj).toHaveBeenCalledTimes(3);
    expect(setCartItemObj).toHaveBeenNthCalledWith(1, { quantity: 0 });
    expect(setCartItemObj).toHaveBeenNthCalledWith(2, { quantity: 2 });
    expect(setCartItemObj).toHaveBeenNthCalledWith(3, { quantity: 23 });
  });

  it('increment/decrement buttons', () => {
    render(
      <ItemQuantity cartItemObj={cartItemObj} setCartItemObj={setCartItemObj} />
    );
    userEvent.click(screen.getByRole('button', { name: /\+/i }));
    userEvent.click(screen.getByRole('button', { name: /-/i }));
    userEvent.click(screen.getByRole('button', { name: /-/i }));
    expect(setCartItemObj).toHaveBeenCalledTimes(3);
    expect(setCartItemObj).toHaveBeenNthCalledWith(1, { quantity: 2 });
    expect(setCartItemObj).toHaveBeenNthCalledWith(2, { quantity: 1 });
    expect(setCartItemObj).toHaveBeenNthCalledWith(3, { quantity: 1 });
  });
});
