/* global jest, describe, expect */
/* eslint-disable react/prefer-es6-class, react/prefer-stateless-function, func-names, react/prop-types, import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../textarea';

describe('component/element/textarea', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            var tree = renderer.create(
                <ComponentToBeTested
                    className='foo'
                    id='foo'
                    name='bar'
                    placeholder='Test placeholder'
                    required
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
