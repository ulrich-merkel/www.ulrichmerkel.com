/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../button';

describe('common/component/element/button', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ComponentToBeTested
                componentType='button'
                className='button'
                classNameLabel='button-label'
                id='button'
                name='button'
                title='Test button title'
                type='submit'
                isPrimary
                isLarge
                isDisabled
            >
                Test button label Children
            </ComponentToBeTested>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
