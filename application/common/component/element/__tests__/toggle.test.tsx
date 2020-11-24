import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Toggle } from '../toggle';

describe('Toggle', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <Toggle
                checked
                className='test'
                id='test'
                label='Test'
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
