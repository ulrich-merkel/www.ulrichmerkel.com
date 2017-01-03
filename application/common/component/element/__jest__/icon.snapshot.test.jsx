/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ElementIcon from './../icon';

describe('common/component/element/icon', function () {
    const defaultProps = {
        htmlElement: 'span',
        className: 'icon'
    };

    it('should render correctly', function () {
        const tree = renderer.create(
            <ElementIcon {...defaultProps} icon='foo' />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should return null if icon is empty', function () {
        const tree = renderer.create(
            <ElementIcon {...defaultProps} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
