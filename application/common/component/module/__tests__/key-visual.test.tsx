import * as React from 'react';
import {
    render,
    screen,
    userEvent
} from '../../../../__tests__/utils/test-utils';
import { ModuleKeyVisual } from '../key-visual';

describe('ModuleKeyVisual', function fnDescribe() {
    const props = {
        className: 'key-visual',
        content: {
            headline: 'headline',
            lead: 'lead',
            btnLabel: 'btnLabel',
            btnTitle: 'btnTitle',
            img: {
                name: '',
                ext: '',
                path: '',
                alt: '',
                sizes: []
            },
            type: 'print'
        }
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleKeyVisual {...props}>
                Module key-visual children
            </ModuleKeyVisual>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if content image is empty', function fnIt() {
        const { asFragment } = render(
            <ModuleKeyVisual
                {...props}
                content={{
                    img: null
                }}
            >
                Module key-visual children not rendered
            </ModuleKeyVisual>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render isWork and isCovered css className', function fnIt() {
        const { asFragment } = render(
            <ModuleKeyVisual {...props} isWork isCovered>
                Module key-visual children
            </ModuleKeyVisual>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should trigger onClickBtn', function fnIt() {
        const onClickBtn = jest.fn();
        render(
            <ModuleKeyVisual {...props} onClickBtn={onClickBtn}>
                Module key-visual children
            </ModuleKeyVisual>
        );

        const button = screen.getByTestId('button-key-visual');
        userEvent.click(button);
        expect(onClickBtn).toHaveBeenCalled();
    });
});
