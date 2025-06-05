import { render, screen } from '@testing-library/react';
import Info from './Info';

describe('Info Component', () => {
  it('renders text content', () => {
    const testText = 'Test Information';
    render(<Info text={testText} />);
    expect(screen.getByText(testText)).toBeInTheDocument();
  });
});