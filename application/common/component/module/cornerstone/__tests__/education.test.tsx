import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleCornerstoneEducation } from '../education';

describe('ModuleCornerstoneEducation', function fnDescribe() {
    const props = {
        list: [
            {
                headline: 'Headline item education',
                lead: 'Lead  item education',
                timeStart: '20161212',
                timeEnd: '20161224',
                description: [
                    'Description item education 1',
                    'Description item education 2'
                ],
                place: {}
            },
            {
                headline: 'Headline item education',
                lead: 'Lead  item education',
                timeStart: '20161212',
                timeEnd: '20161224',
                description: [
                    'Description item education 1',
                    'Description item education 2'
                ],
                place: {}
            },
            {
                headline: 'Headline item education',
                lead: 'Lead  item education',
                timeStart: '20161212',
                timeEnd: '20161224',
                description: [
                    'Description item education 1',
                    'Description item education 2'
                ],
                place: {}
            }
        ]
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleCornerstoneEducation {...props} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with defaults', function fnIt() {
        const { asFragment } = render(<ModuleCornerstoneEducation />);
        expect(asFragment()).toMatchSnapshot();
    });
});
