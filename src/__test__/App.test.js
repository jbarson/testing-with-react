import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Moai Axe Tree', () => {
  render(<App />);
  const linkElement = screen.getByText("Moai Axe Tree");
  expect(linkElement).toBeInTheDocument();
});
