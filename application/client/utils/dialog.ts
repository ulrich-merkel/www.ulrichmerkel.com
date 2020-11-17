/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @see {@link https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/}
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { getDocumentDomNode } from './dom';

let showTimer: number = 0;

/**
 * Adding some body css to prevent scrolling while the dialog
 * is open.
 *
 * @returns {void}
 */
export function showDialog (): void {
    clearTimeout(showTimer);
    showTimer = setTimeout(function () {
        const doc = getDocumentDomNode();
        if (!doc) {
            return;
        }

        const scrollY = doc.documentElement.style.getPropertyValue('--scroll-y');
        const body = doc.body;
        body.style.position = 'fixed';
        body.style.top = `-${scrollY}`;
    }, 500);
}

/**
 * Removing body css if necessary.
 *
 * @returns {void}
 */
export function closeDialog (): void {
    const doc = getDocumentDomNode();
    if (!doc) {
        return;
    }

    const body = doc.body;
    body.style.position = '';
    body.style.top = '';
}
