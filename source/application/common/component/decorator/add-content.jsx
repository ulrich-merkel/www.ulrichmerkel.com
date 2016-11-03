/**
 * Es6 module for handling translation data.
 * Higher-Order Components (HOCs) and decorators are JavaScript functions
 * which add functionality to existing component classes.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.4
 *
 * @see {@link https://blog.risingstack.com/react-js-best-practices-for-2016/}
 *
 * @requires react
 * @requires react-redux
 * @requires lodash
 * @requires common/utils/content
 *
 * @changelog
 * - 0.0.4 refactored for better readability
 * - 0.0.3 moved to stateless function
 * - 0.0.2 moved code to es6
 * - 0.0.1 basic functions and structure
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

import { getTranslatedContent } from './../../utils/content';

/**
 * Higher order function to get translation data.
 *
 * @function
 * @param {string} configKey The object key to be found in translation config
 * @returns {Function}
 */
function addContent(configKey) {

    /**
     * The react higher order function for passing data to props.
     *
     * @function
     * @param {ReactElement} SourceComponent The react component to be decorated
     * @returns {ReactElement}
     */
    return function sourceComponent(SourceComponent) {

        /**
         * Wrapper component to get redux state.
         *
         * @function
         * @param {Object} [props] The current component props
         * @returns {ReactElement} React component markup
         */
        function ReturnedComponent(props) {

            const { locale, config } = props;
            const content = getTranslatedContent(locale, config, configKey);

            if (!content) {
                return <SourceComponent {...props} />;
            }

            return <SourceComponent content={content} {...props} />;

        }

        /**
         * Validate props via React.PropTypes helpers.
         *
         * @static
         * @type {Object}
         * @property {string} [locale] The current locale string
         * @property {Object} [config] The content configuration
         */
        ReturnedComponent.propTypes = {
            locale: PropTypes.string,
            config: PropTypes.object // eslint-disable-line react/forbid-prop-types
        };

        /**
         * The component will subscribe to Redux store updates. Any time it updates,
         * mapStateToProps will be called, Its result must be a plain object,
         * and it will be merged into the component’s props.
         *
         * @function
         * @private
         * @param {Object.<*>} state The redux store state
         * @param {Object.<*>} [ownProps] The current component props
         * @returns {Object} The state properties to be passed as component props
         */
        function mapStateToProps(state, ownProps) {
            return {
                locale: get(state, 'intl.locale') || get(ownProps, 'locale'),
                config: get(state, 'config') || get(ownProps, 'config')
            };
        }

        /**
        * Connects a React component to a Redux store. It does not modify the
        * component class passed to it. Instead, it returns a new, connected component class.
        */
        return connect(
            mapStateToProps
        )(ReturnedComponent);

    };

}

export default addContent;
