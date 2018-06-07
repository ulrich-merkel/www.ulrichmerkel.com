/* eslint-disable import/prefer-default-export */
/**
 * Es6 module for Redux Architecture.
 * Actions are payloads of information that send data from your application
 * to your store. They are the only source of information for the store. You
 * send them to the store using store.dispatch().
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires common/state/search/constants
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import { AVAILABLE_THEMES } from '../../constants/theme';

export const STATE_THEME_RESOURCE_NAME = 'theme';
export const STATE_THEME_SELECTED_CHANGE = 'STATE_THEME_SELECTED_CHANGE';
export const STATE_THEME_DEFAULT_STATE = {
    selected: AVAILABLE_THEMES.DEFAULT
};