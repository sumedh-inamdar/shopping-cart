import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import 'react-intersection-observer/test-utils';
import AddButton from './AddButton';
import { CartContext, SetCartContext } from '../../../App';

describe('Add button', () => {
  const cartItemObj = {
    item: { price: 10, id: 1234 },
    options: [{ 'Grip Size': '4 1/8" (#1)' }, { Strings: 'Polyester - $15' }],
    quantity: 1,
    unitPrice: 25
  };
  const setCartItemObj = jest.fn();
  const setViewModal = jest.fn();
  const setCart = jest.fn();

  it('add to empty cart', () => {
    render(
      <CartContext.Provider value={[]}>
        <SetCartContext.Provider value={setCart}>
          <AddButton
            cartItemObj={cartItemObj}
            setCartItemObj={setCartItemObj}
            setViewModal={setViewModal}
          />
        </SetCartContext.Provider>
      </CartContext.Provider>
    );

    userEvent.click(screen.getByRole('button', { name: /add to cart/i }));

    expect(setCartItemObj).toHaveBeenCalledTimes(1);
    expect(setViewModal).toHaveBeenCalledTimes(1);
    expect(setCart).toHaveBeenCalledTimes(1);

    expect(setViewModal).toHaveBeenCalledWith(true);
    expect(setCart).toHaveBeenCalledWith([{ ...cartItemObj }]);
  });

  it('add to cart with existing item', () => {
    render(
      <CartContext.Provider value={[cartItemObj]}>
        <SetCartContext.Provider value={setCart}>
          <AddButton
            cartItemObj={{
              item: { price: 10, id: 1234 },
              options: [
                { 'Grip Size': '4 1/8" (#1)' },
                { Strings: 'Polyester - $15' }
              ],
              quantity: 1,
              unitPrice: 25
            }}
            setCartItemObj={setCartItemObj}
            setViewModal={setViewModal}
          />
        </SetCartContext.Provider>
      </CartContext.Provider>
    );

    userEvent.click(screen.getByRole('button', { name: /add to cart/i }));

    expect(setCartItemObj).toHaveBeenCalledTimes(0);
    expect(setViewModal).toHaveBeenCalledTimes(1);
    expect(setCart).toHaveBeenCalledTimes(1);

    expect(setViewModal).toHaveBeenCalledWith(true);
    expect(setCart).toHaveBeenCalledWith([{ ...cartItemObj, quantity: 2 }]);
  });
});
