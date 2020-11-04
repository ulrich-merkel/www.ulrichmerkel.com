/* eslint-disable import/no-extraneous-dependencies, func-names */
import * as React from 'react';
import renderer from 'react-test-renderer';
import ElementButtonGroup from '../button-group';

describe('common/component/element/button-group', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ElementButtonGroup
                btnClassName='button-group'
                id='button-group'
                name='button'
                label='button'
                type='submit'
                isPrimary
                isDisabled
            >
                Button Group Children
            </ElementButtonGroup>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
