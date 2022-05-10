import '@testing-library/jest-dom';
import { getByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from '../../App';
import Nav from './Nav';

const resizeWindow = (x, y) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
};

describe('Nav component', () => {
  const cart = [];

  it('snapshot check', () => {
    const { container } = render(
      <CartContext.Provider value={cart}>
        <Nav />
      </CartContext.Provider>,
      { wrapper: BrowserRouter }
    );
    expect(container).toMatchSnapshot();
  });

  it('mobile menu render', () => {
    resizeWindow(390, 844);
    render(
      <CartContext.Provider value={cart}>
        <Nav />
      </CartContext.Provider>,
      { wrapper: BrowserRouter }
    );
    expect(screen.queryByRole('link', { name: 'home-mobile-menu' })).toBeNull();

    const hamburger = screen.getByRole('button', { name: /hamburger/i });
    userEvent.click(hamburger);

    expect(
      screen.getByRole('link', { name: 'home-mobile-menu' })
    ).toBeVisible();
  });

  it('shopping cart quantity 0', () => {
    render(
      <CartContext.Provider value={cart}>
        <Nav />
      </CartContext.Provider>,
      { wrapper: BrowserRouter }
    );
    const shoppingCart = screen.getByRole('link', { name: 'shopping-cart' });
    expect(getByText(shoppingCart, 0)).toBeInTheDocument();
  });

  it('shopping cart quantity 5', () => {
    cart.push({ quantity: 2 }, { quantity: 3 });
    render(
      <CartContext.Provider value={cart}>
        <Nav />
      </CartContext.Provider>,
      { wrapper: BrowserRouter }
    );
    const shoppingCart = screen.getByRole('link', { name: 'shopping-cart' });
    expect(getByText(shoppingCart, 5)).toBeInTheDocument();
  });
});
