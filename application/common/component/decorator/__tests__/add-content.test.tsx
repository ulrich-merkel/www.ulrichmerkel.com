/* eslint-disable react/prop-types */
import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { addContent } from '../add-content';

describe('addContent', function fnDescribe() {
    function Page(props) {
        const { children, content } = props;
        return (
            <div className="page">
                <h1>{content?.head?.title}</h1>
                <p>{children}</p>
            </div>
        );
    }

    it('should render correctly with content', function fnIt() {
        const Result = addContent('PageBroadcast')(Page);
        const { asFragment } = render(<Result>Test</Result>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly without content', function fnIt() {
        const Result = addContent('Unknown')(Page);
        const { asFragment } = render(<Result>Test</Result>);
        expect(asFragment()).toMatchSnapshot();
    });
});
