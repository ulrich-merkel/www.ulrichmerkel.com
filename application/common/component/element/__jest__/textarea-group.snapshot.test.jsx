/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import renderer from 'react-test-renderer';
import ElementTextareaGroup from '../textarea-group';

describe('common/component/element/textarea-group', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ElementTextareaGroup
                id='textarea-group'
                name='textarea'
                className='textarea-group'
                label='textarea'
                value='2'
                isValid
                isPristine
            >
                Textarea Group Children
            </ElementTextareaGroup>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
