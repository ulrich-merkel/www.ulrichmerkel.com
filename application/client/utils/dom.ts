/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */

interface Document {
    getElementById: Function<HTMLElement>;
    getElementsByTagName: Function<HTMLElement>;
    createElement: Function<HTMLElement>;
}

/**
 * Get basic window document dom node.
 *
 * @returns {object|null} The current document or null (in isomorph environments)
 */
export function getDocumentDomNode(): Document {
    if (typeof window === 'undefined') {
        return null;
    }
    return window.document;
}

/**
 * Get dom node element by id.
 *
 * @private
 * @param {string} id - The elements tag name
 * @returns {object|null} The current element or null
 */
export function getDomNodeById(id: string): HTMLElement | null {
    const doc = getDocumentDomNode();
    return (doc && doc.getElementById(id)) || null;
}

/**
 * Get dom node element by tag name.
 *
 * @param {string} name - The elements tag name
 * @returns {Array<object>|null} The current element or null
 */
export function getDomNodesByTagName(name: string): HTMLElement[] | null {
    const doc = getDocumentDomNode();
    return (doc && doc.getElementsByTagName(name)) || null;
}

/**
 * Get first dom node element by tag name.
 *
 * @param {string} name - The elements tag name
 * @returns {object|null} The current element or null
 */
export function getFirstDomNodeByTagName(name: string): HTMLElement | null {
    const domNode = getDomNodesByTagName(name);
    return (domNode && domNode[0]) || null;
}

/**
 * Convenient helper to get head dom node.
 *
 * @returns {object|null} The current head dom element or null
 */
export function getHeadDomNode(): HTMLElement | null {
    return getFirstDomNodeByTagName('head');
}

/**
 * Set dom node attribute.
 *
 * @param {string} id - The elements id
 * @param {string} name - The elements attribute name to be set
 * @param {string} value - The elements attribute value to be set
 * @returns {void}
 */
export function setDomNodeAttribute(
    id: string,
    name: string,
    value: string
): void {
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
    id: string,
    add: string[],
    remove: string[]
): void {
    const domNode = getDomNodeById(id);
    if (!domNode || !add) {
        return;
    }

    const { classList } = domNode;
    const containsClassNames = add.every(function someClassName(className) {
        return classList.contains(className);
    });
    classList.remove.apply(classList, remove); // eslint-disable-line prefer-spread
    if (!containsClassNames) {
        classList.add.apply(classList, add); // eslint-disable-line prefer-spread
    }
}

/**
 * Create dom node element.
 *
 * @param {string} name - The node element name type
 * @param {object} attributes - Name/value mapping of the element attributes
 * @returns {object|null} The created html object
 */
export function createDomNode(
    name: string,
    attributes: Object
): HTMLElement | null {
    const doc = getDocumentDomNode();
    if (!doc) {
        return null;
    }

    const domNode = doc.createElement(name);

    // Check for attributes to be set
    if (attributes) {
        Object.keys(attributes).forEach(function handleKey(key) {
            const value = attributes[key];

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
 * @param {string} id - The elements id
 * @returns {void}
 */
export function deleteDomNode(id: string): void {
    const domNode = getDomNodeById(id);
    if (!domNode) {
        return;
    }

    domNode.parentNode.removeChild(domNode);
}
