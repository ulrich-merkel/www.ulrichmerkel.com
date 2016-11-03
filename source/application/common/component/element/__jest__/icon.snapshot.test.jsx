/* global jest, describe, expect */
/* eslint-disable react/prefer-es6-class, react/prefer-stateless-function, func-names, react/prop-types, import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../icon';

describe('component/element/icon', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            var tree = renderer.create(
                <ComponentToBeTested htmlElement='span' className='foo' icon='foo' />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
