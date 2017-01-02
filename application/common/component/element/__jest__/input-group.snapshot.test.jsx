/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ElementInputGroup from './../input-group';

describe('common/component/element/input-group', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ElementInputGroup
                id='input-group'
                name='input'
                className='input-group'
                label='input'
                type='submit'
                value='2'
                isValid
                isPristine
            >
                Input Group Children
            </ElementInputGroup>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
