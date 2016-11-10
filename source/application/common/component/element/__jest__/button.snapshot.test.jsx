/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../button';

describe('component/element/button', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const tree = renderer.create(
                <ComponentToBeTested
                    componentType='button'
                    className='foo'
                    classNameLabel='test'
                    id='foo'
                    name='bar'
                    label='Test label'
                    title='Test title'
                    type='submit'
                    isPrimary
                    isLarge
                    isDisabled
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
