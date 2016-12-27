/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../spaced';

describe('common/component/grid/spaced', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ComponentToBeTested>
                Grid Spaced Children
            </ComponentToBeTested>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
