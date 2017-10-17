/* eslint-disable import/no-extraneous-dependencies */

import configureStore from 'redux-mock-store';
import configData from '../__data__/config.json';

const mockStore = configureStore([]);
const mockedStore = mockStore({
    config: configData,
    intl: {
        locale: 'en-EN',
        availableLocales: ['en-EN']
    }
});

export default mockedStore;
