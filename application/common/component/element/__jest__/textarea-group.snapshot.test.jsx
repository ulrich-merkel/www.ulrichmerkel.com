/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentToBeTested from './../textarea-group';

describe('common/component/element/textarea-group', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ComponentToBeTested
                id='textarea-group'
                name='textarea'
                className='textarea-group'
                label='textarea'
                value='2'
                isValid
                isPristine
            >
                Textarea Group Children
            </ComponentToBeTested>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
