/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import createReactShutter from '@shutter/react';
import { render } from '../../__mocks__/shutter';
import Form from '../form';

describe('common/component/element/form', function () {
    const shutter = createReactShutter(__dirname, { render });

    afterAll(async function () {
        await shutter.finish();
    });

    it('matches visual snapshot', async function () {
        await shutter.snapshot('Form default', (
            <Form id='foo' action='bar/'>
                Form fieldset
            </Form>
        ));
    });
});
