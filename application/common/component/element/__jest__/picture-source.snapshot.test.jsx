/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import renderer from 'react-test-renderer';
import ElementPictureSource from '../picture-source';

describe('common/component/element/picture-source', function () {
    it('should render correctly', function () {
        const tree = renderer.create(
            <ElementPictureSource
                path='path'
                name='name'
                ext='jpg'
                width='200'
                height='100'
                minWidth='100'
                className='test'
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
