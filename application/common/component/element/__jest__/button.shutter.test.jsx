/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import createReactShutter from '@shutter/react';
import { render } from '../../__mocks__/shutter';
import Button from '../button';

describe('common/component/element/button', function () {
    const shutter = createReactShutter(__dirname, { render });

    afterAll(async function () {
        await shutter.finish();
    });

    it('matches visual snapshot', async function () {
        await shutter.snapshot('Button default', (
            <Button>
                Click me
            </Button>
        ));
    });

    it('with primary style matches visual snapshot', async function () {
        await shutter.snapshot('Button primary', (
            <Button isPrimary>
                Click me
            </Button>
        ));
    });
});
