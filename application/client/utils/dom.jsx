/**
* Es6 module for helper component.
*
* @file
* @module
*
* @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
* @version 0.0.1
*
* @changelog
* - 0.0.1 basic function and structure
*/

/**
 * Get basic window document dom node.
 *
 * @private
 * @returns {object|null} The current document or null (in isomorph environments)
 */
function getDocumentDomNode() {
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
function getDomNodeById(id) {
    const doc = getDocumentDomNode();
    return (doc && doc.getElementById(id)) || null;
}

/**
 * Get dom node element by tag name.
 *
 * @param {string} name - The elements tag name
 * @returns {object|null} The current element or null
 */
function getDomNodeByTagName(name) {
    const doc = getDocumentDomNode();
    return (doc && doc.getElementsByTagName(name)) || null;
}

/**
 * Get first dom node element by tag name.
 *
 * @param {string} name - The elements tag name
 * @returns {object|null} The current element or null
 */
function getFirstDomNodeByTagName(name) {
    const domNode = getDomNodeByTagName(name);
    return (domNode && domNode[0]) || null;
}

/**
 * Convenient helper to get head dom node.
 *
 * @returns {object|null} The current head dom element or null
 */
function getHeadDomNode() {
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
function setDomNodeAttribute(id, name, value) {
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
function setDomNodeClassName(id, add, remove) {
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
function createDomNode(name, attributes) {
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
function deleteDomNode(id) {
    const domNode = getDomNodeById(id);
    if (!domNode) {
        return;
    }

    domNode.parentNode.removeChild(domNode);
}

export {
    createDomNode,
    deleteDomNode,
    getDocumentDomNode,
    getDomNodeById,
    getDomNodeByTagName,
    getFirstDomNodeByTagName,
    getHeadDomNode,
    setDomNodeAttribute,
    setDomNodeClassName
};
