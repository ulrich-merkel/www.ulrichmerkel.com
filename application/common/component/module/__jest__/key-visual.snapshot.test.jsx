/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../key-visual';

// @see https://github.com/airbnb/enzyme/issues/426
// @see https://github.com/facebook/jest/issues/1353
describe('component/module/key-visual', function () {
    describe('Snapshot', function () {
        it('should render correctly', function () {
            const tree = renderer.create(
                <ComponentToBeTested
                    componentType='nav'
                    className='foo'
                    content={{
                        headline: 'headline',
                        lead: 'lead',
                        btnLabel: 'btnLabel',
                        btnTitle: 'btnTitle',
                        img: {
                            name: '',
                            ext: '',
                            path: '',
                            alt: '',
                            sizes: []
                        },
                        type: 'type'
                    }}
                >
                    Hello
                </ComponentToBeTested>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
