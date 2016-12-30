/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ModuleTextHeadline from './../headline';

describe('common/component/module/text/headline', function () {
    const defaultProps = {
        text: 'Module text headline'
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ModuleTextHeadline
                {...defaultProps}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should return null if text is empty', function () {
        const tree = renderer.create(
            <ModuleTextHeadline
                {...defaultProps}
                text={null}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
