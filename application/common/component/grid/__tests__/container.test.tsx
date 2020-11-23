import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { GridContainer } from '../container';

describe('GridContainer', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <GridContainer htmlElement="span" className="foo">
                Grid Container Children
            </GridContainer>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
