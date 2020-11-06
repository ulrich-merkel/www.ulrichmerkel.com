import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { Headline } from '../headline';

describe('Headline', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <Headline htmlElement="h3" className="headline" isCentered>
                Headline Children
            </Headline>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
