import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { ModuleService, insertClearedListItems } from '../service';

describe('ModuleService', function fnDescribe() {
    const props = {
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
            <ModuleService {...props}>Module service children</ModuleService>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if no content is given', function fnIt() {
        const { asFragment } = render(
            <ModuleService
                {...props}
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
            <ModuleService {...props} itemType={null}>
                Module service children
            </ModuleService>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('insertClearedListItems', function fnDescribe() {
    it('should return the correct result', function fnIt() {
        expect(insertClearedListItems()).toMatchSnapshot();
        expect(
            insertClearedListItems([
                {
                    headline: 'headline',
                    icon: 'icon',
                    iconClassName: 'iconClassName',
                    text: 'text'
                },
                {
                    headline: 'headline',
                    icon: 'icon',
                    iconClassName: 'iconClassName',
                    text: 'text'
                },
                {
                    headline: 'headline',
                    icon: 'icon',
                    iconClassName: 'iconClassName',
                    text: 'text'
                }
            ])
        ).toMatchSnapshot();
    });
});
