/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ElementIcon from './../icon';

describe('common/component/element/icon', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ElementIcon htmlElement='span' className='icon' icon='foo' />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
