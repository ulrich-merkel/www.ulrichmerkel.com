/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ModuleTextContent from './../headline';

describe('common/component/module/text/content', function () {
    const defaultProps = {
        content: 'Module text headline',
        hasColumns2: true,
        isCentered: true
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ModuleTextContent
                {...defaultProps}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should return null if content is empty', function () {
        const tree = renderer.create(
            <ModuleTextContent
                {...defaultProps}
                content={null}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
