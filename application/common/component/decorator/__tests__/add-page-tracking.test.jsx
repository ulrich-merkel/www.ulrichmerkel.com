/* eslint-disable react/prop-types */
import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { addPageTracking } from '../add-page-tracking';

describe('addPageTracking', function fnDescribe() {
    function Page(props) {
        const { children } = props;
        return (
            <div className="page">
                <p>{children}</p>
            </div>
        );
    }

    it('should render correctly', function fnIt() {
        const Result = addPageTracking(Page);
        const { asFragment } = render(<Result>Test</Result>);
        expect(asFragment()).toMatchSnapshot();
    });
});
