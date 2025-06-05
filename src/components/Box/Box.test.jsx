import { render, screen } from '@testing-library/react';
import Box from './Box';

describe('Box Component', () => {
  it('renders with title and children', () => {
    render(
      <Box title="Test Title">
        <div>Test Content</div>
      </Box>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});