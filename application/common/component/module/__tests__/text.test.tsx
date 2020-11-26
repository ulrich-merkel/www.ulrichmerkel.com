import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { ModuleText, ModuleTextConnected } from '../text';

describe('ModuleText', function fnDescribe() {
    const props = {
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
        handleChangeDialogVisible: jest.fn()
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <ModuleText {...props}>Module text children</ModuleText>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly the connected version', function fnIt() {
        const { asFragment } = render(
            <ModuleTextConnected {...props}>
                Module text children
            </ModuleTextConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('should return null if no content is given', function fnIt() {
        const { asFragment } = render(
            <ModuleTextConnected
                {...props}
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
            <ModuleTextConnected {...props} itemType={null}>
                Module text children
            </ModuleTextConnected>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
