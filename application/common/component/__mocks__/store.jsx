/* eslint-disable import/no-extraneous-dependencies */

import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const mockedStore = mockStore({
    intl: {
        locale: 'en-EN',
        availableLocales: ['en-EN']
    }
});

export default mockedStore;
