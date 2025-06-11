import { render, screen, fireEvent } from '@testing-library/react';
import Panel from './Panel';

describe('Panel Component', () => {
  it('renders panel content', () => {
    render(<Panel />);
    expect(screen.getByRole('complementary')).toBeInTheDocument();
  });

  it('toggles menu on button click', () => {
    render(<Panel />);
    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);
    expect(screen.getByRole('navigation')).toHaveClass('active');
  });
});