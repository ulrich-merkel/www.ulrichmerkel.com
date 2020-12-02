import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleCornerstoneEmployee } from '../employee';

describe('ModuleCornerstoneEmployee', function fnDescribe() {
    const props = {
        list: [
            {
                headline: 'Headline item employee',
                lead: 'Lead  item employee',
                timeStart: '20161212',
                timeEnd: '20161224',
                description: [
                    'Description item employee 1',
                    'Description item employee 2'
                ]
            },
            {
                headline: 'Headline item employee',
                lead: 'Lead  item employee',
                timeStart: '20161212',
                timeEnd: '20161224',
                description: [
                    'Description item employee 1',
                    'Description item employee 2'
                ]
            },
            {
                headline: 'Headline item employee',
                lead: 'Lead  item employee',
                timeStart: '20161212',
                timeEnd: '20161224',
                description: [
                    'Description item employee 1',
                    'Description item employee 2'
                ]
            }
        ]
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModuleCornerstoneEmployee {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(<ModuleCornerstoneEmployee />);
        expect(asFragment()).toMatchSnapshot();
    });
});
