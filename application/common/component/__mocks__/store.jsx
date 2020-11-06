/* eslint-disable import/no-extraneous-dependencies */

import configureStore from 'redux-mock-store';
import configStateData from '../__data__/config.json';

const mockStore = configureStore([]);
const mockedStore = mockStore({
    config: configStateData,
    intl: {
        locale: 'en-EN',
        availableLocales: ['en-EN']
    }
});

export default mockedStore;
