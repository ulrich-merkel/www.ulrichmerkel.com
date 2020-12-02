import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { ModuleLanguage } from '../language';

describe('ModuleLanguage', function fnDescribe() {
    const props = {
        className: 'foo',
        content: {
            list: [
                {
                    headline: 'foo1',
                    lead: 'bar1',
                    percent: '1'
                },
                {
                    headline: 'foo2',
                    lead: 'bar2',
                    percent: '20'
                },
                {
                    headline: 'foo3',
                    lead: 'bar3',
                    percent: '80'
                }
            ]
        }
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleLanguage {...props}>Module language children</ModuleLanguage>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if no content image is empty', function fnIt() {
        const { asFragment } = render(
            <ModuleLanguage
                {...props}
                content={{
                    list: null
                }}
            >
                Module language children not rendered
            </ModuleLanguage>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render no itemType if unset', function fnIt() {
        const { asFragment } = render(
            <ModuleLanguage {...props} itemType={null}>
                Module language children
            </ModuleLanguage>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
