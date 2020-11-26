import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PictureSource, getType } from '../picture-source';

describe('PictureSource', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <PictureSource
                className="test"
                ext="jpg"
                height={100}
                minWidth={100}
                name="name"
                path="path"
                width={200}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('getType', function fnDescribe() {
    it('should return the correct extension', function fnIt() {
        expect(getType('jpg')).toMatchSnapshot();
        expect(getType('webp')).toMatchSnapshot();
    });
});
