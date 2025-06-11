import { render, screen } from '@testing-library/react';
import Address from './Address';

describe('Address Component', () => {
  it('renders address information', () => {
    render(<Address />);
    expect(screen.getByText(/address/i)).toBeInTheDocument();
  });
});