/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import ModuleTextLink from '../link';

describe('common/component/module/text/link', function () {
    const defaultProps = {
        content: {
            linkTo: '/foo',
            linkLabel: 'Module text link label',
            linkTitle: 'Module text link title'
        }
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <MemoryRouter>
                <ModuleTextLink
                    {...defaultProps}
                />
            </MemoryRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should return null if text is empty', function () {
        const tree = renderer.create(
            <MemoryRouter>
                <ModuleTextLink
                    {...defaultProps}
                    content={null}
                />
            </MemoryRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
