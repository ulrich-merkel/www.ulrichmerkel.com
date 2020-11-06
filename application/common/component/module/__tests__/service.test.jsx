import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { ModuleService } from '../service';

describe('ModuleService', function fnDescribe() {
    const defaultProps = {
        componentType: 'nav',
        className: 'foo',
        content: {
            list: [
                {
                    icon: 'happy',
                    headline: 'headline happy',
                    text: 'text happy'
                },
                {
                    icon: 'xing',
                    headline: 'headline xing',
                    text: 'text xing'
                },
                {
                    icon: 'facebook',
                    headline: 'headline facebook',
                    text: 'text facebook'
                }
            ]
        }
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleService {...defaultProps}>
                Module service children
            </ModuleService>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if no content is given', function fnIt() {
        const { asFragment } = render(
            <ModuleService
                {...defaultProps}
                content={{
                    list: null
                }}
            >
                Module service children not rendered
            </ModuleService>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render no itemType if unset', function fnIt() {
        const { asFragment } = render(
            <ModuleService {...defaultProps} itemType={null}>
                Module service children
            </ModuleService>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
