/* eslint-disable unicorn/no-null */
import React from 'react';
import '@testing-library/jest-dom'; // optional
import { render, screen } from '@testing-library/react';
import App from './App';
import 'react-intersection-observer/test-utils';
import userEvent from '@testing-library/user-event';

window.scrollTo = jest.fn();

test('snapshot', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

describe('Site Navigation', () => {
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
    expect(screen.getByRole('option', { name: /#3/i }).selected).toBe(true);
    userEvent.selectOptions(
      screen.getByRole('combobox', { name: /strings/i }),
      screen.getByRole('option', { name: /polyester/i })
    );
    expect(screen.getByRole('option', { name: /polyester/i }).selected).toBe(
      true
    );
    userEvent.type(screen.getByRole('spinbutton'), '2');
  });
});
