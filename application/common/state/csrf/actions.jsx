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
 * @requires common/state/csrf/constants
 *
 * @changelog
 * - 0.0.1 basic functions and structure
 */
import { ADD_CSRF_TOKEN } from './constants';

export function addToken(token) {
    return {
        type: ADD_CSRF_TOKEN,
        token
    };
}
