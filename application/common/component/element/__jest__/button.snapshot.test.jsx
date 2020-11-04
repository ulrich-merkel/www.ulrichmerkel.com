/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import renderer from 'react-test-renderer';
import ElementButton from '../button';

describe('common/component/element/button', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ElementButton
                htmlElement='button'
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
                Button Children
            </ElementButton>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
