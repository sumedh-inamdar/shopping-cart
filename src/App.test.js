/* eslint-disable unicorn/no-null */
import React from 'react';
import '@testing-library/jest-dom'; // optional
// import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from './App';
window.scrollTo = jest.fn();

describe('App component', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('render navigation bar', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /tenns centrl/i }));
    // expect(screen.getByRole('navigation')).toMatch();
  });
});
