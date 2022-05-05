import React from 'react';
import '@testing-library/jest-dom'; // optional
// import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  it('render navigation bar', () => {
    render(<App />);
    expect(screen.getByRole('navigation')).toMatch();
  });
});
