/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ElementFieldset from '../fieldset';

describe('common/component/element/fieldset', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ElementFieldset htmlElement='span' className='fieldset'>
                Fieldset Children
            </ElementFieldset>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
