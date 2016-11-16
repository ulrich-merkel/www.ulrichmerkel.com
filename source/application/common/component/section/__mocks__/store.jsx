/* eslint-disable import/no-extraneous-dependencies */

import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const mockedStore = mockStore({});

export default mockedStore;
