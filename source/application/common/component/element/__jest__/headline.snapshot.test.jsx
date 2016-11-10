/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../headline';

describe('component/element/headline', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const tree = renderer.create(
                <ComponentToBeTested htmlElement='h3' className='foo' isCentered>
                    Hello
                </ComponentToBeTested>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
