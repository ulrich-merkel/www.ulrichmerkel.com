import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleCornerstoneItemEmployee } from '../item-employee';

describe('ModuleCornerstoneItemEmployee', function fnDescribe() {
    const defaultProps = {
        headline: 'Headline item employee',
        lead: 'Lead  item employee',
        timeStart: '20161212',
        timeEnd: '20161224',
        description: [
            'Description item employee 1',
            'Description item employee 2'
        ]
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleCornerstoneItemEmployee {...defaultProps} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render cssModifier and offset if passed', function fnIt() {
        const { asFragment } = render(
            <ModuleCornerstoneItemEmployee
                {...defaultProps}
                cssModifier={'employee'}
                offset={'200'}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
