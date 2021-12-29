import { render, screen } from '@testing-library/react';
import App from './App';

test('renders blurb', () => {
  render(<App />);
  const linkElement = screen.getByText(/UTFO/);
  expect(linkElement).toBeInTheDocument();
});
