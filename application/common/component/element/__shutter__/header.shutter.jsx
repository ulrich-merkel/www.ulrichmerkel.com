/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import createReactShutter from '@shutter/react';
import { render } from '../../__mocks__/shutter';
import Header from '../header';

describe('common/component/element/header', function () {
    const shutter = createReactShutter(__dirname, { render });

    afterAll(async function () {
        await shutter.finish();
    });

    it('matches visual snapshot', async function () {
        await shutter.snapshot('Fieldset default', (
            <Header>
                Header content
            </Header>
        ));
    });
});
