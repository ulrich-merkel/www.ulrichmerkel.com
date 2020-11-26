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

/**
 * @type {number}
 */
let showTimer = 0;

/**
 * Adding some body css to prevent scrolling while the dialog
 * is open.
 *
 * @returns {void}
 */
export function showDialog(): void {
    clearTimeout(showTimer);
    showTimer = setTimeout(function fnSetTimeout() {
        const document = getDocumentDomNode();
        if (!document) {
            return;
        }

        const scrollY = document.documentElement.style.getPropertyValue(
            '--scroll-y'
        );
        const { body } = document;
        body.style.position = 'fixed';
        body.style.top = `-${scrollY}`;
    }, 500);
}

/**
 * Removing body css if necessary.
 *
 * @returns {void}
 */
export function closeDialog(): void {
    const document = getDocumentDomNode();
    if (!document) {
        return;
    }

    const { body } = document;
    body.style.position = '';
    body.style.top = '';
}
