import * as React from 'react';
import PropTypes from 'prop-types';
import { render } from '../../../../__tests__/utils/test-utils';
import { pictureFill } from '../picturefill';

describe('pictureFill', function fnDescribe() {
    function Page(props) {
        const { children } = props;
        return (
            <div className="page">
                <p>{children}</p>
            </div>
        );
    }
    // eslint-disable-next-line immutable/no-mutation
    Page.propTypes = {
        children: PropTypes.node.isRequired
    };

    it('should render correctly', function fnIt() {
        const Result = pictureFill(Page);
        const { asFragment } = render(<Result>Test</Result>);
        expect(asFragment()).toMatchSnapshot();
    });
});
