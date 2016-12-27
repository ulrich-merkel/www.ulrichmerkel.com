/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../fieldset';

describe('common/component/element/fieldset', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ComponentToBeTested htmlElement='span' className='fieldset'>
                Fieldset Children
            </ComponentToBeTested>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
