/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 * @flow weak
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires react
 * @requires prop-types
 * @requires classnames
 * @requires lodash
 * @requires common/component/module/person
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isEmpty } from 'lodash';

import ModulePerson from '../person';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @param {object} [props.content={}] - The person content's text
 * @param {boolean} [props.hasColumns2=false] - Whether the component text should be clusted in columns via css or not
 * @param {boolean} [props.isCentered=false] - Whether the component text should be centered via css or not
 * @returns {ReactElement} React component markup
 */
function ModuleTextPerson(props) {
    const { content, hasColumns2, isCentered } = props;

    if (!content || isEmpty(content)) {
        return null;
    }

    const composedClassName = classnames(
        {
            'has-columns--2': hasColumns2,
            'is-centered': isCentered
        },
        'm-text__content'
    );

    return <ModulePerson className={composedClassName} content={content} />;
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
ModuleTextPerson.propTypes = {
    content: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.array,
            PropTypes.object
        ])
    ),
    hasColumns2: PropTypes.bool,
    isCentered: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
ModuleTextPerson.defaultProps = {
    content: {},
    hasColumns2: false,
    isCentered: false
};

export default ModuleTextPerson;
