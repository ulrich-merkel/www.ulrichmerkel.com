import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Headline } from '../headline';

describe('Headline', function fnDescribe() {
    const props = {
        htmlElement: 'h3',
        className: 'headline',
        isCentered: true
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <Headline {...props}>Headline Children</Headline>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(<Headline>Headline Children</Headline>);
        expect(asFragment()).toMatchSnapshot();
    });
});
