/**
 * Es6 module for handling theming as component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2018
 * @version 0.0.2
 *
 * @see {@link https://blog.risingstack.com/react-js-best-practices-for-2016/}
 *
 * @requires react
 * @requires prop-types
 * @requires react-redux
 * @requires pubsub-js
 * @requires common/constants/theme
 * @requires common/state/theme/selector
 *
 * @changelog
 * - 0.0.2 Use pubsub for decoupling
 * - 0.0.1 Basic functions and structure
 */
import { Component, default as React, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PubSub from 'pubsub-js';

import { AVAILABLE_THEMES, THEME_CHANGE_MESSAGE } from '../../constants/theme';
import { selectStateThemeSelected } from '../../state/theme/selector';

/**
 * Apply theming by added or removed custom css files.
 *
 * @augments React.Component
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
        // eslint-disable-next-line react/destructuring-assignment
        PubSub.publish(THEME_CHANGE_MESSAGE, this.props.themeSelected);
    }

    /**
     * Invoked immediately after the component's updates are flushed to
     * the DOM. This method is not called for the initial render.
     *
     * @param {object} prevProps - The old component properties
     * @returns {void}
     */
    componentDidUpdate(prevProps) {
        const { themeSelected } = this.props;

        if (themeSelected !== prevProps.themeSelected) {
            PubSub.publish(THEME_CHANGE_MESSAGE, themeSelected);
        }
    }

    /**
     * The required render function to return a single react child element.
     *
     * @returns {ReactElement} React component markup
     */
    render() {
        const { children } = this.props;

        return <Fragment>{children}</Fragment>;
    }
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
// eslint-disable-next-line immutable/no-mutation
LayoutTheme.propTypes = {
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    themeSelected: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
// eslint-disable-next-line immutable/no-mutation
LayoutTheme.defaultProps = {
    themeSelected: AVAILABLE_THEMES.DEFAULT
};

/**
 * The component will subscribe to Redux store updates. Any time it updates,
 * mapStateToProps will be called, Its result must be a plain object,
 * and it will be merged into the component’s props.
 *
 * @private
 * @param {object<string, *>} state - The current redux store state
 * @returns {object<string, *>} The mapped state properties
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
export default connect(mapStateToProps)(LayoutTheme);
