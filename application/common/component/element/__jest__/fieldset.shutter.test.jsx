/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import createReactShutter from '@shutter/react';
import { render } from '../../__mocks__/shutter';
import Fieldset from '../fieldset';

describe('common/component/element/fieldset', function () {
    const shutter = createReactShutter(__dirname, { render });

    afterAll(async function () {
        await shutter.finish();
    });

    it('matches visual snapshot', async function () {
        await shutter.snapshot('Fieldset default', (
            <Fieldset>
                Form fieldset content
            </Fieldset>
        ));
    });
});
