/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../button';

describe('component/module/key-visual/button', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const tree = renderer.create(
                <ComponentToBeTested
                    title='title'
                    label='label'
                    onClick={() => {}}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
        it('should render null if no content is provided', function () {
            const tree = renderer.create(
                <ComponentToBeTested />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
