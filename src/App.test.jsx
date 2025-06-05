import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

const renderWithProviders = (component) => {
	return render(
		<Provider store={store}>
			<BrowserRouter>{component}</BrowserRouter>
		</Provider>
	);
};

describe('App Component', () => {
	it('renders without crashing', () => {
		renderWithProviders(<App />);
		expect(document.querySelector('.app')).toBeInTheDocument();
	});

	it('renders home page by default', () => {
		renderWithProviders(<App />);
		expect(screen.getByText(/Know More/i)).toBeInTheDocument();
	});
});