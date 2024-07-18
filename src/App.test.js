import { render, screen } from '@testing-library/react';
import AppMain from './AppMain';

test('renders learn react link', () => {
  render(<AppMain />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
