/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { isEmpty } from 'lodash';
import { isValidString } from "../../common/utils/string";
import { isValidArray } from '../../common/utils/array';
import { isBrowser } from '../../common/utils/environment';

/**
 * Get basic window document dom node.
 *
 * @returns {object|null} The current document or null (in isomorph environments)
 */
export function getDocumentDomNode(): Document {
    if (!isBrowser()) {
        return null;
    }
    return window.document;
}

/**
 * Get dom node element by id.
 *
 * @param {string} [id] - The elements tag name
 * @returns {object|null} The current element or null
 */
export function getDomNodeById(id?: string): HTMLElement | null {
    if (!isValidString(id)) {
        return null
    }

    const doc = getDocumentDomNode();
    return (doc && doc.getElementById(id)) || null;
}

/**
 * Get dom node element by tag name.
 *
 * @param {string} [name] - The elements tag name
 * @returns {Array<object>|null} The current element or null
 */
export function getDomNodesByTagName(
    name?: keyof HTMLElementTagNameMap
): HTMLCollectionOf<HTMLElement> | null {
    if (!isValidString(name)) {
        return null
    }

    const doc = getDocumentDomNode();
    return (doc && doc.getElementsByTagName(name)) || null;
}

/**
 * Get first dom node element by tag name.
 *
 * @param {string} [name] - The elements tag name
 * @returns {object|null} The current element or null
 */
export function getFirstDomNodeByTagName(name?: keyof HTMLElementTagNameMap): HTMLElement | null {
    if (!isValidString(name)) {
        return null
    }

    const domNode = getDomNodesByTagName(name);
    return (domNode && domNode[0]) || null;
}

/**
 * Convenient helper to get head dom node.
 *
 * @returns {object|null} The current head dom element or null
 */
export function getHeadDomNode(): HTMLHeadElement | null {
    return getFirstDomNodeByTagName('head');
}

/**
 * Set dom node attribute.
 *
 * @param {string} [id] - The elements id
 * @param {string} [name] - The elements attribute name to be set
 * @param {string} [value] - The elements attribute value to be set
 * @returns {void}
 */
export function setDomNodeAttribute(
    id?: string,
    name?: string,
    value?: string
): void {
    if (!isValidString(name)) {
        return null
    }

    const domNode = getDomNodeById(id);
    if (!domNode) {
        return;
    }
    domNode.setAttribute(name, value);
}

/**
 * Set dom node className.
 *
 * @param {string} id - The elements id
 * @param {Array<string>} add - The elements classNames to be set
 * @param {Array<string>} remove - The elements classNames to be removed
 * @returns {void}
 */
export function setDomNodeClassName(
    id?: string,
    add?: string[],
    remove?: string[]
): void {
    const domNode = getDomNodeById(id);
    if (!domNode) {
        return;
    }

    const { classList } = domNode;
    const containsClassNames = isValidArray(add)
        ? add.every(function someClassName(className) {
            return classList.contains(className);
        })
        : true;
    
    if (isValidArray(remove)) {
        // eslint-disable-next-line prefer-spread
        classList.remove.apply(classList, remove);
    }

    if (!containsClassNames && isValidArray(add)) {
        // eslint-disable-next-line prefer-spread
        classList.add.apply(classList, add);
    }
}

/**
 * Create dom node element.
 *
 * @param {string} [name] - The node element name type
 * @param {object} attributes - Name/value mapping of the element attributes
 * @returns {object|null} The created html object
 */
export function createDomNode(
    name?: keyof HTMLElementTagNameMap,
    attributes?: Object
): HTMLElement | null {
    if (!isValidString(name)) {
        return null
    }

    const doc = getDocumentDomNode();
    if (!doc) {
        return null;
    }

    const domNode = doc.createElement(name);

    // Check for attributes to be set
    if (!isEmpty(attributes)) {
        Object.keys(attributes).forEach(function handleKey(key: string) {
            const value = attributes[key] as string;

            if (key && value) {
                domNode.setAttribute(key, value);
            }
        });
    }

    // Return created node
    return domNode;
}

/**
 * Delte dom node element.
 *
 * @param {string} [id] - The elements id
 * @returns {void}
 */
export function deleteDomNode(id?: string): void {
    const domNode = getDomNodeById(id);
    if (!domNode) {
        return;
    }

    domNode.parentNode.removeChild(domNode);
}
