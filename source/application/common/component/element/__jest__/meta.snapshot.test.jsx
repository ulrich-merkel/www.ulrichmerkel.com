/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../meta';

describe('component/element/meta', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const tree = renderer.create(
                <ComponentToBeTested itemProp='foo' name='name' property='foo' content='bar'>
                    Hello
                </ComponentToBeTested>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
        it('should render nothing if no content is set', function () {
            const tree = renderer.create(
                <ComponentToBeTested itemProp='foo' name='name' property='foo'>
                    Hello
                </ComponentToBeTested>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
