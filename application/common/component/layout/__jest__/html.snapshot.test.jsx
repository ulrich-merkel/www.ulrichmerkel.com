/* eslint-disable import/no-extraneous-dependencies, func-names, import/first */
jest.mock('../../../utils/csp');

import * as React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Helmet from 'react-helmet';

import mockedStore from '../../__mocks__/store';
import ComponentToBeTested from '../html';

describe('component/layout/html', function () {
    describe('Snapshot', function () {

        // @see {@link https://github.com/nfl/react-helmet/issues/203}
        beforeEach(function () {
            Helmet.canUseDOM = false; // eslint-disable-line immutable/no-mutation
        });

        it('should render correctly', function () {
            const tree = renderer.create(
                <Provider store={mockedStore}>
                    <ComponentToBeTested cssBase={''} scriptBootstrap={''} store={mockedStore}>
                        Hello
                    </ComponentToBeTested>
                </Provider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
