/**
 * Es6 module for handling event helpers.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link https://fettblog.eu/typescript-react/events/}
 */
import * as React from 'react';
import { isEmpty, isFunction } from 'lodash';

type Event =
    | React.AnimationEvent
    | React.ChangeEvent
    | React.ClipboardEvent
    | React.CompositionEvent
    | React.DragEvent
    | React.FocusEvent
    | React.FormEvent
    | React.KeyboardEvent
    | React.MouseEvent
    | React.PointerEvent
    | React.TouchEvent
    | React.TransitionEvent
    | React.WheelEvent
    | React.SyntheticEvent;

/**
 * @type {string}
 */
const PREVENT_DEFAULT: string = 'preventDefault';

/**
 * @type {string}
 */
const STOP_PROPAGATION: string = 'stopPropagation';

/**
 * Check if we have a valid browser event object
 * with the function needed to be called.
 *
 * @private
 * @param {object} event - The current event object
 * @param {string} functionToCall - The event function to be checked
 * @returns {boolean} Whether this is a valid event
 */
function isValidEvent(event: Event, functionToCall: string): boolean {
    return !isEmpty(event) && isFunction(event[functionToCall]);
}

/**
 * Prevent event default handling.
 *
 * @param {object} event - The current event object
 * @returns {void}
 */
export function eventPreventDefault(event: Event): void {
    if (isValidEvent(event, PREVENT_DEFAULT)) {
        event[PREVENT_DEFAULT]();
    }
}

/**
 * Prevent event propagation.
 *
 * @param {object} event - The current event object
 * @returns {void}
 */
export function eventStopPropagation(event: Event): void {
    if (isValidEvent(event, STOP_PROPAGATION)) {
        event[STOP_PROPAGATION]();
    }
}
