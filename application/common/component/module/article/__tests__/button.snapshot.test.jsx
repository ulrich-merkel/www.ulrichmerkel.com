/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import ModuleArticleButton from '../button';

describe('common/component/module/article/button', function () {
    const defaultProps = {
        btnTo: '/index',
        btnLabel: 'Button label',
        btnTitle: 'Button title',
        className: 'article-button'
    };

    it('should render correctly', function () {
        const tree = renderer
            .create(
                <MemoryRouter>
                    <ModuleArticleButton {...defaultProps} />
                </MemoryRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render btnLabel if btnTitle is empty', function () {
        const tree = renderer
            .create(
                <MemoryRouter>
                    <ModuleArticleButton {...defaultProps} btnTitle={null} />
                </MemoryRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should return null if content is empty', function () {
        const tree = renderer
            .create(
                <MemoryRouter>
                    <ModuleArticleButton
                        {...defaultProps}
                        btnTo={null}
                        btnLabel={null}
                    />
                </MemoryRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
