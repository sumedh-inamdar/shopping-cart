import React from 'react';
import { render, screen } from '@testing-library/react';
import { CartContext, SetCartContext } from '../../App';
import CheckoutItem from './CheckoutItem';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('CheckoutItem test', () => {
  const cart = [
    {
      item: { price: 10, id: 1234 },
      options: [{ 'Grip Size': '4 1/8" (#1)' }, { Strings: 'Polyester - $15' }],
      quantity: 2,
      unitPrice: 25,
      id: 1
    },
    {
      item: { price: 10, id: 2345 },
      options: [{ 'Grip Size': '4 1/8" (#1)' }, { Strings: 'Unstrung' }],
      quantity: 3,
      unitPrice: 10,
      id: 2
    }
  ];
  const setCart = jest.fn();
  const cartItem = cart[1];

  it('rendering of options, cartItem calculation', () => {
    render(
      <CartContext.Provider value={cart}>
        <SetCartContext.Provider value={setCart}>
          <CheckoutItem cartItem={cartItem} />
        </SetCartContext.Provider>
      </CartContext.Provider>,
      { wrapper: BrowserRouter }
    );
    expect(screen.getByText(/grip size:/i)).toHaveTextContent(
      'Grip Size: 4 1/8" (#1)'
    );
    expect(screen.getByText(/strings:/i)).toHaveTextContent(
      'Strings: Unstrung'
    );
    expect(screen.getByTestId('cartItemCost')).toHaveTextContent('$30.00');
  });

  it('delete item', () => {
    render(
      <CartContext.Provider value={cart}>
        <SetCartContext.Provider value={setCart}>
          <CheckoutItem cartItem={cartItem} />
        </SetCartContext.Provider>
      </CartContext.Provider>,
      { wrapper: BrowserRouter }
    );
    userEvent.click(screen.getByRole('button', { name: /remove item/i }));
    expect(setCart).toHaveBeenCalledWith([cart[0]]);
  });

  it('increase button', () => {
    render(
      <CartContext.Provider value={cart}>
        <SetCartContext.Provider value={setCart}>
          <CheckoutItem cartItem={cartItem} />
        </SetCartContext.Provider>
      </CartContext.Provider>,
      { wrapper: BrowserRouter }
    );
    userEvent.click(screen.getByRole('button', { name: /increasequantity/i }));
    expect(setCart).toHaveBeenNthCalledWith(1, [
      cart[0],
      { ...cart[1], quantity: 4 }
    ]);
  });

  it('decrease button', () => {
    render(
      <CartContext.Provider value={cart}>
        <SetCartContext.Provider value={setCart}>
          <CheckoutItem cartItem={cartItem} />
        </SetCartContext.Provider>
      </CartContext.Provider>,
      { wrapper: BrowserRouter }
    );
    userEvent.click(screen.getByRole('button', { name: /decreasequantity/i }));
    expect(setCart).toHaveBeenNthCalledWith(1, [
      cart[0],
      { ...cart[1], quantity: 2 }
    ]);
  });

  it('check qty guardband - increase', () => {
    cartItem.quantity = 100;
    render(
      <CartContext.Provider value={cart}>
        <SetCartContext.Provider value={setCart}>
          <CheckoutItem cartItem={cartItem} />
        </SetCartContext.Provider>
      </CartContext.Provider>,
      { wrapper: BrowserRouter }
    );
    userEvent.click(screen.getByRole('button', { name: /increasequantity/i }));
    expect(setCart).toHaveBeenCalledWith([
      cart[0],
      { ...cart[1], quantity: 100 }
    ]);
  });

  it('check qty guardband - decrease', () => {
    cartItem.quantity = 1;
    render(
      <CartContext.Provider value={cart}>
        <SetCartContext.Provider value={setCart}>
          <CheckoutItem cartItem={cartItem} />
        </SetCartContext.Provider>
      </CartContext.Provider>,
      { wrapper: BrowserRouter }
    );
    userEvent.click(screen.getByRole('button', { name: /decreasequantity/i }));
    expect(setCart).toHaveBeenCalledWith([
      cart[0],
      { ...cart[1], quantity: 1 }
    ]);
  });

  it('input qty change', () => {
    render(
      <CartContext.Provider value={cart}>
        <SetCartContext.Provider value={setCart}>
          <CheckoutItem cartItem={cartItem} />
        </SetCartContext.Provider>
      </CartContext.Provider>,
      { wrapper: BrowserRouter }
    );
    userEvent.clear(screen.getByRole('spinbutton'));
    userEvent.type(screen.getByRole('spinbutton'), '23');
    expect(setCart).toHaveBeenCalledTimes(3);
    expect(setCart).toHaveBeenNthCalledWith(1, [
      cart[0],
      { ...cart[1], quantity: 0 }
    ]);
    expect(setCart).toHaveBeenNthCalledWith(2, [
      cart[0],
      { ...cart[1], quantity: 2 }
    ]);
    expect(setCart).toHaveBeenNthCalledWith(3, [
      cart[0],
      { ...cart[1], quantity: 23 }
    ]);
  });

  it('input validity check', () => {
    render(
      <CartContext.Provider value={cart}>
        <SetCartContext.Provider value={setCart}>
          <CheckoutItem cartItem={cartItem} />
        </SetCartContext.Provider>
      </CartContext.Provider>,
      { wrapper: BrowserRouter }
    );

    userEvent.clear(screen.getByRole('spinbutton'));
    userEvent.type(screen.getByRole('spinbutton'), '-5');
    expect(setCart).toHaveBeenCalledTimes(2);
    expect(screen.getByRole('spinbutton')).toBeInvalid();
    userEvent.clear(screen.getByRole('spinbutton'));
    userEvent.type(screen.getByRole('spinbutton'), '5');
    expect(setCart).toHaveBeenCalledTimes(4);
    expect(screen.getByRole('spinbutton')).not.toBeInvalid();
  });
});
