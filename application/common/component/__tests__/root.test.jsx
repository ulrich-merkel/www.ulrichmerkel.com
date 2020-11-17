import * as React from 'react';
import { getMockedStore } from '../../../__tests__/utils/get-mocked-store';
import { render } from '../../../__tests__/utils/test-utils';
import { Root } from '../root';

describe('Root', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const store = getMockedStore();
        const { asFragment } = render(
            <Root store={store}>
                <div />
            </Root>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
