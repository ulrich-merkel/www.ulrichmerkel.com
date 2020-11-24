import * as React from 'react';
import { render } from '../../../../__tests__/utils/test-utils';
import { PictureSource } from '../picture-source';

describe('PictureSource', function fnDescribe() {
    it('should render correctly', function fnIt() {
        const { asFragment } = render(
            <PictureSource
                path="path"
                name="name"
                ext="jpg"
                width="200"
                height="100"
                minWidth="100"
                className="test"
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
