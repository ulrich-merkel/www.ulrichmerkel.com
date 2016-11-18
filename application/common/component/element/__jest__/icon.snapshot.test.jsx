/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../icon';

describe('component/element/icon', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const tree = renderer.create(
                <ComponentToBeTested htmlElement='span' className='foo' icon='foo' />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
