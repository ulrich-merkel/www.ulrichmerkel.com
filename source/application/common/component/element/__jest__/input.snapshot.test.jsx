/* global jest, describe, expect */
/* eslint-disable react/prefer-es6-class, react/prefer-stateless-function, func-names, react/prop-types, import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../input';

describe('component/element/input', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            var tree = renderer.create(
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
