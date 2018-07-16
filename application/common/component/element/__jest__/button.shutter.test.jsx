/* eslint-disable import/no-extraneous-dependencies, func-names */
import React, { Fragment } from 'react';
import createReactShutter from '@shutter/react';
import { getAppStyle, getBaseStyle } from '../../__data__/css';
import Button from '../button';

describe('common/component/element/button', function () {
    const base = getBaseStyle();
    const app = getAppStyle();

    const render = function (element, baseRender) {
        return baseRender(
            <Fragment>
                <style>{base}</style>
                <style>{app}</style>
                {element}
            </Fragment>
        )
    }

    const shutter = createReactShutter(__dirname,  { render });

    afterAll(async function () {
        await shutter.finish();
    });

    it('matches visual snapshot', async function () {
        await shutter.snapshot('Button default', (
            <Button>Click me</Button>
        ));
    });

    it('with primary style matches visual snapshot', async function () {
        await shutter.snapshot('Button primary', (
            <Button isPrimary>Click me</Button>
        ));
    });
});
