/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../picture';

describe('component/element/picture', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const tree = renderer.create(
                <ComponentToBeTested htmlElement='div' className='foo' />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});