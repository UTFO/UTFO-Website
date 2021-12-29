import { render, screen } from '@testing-library/react';
import Home from '.';

test('renders blurb', () => {
  render(<Home />);
  const blurbElement = screen.getByText(/UTFO will not charge/);
  expect(blurbElement).toBeInTheDocument();
});
