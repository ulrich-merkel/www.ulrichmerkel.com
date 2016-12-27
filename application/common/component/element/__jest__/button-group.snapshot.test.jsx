/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../button-group';

describe('common/component/element/button-group', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ComponentToBeTested
                btnClassName='button-group'
                id='button-group'
                name='button'
                label='button'
                type='submit'
                isPrimary
                isDisabled
            >
                Button Children
            </ComponentToBeTested>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
