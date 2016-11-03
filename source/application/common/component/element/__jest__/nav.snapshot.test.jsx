/* global jest, describe, expect */
/* eslint-disable react/prefer-es6-class, react/prefer-stateless-function, func-names, react/prop-types, import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../nav';

describe('component/element/nav', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            var tree = renderer.create(
                <ComponentToBeTested htmlElement='div' className='foo' />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
