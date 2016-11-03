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
 * @function
 * @returns {Object|null} The current document or null (in isomorph environments)
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
 * @function
 * @param {string} id The elements tag name
 * @returns {Object|null} The current element or null
 */
function getDomNodeById(id) {
    const doc = getDocumentDomNode();
    return (doc && doc.getElementById(id)) || null;
}

/**
 * Get dom node element by tag name.
 *
 * @function
 * @param {string} name The elements tag name
 * @returns {Object|null} The current element or null
 */
function getDomNodeByTagName(name) {
    const doc = getDocumentDomNode();
    return (doc && doc.getElementsByTagName(name)) || null;
}

/**
 * Get first dom node element by tag name.
 *
 * @function
 * @param {string} name The elements tag name
 * @returns {Object|null} The current element or null
 */
function getFirstDomNodeByTagName(name) {
    const domNode = getDomNodeByTagName(name);
    return (domNode && domNode[0]) || null;
}

/**
 * Convenient helper to get head dom node.
 *
 * @function
 * @returns {Object|null} The current head dom element or null
 */
function getHeadDomNode() {
    return getFirstDomNodeByTagName('head');
}

/**
 * Get first dom node element by tag name.
 *
 * @function
 * @param {string} id The elements id
 * @param {string} name The elements attribute name
 * @param {string} value The elements attribute value
 * @returns {void}
 */
function setDomNodeByAttribute(id, name, value) {
    const domNode = getDomNodeById(id);
    if (!domNode) {
        return;
    }
    domNode.setAttribute(name, value);
}


/**
 * Create dom node element.
 *
 * @function
 * @param {string} name The node element name type
 * @param {Object} attributes Name/value mapping of the element attributes
 * @return {Object|null} The created html object
 */
function createDomNode(name, attributes) {

    const doc = getDocumentDomNode();
    if (!doc) {
        return null;
    }

    const domNode = doc.createElement(name);

    // Check for attributes to set
    if (attributes) {
        for (const attribute in attributes) {
            if ({}.hasOwnProperty.call(attributes, attribute)) {
                domNode.setAttribute(attribute, attributes[attribute]);
            }
        }
    }

    // Return created node
    return domNode;

}

export {
    getDocumentDomNode,
    getDomNodeById,
    getDomNodeByTagName,
    getFirstDomNodeByTagName,
    getHeadDomNode,
    createDomNode,
    setDomNodeByAttribute
};
