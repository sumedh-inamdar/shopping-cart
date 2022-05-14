/* eslint-disable unicorn/no-null */
import React from 'react';
import '@testing-library/jest-dom'; // optional
import { render, screen, within } from '@testing-library/react';
import App from './App';
import 'react-intersection-observer/test-utils';
import userEvent from '@testing-library/user-event';

window.scrollTo = jest.fn();
const resizeWindow = (x, y) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
};

test('snapshot', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

describe('Navigation Bar Links', () => {
  it('shop now -> store', () => {
    render(<App />);
    expect(screen.queryByRole('list', { name: 'store-nav-list' })).toBeNull();
    expect(screen.queryByText('Babolat')).toBeNull();

    userEvent.click(screen.getByRole('button', { name: 'Shop Now' }));

    expect(
      screen.queryByRole('list', { name: 'store-nav-list' })
    ).not.toBeNull();
    expect(screen.getByText('Babolat')).toBeInTheDocument();
  });

  it('home -> about', () => {
    render(<App />);
    expect(screen.queryByText('How it all started')).toBeNull();

    userEvent.click(screen.getByRole('link', { name: 'ABOUT' }));

    expect(screen.queryByText('How it all started')).not.toBeNull();
  });

  it('home -> checkout', () => {
    render(<App />);
    expect(screen.queryByText('Your cart is empty')).toBeNull();

    userEvent.click(screen.getByRole('link', { name: 'shopping-cart' }));

    expect(screen.queryByText('Your cart is empty')).not.toBeNull();
  });
});

describe('cart add', () => {
  it('add items and checkout', () => {
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: /store/i }));
    userEvent.click(screen.getByText(/babolat pure aero/i));
    userEvent.click(screen.getByRole('button', { name: /add to cart/i }));
    userEvent.selectOptions(
      screen.getByRole('combobox', { name: /grip size/i }),
      screen.getByRole('option', { name: /#3/i })
    );
    userEvent.selectOptions(
      screen.getByRole('combobox', { name: /strings/i }),
      screen.getByRole('option', { name: /polyester/i })
    );
    userEvent.clear(screen.getByRole('spinbutton'));
    userEvent.type(screen.getByRole('spinbutton'), '2');
    userEvent.click(screen.getByRole('button', { name: /add to cart/i }));
    userEvent.click(screen.getByRole('button', { name: /view cart/i }));
    expect(screen.getByText(/my cart/i)).toHaveTextContent('My Cart (3 items)');
    expect(screen.getAllByText(/babolat pure aero/i)).toHaveLength(2);
    expect(screen.getByText(/\$346\.47/i)).toBeInTheDocument();

    userEvent.click(screen.getAllByText(/babolat pure aero/i)[0]);
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument();
  });
});

describe('Store Navigation', () => {
  it('desktop store nav', () => {
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: /store/i }));
    const list = screen.getByRole('list', { name: /store-nav-list/i });
    userEvent.click(
      within(list).getByRole('link', { name: /women's clothing/i })
    );
    expect(screen.getByText(/dresses/i)).toBeInTheDocument();
    userEvent.click(within(list).getByRole('link', { name: /strings/i }));
    expect(screen.getByText(/polyester/i)).toBeInTheDocument();
    userEvent.click(within(list).getByRole('link', { name: `Men's Clothing` }));
    expect(screen.getByText(/jackets/i)).toBeInTheDocument();
  });

  it('mobile store nav', () => {
    resizeWindow(390, 844);
    render(<App />);
    userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: /strings/i })
    );
    expect(screen.getByText(/polyester/i)).toBeInTheDocument();
    userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: /tennis racquets/i })
    );
    expect(screen.getByText(/babolat pure aero/i)).toBeInTheDocument();
  });
});

describe('Checkout page', () => {
  it('empty cart render + shop now', () => {
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: /shopping-cart/i }));
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /shop now/i }));
    expect(screen.getByText(/babolat pure aero/i)).toBeInTheDocument();
  });
});
