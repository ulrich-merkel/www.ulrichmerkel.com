/**
 * Es6 module for Redux Architecture.
 * This file creates a memoized selector, just passing new props if the
 * state is mutated to prevent superflous rerenderings.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { createSelector } from 'reselect';
import { isEmpty } from 'lodash';

import { RootState } from '../configure-store';
import { CONFIG_RESOURCE_NAME, initialState } from './duck';

/**
 * Select config state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {object} The config state if found or en empty object
 */
export const selectStateConfig = createSelector(
    [(state: RootState) => state?.[CONFIG_RESOURCE_NAME]],
    function resultFunc(config) {
        return isEmpty(config) ? initialState : config;
    }
);
