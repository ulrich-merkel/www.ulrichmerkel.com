/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../input';

describe('component/element/input', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const tree = renderer.create(
                <ComponentToBeTested
                    className='foo'
                    classNameLabel='test'
                    id='foo'
                    name='bar'
                    placeholder='Test placeholder'
                    type='text'
                    value='4'
                    required
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
