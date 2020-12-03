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

import { RootState } from '../root-reducer';
import { CONFIG_RESOURCE_NAME, INITIAL_STATE } from './constants';

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
        return isEmpty(config) ? INITIAL_STATE : config;
    }
);
