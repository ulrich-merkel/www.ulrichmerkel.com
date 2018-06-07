/**
 * Es6 module for handling theming as component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2018
 * @version 0.0.1
 *
 * @see {@link https://blog.risingstack.com/react-js-best-practices-for-2016/}
 *
 * @requires react
 * @requires prop-types
 * @requires react-redux
 * @requires client/loader/async
 * @requires common/constants/theme
 * @requires common/state/theme/selector
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';

import loaderAsync from '../../../client/loader/async';
import { AVAILABLE_THEMES } from '../../constants/theme';
import { selectStateThemeSelected } from '../../state/theme/selector';
import { isBrowser } from '../../utils/environment';

const availableThemes = Object.values(AVAILABLE_THEMES);

/**
 * Load new theme if necessary and remove old ones.
 *
 * @private
 * @param {string} themeSelected - The theme to be applied
 * @returns {void}
 */
function applyTheme(themeSelected) {
    if (!isBrowser() || !availableThemes.includes(themeSelected)) {
        return;
    }

    // Check if we should load a new theming css file
    const selector = `theme-${themeSelected}`;
    const alreadyLoaded = themeSelected === AVAILABLE_THEMES.DEFAULT || document.getElementById(selector);
    if (!alreadyLoaded) {
        loaderAsync.css({
            src: `/css/${selector}.css`,
            id: selector,
            className: selector
        });
    }

    // Remove other theming css files
    availableThemes.filter(function (theme) {
        return theme !== themeSelected;
    }).map(function (theme) {
        const themeToRemove = document.getElementById(`theme-${theme}`);
        if (themeToRemove) {
            themeToRemove.parentNode.removeChild(themeToRemove);
        }
    });
}

/**
 * Apply theming by added or removed custom css files.
 *
 * @extends React.Component
 * @property {string} props.themeSelected - Current selected theme
 */
class LayoutTheme extends Component {
    /**
     * Invoked once, only on the client (not on the server),
     * immediately after the initial rendering occurs.
     *
     * @returns {void}
     */
    componentDidMount() {
        applyTheme(this.props.themeSelected);
    }

    /**
     * Invoked immediately after the component's updates are flushed to
     * the DOM. This method is not called for the initial render.
     *
     * @param {Object} prevProps - The old component properties
     * @returns {void}
     */
    componentDidUpdate(prevProps) {
        const themeSelected = this.props.themeSelected;

        if (themeSelected !== prevProps.themeSelected) {
            applyTheme(themeSelected);
        }
    }

    /**
     * The required render function to return a single react child element.
     *
     * @returns {ReactElement} React component markup
     */
    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        );
    }

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 */
LayoutTheme.propTypes = { // eslint-disable-line immutable/no-mutation
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    themeSelected: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 */
LayoutTheme.defaultProps = { // eslint-disable-line immutable/no-mutation
    themeSelected: AVAILABLE_THEMES.DEFAULT
};

/**
 * The component will subscribe to Redux store updates. Any time it updates,
 * mapStateToProps will be called, Its result must be a plain object,
 * and it will be merged into the component’s props.
 *
 * @private
 * @param {Object<string, *} state - The current redux store state
 * @returns {Object<string, *} The mapped state properties
 */
function mapStateToProps(state) {
    return {
        themeSelected: selectStateThemeSelected(state)
    };
}

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 */
export default connect(
    mapStateToProps
)(LayoutTheme);

