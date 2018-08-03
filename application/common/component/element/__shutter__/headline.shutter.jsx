/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import createReactShutter from '@shutter/react';
import { render } from '../../__mocks__/shutter';
import Headline from '../headline';

describe('common/component/element/headline', function () {
    const shutter = createReactShutter(__dirname, { render });

    afterAll(async function () {
        await shutter.finish();
    });

    it('matches visual snapshot', async function () {
        await shutter.snapshot('Headline default', (
            <Headline isCentered>
                Super duper headline
            </Headline>
        ));
    });
    it('matches visual snapshot h2', async function () {
        await shutter.snapshot('Headline h2', (
            <Headline htmlElement={'h2'}>
                Super duper headline
            </Headline>
        ));
    });
    it('matches visual snapshot h3', async function () {
        await shutter.snapshot('Headline h3', (
            <Headline htmlElement={'h3'}>
                Super duper headline
            </Headline>
        ));
    });
    it('matches visual snapshot h4', async function () {
        await shutter.snapshot('Headline h4', (
            <Headline htmlElement={'h4'}>
                Super duper headline
            </Headline>
        ));
    });
    it('matches visual snapshot h5', async function () {
        await shutter.snapshot('Headline h5', (
            <Headline htmlElement={'h5'}>
                Super duper headline
            </Headline>
        ));
    });
    it('matches visual snapshot h6', async function () {
        await shutter.snapshot('Headline h6', (
            <Headline htmlElement={'h6'}>
                Super duper headline
            </Headline>
        ));
    });
});
