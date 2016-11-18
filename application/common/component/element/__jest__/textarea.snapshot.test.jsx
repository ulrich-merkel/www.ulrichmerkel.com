/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../textarea';

describe('component/element/textarea', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const tree = renderer.create(
                <ComponentToBeTested
                    className='foo'
                    id='foo'
                    name='bar'
                    placeholder='Test placeholder'
                    required
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
