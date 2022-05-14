import React from 'react';
import { render, screen } from '@testing-library/react';
import { CartContext } from '../../App';
import CheckoutList from './CheckoutList';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('CheckoutList tests', () => {
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

  it('check quantity, order total', () => {
    render(
      <CartContext.Provider value={cart}>
        <CheckoutList />
      </CartContext.Provider>,
      { wrapper: BrowserRouter }
    );

    expect(screen.getByText(/my cart/i)).toHaveTextContent('My Cart (5 items)');
    expect(screen.getByTestId('subTotal')).toHaveTextContent('$80.00');
    expect(screen.getByTestId('salesTax')).toHaveTextContent('$4.00');
    expect(screen.getByTestId('orderTotal')).toHaveTextContent('$84.00');
  });
});
