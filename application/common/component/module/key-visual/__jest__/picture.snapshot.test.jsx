/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../picture';

describe('component/module/key-visual/picture', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const tree = renderer.create(
                <ComponentToBeTested
                    img={{
                        name: 'keyvisual',
                        ext: 'jpg',
                        path: '/img/content/home/',
                        alt: 'foo',
                        sizes: [
                            {
                                width: 2560,
                                height: 1600,
                                minWidth: 2560
                            },
                            {
                                width: 1680,
                                height: 1050,
                                minWidth: 1680
                            },
                            {
                                width: 1440,
                                height: 960,
                                minWidth: 1440
                            }
                        ]
                    }}
                    type='type'
                    isCovered
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
