import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { GridRow } from '../row';

describe('GridRow', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <GridRow htmlElement="span" className="row">
                Grid Row Children
            </GridRow>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
