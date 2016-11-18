/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../image';

describe('component/element/image', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const tree = renderer.create(
                <ComponentToBeTested src='span' className='foo' alt='foo' />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
