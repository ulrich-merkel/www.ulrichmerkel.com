/* eslint-disable import/prefer-default-export */
import React, { Fragment } from 'react';
import { readFileSync } from '../../utils/read-file';

const base = readFileSync('../../../build/public/css/base.css');
const app = readFileSync('../../../build/public/css/app.css');

/**
 * Custom helper to add some basic "old school" css files to the
 * headline browser rendering process.
 *
 * @param {ReactElement} element - The element to be tested
 * @param {Function} baseRender - Shutters render hock
 * @returns {Function} Custom test renderer
 */
export function render(element, baseRender) {
    return baseRender(
        <Fragment>
            <style>
                {base}
            </style>
            <style>
                {app}
            </style>
            {element}
        </Fragment>
    );
}
