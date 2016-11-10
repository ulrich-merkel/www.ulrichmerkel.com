/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../spaced';

describe('component/grid/spaced', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const tree = renderer.create(
                <ComponentToBeTested>
                    Hello
                </ComponentToBeTested>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
