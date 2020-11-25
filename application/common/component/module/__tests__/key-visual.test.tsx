import * as React from 'react';
import {
    fireEvent,
    render,
    screen
} from '../../../../__tests__/utils/test-utils';
import { ModuleKeyVisual } from '../key-visual';

describe('ModuleKeyVisual', function fnDescribe() {
    const defaultProps = {
        htmlElement: 'nav',
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
            <ModuleKeyVisual {...defaultProps}>
                Module key-visual children
            </ModuleKeyVisual>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should return null if content image is empty', function fnIt() {
        const { asFragment } = render(
            <ModuleKeyVisual
                {...defaultProps}
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
            <ModuleKeyVisual {...defaultProps} isWork isCovered>
                Module key-visual children
            </ModuleKeyVisual>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should trigger onClickBtn', function fnIt() {
        const onClickBtn = jest.fn();
        render(
            <ModuleKeyVisual {...defaultProps} onClickBtn={onClickBtn}>
                Module key-visual children
            </ModuleKeyVisual>
        );

        fireEvent.click(screen.getByText(/btnLabel/i));
        expect(onClickBtn).toHaveBeenCalled();
    });
});
