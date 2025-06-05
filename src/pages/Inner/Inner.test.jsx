import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Inner from './Inner';

describe('Inner Page', () => {
  it('renders main content sections', () => {
    render(
      <Provider store={store}>
        <Inner />
      </Provider>
    );
    expect(screen.getByText(/about me/i)).toBeInTheDocument();
  });
});