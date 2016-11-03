/* global jest, describe, expect */
/* eslint-disable react/prefer-es6-class, react/prefer-stateless-function, func-names, react/prop-types, import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../spaced';

describe('component/grid/spaced', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            var tree = renderer.create(
                <ComponentToBeTested>
                    Hello
                </ComponentToBeTested>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
