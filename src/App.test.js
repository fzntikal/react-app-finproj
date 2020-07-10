import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders stuff', () => {
  const { getByText }  = render(<App />);
  const linkElement = getByText(/welcome/ig);
  expect(linkElement).toBeInTheDocument();
});