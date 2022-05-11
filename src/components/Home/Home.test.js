/* eslint-disable unicorn/no-null */
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

test('snapshot', () => {
  const { container } = render(<Home />, { wrapper: BrowserRouter });
  expect(container).toMatchSnapshot();
});

describe('intersection observer', () => {
  it('render items upon view', () => {
    render(<Home />, { wrapper: BrowserRouter });

    expect(screen.queryByText('Featured Collections')).toBeNull();
    expect(screen.queryByText(`Why You'll Love TENNSCENTRL`)).toBeNull();
    mockAllIsIntersecting(true);
    expect(screen.queryByText('Featured Collections')).not.toBeNull();
    expect(screen.queryByText(`Why You'll Love TENNSCENTRL`)).not.toBeNull();
  });
});
