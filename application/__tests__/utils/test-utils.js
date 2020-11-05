import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

import configData from '../data/config.json';

// @see {@link https://testing-library.com/docs/react-testing-library/setup}
function AllTheProviders({ children }) {
    const mockStore = configureStore([]);
    const mockedStore = mockStore({
        config: configData,
        intl: {
            locale: 'en-EN',
            availableLocales: ['en-EN']
        }
    });

    return (
        <Provider store={mockedStore}>
            <MemoryRouter>{children}</MemoryRouter>
        </Provider>
    );
}

const customRender = (ui, options) =>
    render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
