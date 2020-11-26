import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleCornerstoneItemEducation } from '../item-education';

describe('ModuleCornerstoneItemEducation', function fnDescribe() {
    const props = {
        headline: 'Headline item education',
        lead: 'Lead  item education',
        timeStart: '20161212',
        timeEnd: '20161224',
        description: [
            'Description item education 1',
            'Description item education 2'
        ],
        place: {}
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleCornerstoneItemEducation {...props} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render cssModifier and offset if passed', function fnIt() {
        const { asFragment } = render(
            <ModuleCornerstoneItemEducation
                {...props}
                cssModifier="education"
                offset="100"
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
