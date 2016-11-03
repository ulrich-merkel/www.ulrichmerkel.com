/* global jest, describe, expect */
/* eslint-disable react/prefer-es6-class, react/prefer-stateless-function, func-names, react/prop-types, import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../headline';

describe('component/element/headline', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            var tree = renderer.create(
                <ComponentToBeTested htmlElement='h3' className='foo' isCentered>
                    Hello
                </ComponentToBeTested>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
