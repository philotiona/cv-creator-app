import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button text="Click me" />);
    expect(screen.getByText(/Click me/i)).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button text="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Click me/i));
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders with custom class', () => {
    render(<Button text="Click me" classChanger="customClass" />);
    expect(document.querySelector('.customClass')).toBeInTheDocument();
  });

  it('renders with icon', () => {
    const icon = <span data-testid="test-icon">Icon</span>;
    render(<Button text="Click me" icon={icon} />);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('displays correct text content', () => {
    render(<Button text="Submit Form" />);
    expect(screen.getByRole('button')).toHaveTextContent('Submit Form');
  });
});