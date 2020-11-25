import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { ModuleText, ModuleTextConnected } from '../text';

describe('ModuleText', function fnDescribe() {
    const defaultProps = {
        htmlElement: 'div',
        className: 'module-text',
        hasColumns2: false,
        itemType: 'foo',
        content: {
            text: [
                {
                    headline: 'headline',
                    content: 'content'
                }
            ],
            datePublished: '123',
            author: 'Author',
            timeStart: '567',
            linkTo: '/bar',
            linkLabel: 'Link label',
            linkTitle: 'Link title',
            btnTo: '/foo',
            btnTitle: 'Button title',
            btnLabel: 'Button label'
        },
        handleChangeDialogVisible: () => {}
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleText {...defaultProps}>Module text children</ModuleText>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the connected version', function fnIt() {
        const { asFragment } = render(
            <ModuleTextConnected {...defaultProps}>
                Module text children
            </ModuleTextConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('should return null if no content is given', function fnIt() {
        const { asFragment } = render(
            <ModuleTextConnected
                {...defaultProps}
                content={{
                    text: null
                }}
            >
                Module text children not rendered
            </ModuleTextConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render no itemType if unset', function fnIt() {
        const { asFragment } = render(
            <ModuleTextConnected {...defaultProps} itemType={null}>
                Module text children
            </ModuleTextConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
