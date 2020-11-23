import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { GridCol } from '../col';

describe('GridCol', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <GridCol htmlElement="span" className="col">
                Grid Col Children
            </GridCol>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render custom col width', function fnIt() {
        const { asFragment } = render(
            <GridCol col="4">Grid Col Children</GridCol>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
