/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires react
 * @requires prop-types
 * @requires react-redux
 * @requires lodash
 * @requires common/constants/theme
 * @requires common/state/selectors
 * @requires common/state/actions
 * @requires common/component/grid/row
 * @requires common/component/grid/col
 * @requires common/component/element/form
 * @requires common/component/element/fieldset
 * @requires common/component/element/legend
 * @requires common/component/element/button
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isFunction } from 'lodash';

import { AVAILABLE_THEMES } from '../../../constants/theme';
import {
    selectStateCsrfToken,
    selectStateThemeSelected
} from '../../../state/selectors';
import { changeThemeSelected } from '../../../state/actions';
import {
    GridRow,
    GridCol
} from '../../grid';
import {
    Form,
    Fieldset,
    Legend,
    Button
} from '../../element';

const noop = Function.prototype;

/**
 * Handle form submit event.
 *
 * @function
 * @private
 * @param {Object} event - The current event object
 * @returns {void}
 */
function preventDefault(event) {
    if (event && isFunction(event.preventDefault)) {
        event.preventDefault();
    }
}

/**
 * Function representing a component to return a single react child element.
 *
 * @param {Object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function ModuleFormTheme(props) {
    const {
        content,
        csrfToken,
        themeSelected,
        onchangeThemeSelectedDefault,
        onchangeThemeSelectedGrey
    } = props;

    const items = [
        {
            onClick: onchangeThemeSelectedDefault,
            i18n: 'default',
            value: AVAILABLE_THEMES.DEFAULT
        },
        {
            onClick: onchangeThemeSelectedGrey,
            i18n: 'grey',
            value: AVAILABLE_THEMES.GREY
        }
    ];
    return (
        <Form
            action='/theme/'
            className='m-form--theme'
            id='m-form--theme'
            itemProp='potentialAction'
            itemScope
            itemType='http://schema.org/Action'
            onSubmit={preventDefault}
        >
            <Fieldset>

                <Legend isVisuallyHidden>
                    {content.legend}
                </Legend>

                <GridRow>
                    {items.map(function (item) {
                        const className = themeSelected === item.value
                            ? 'is-active'
                            : '';

                        return (
                            <GridCol key={`button-theme-switch-${item.value}`} cols={'6'}>
                                <Button
                                    onClick={item.onClick}
                                    {...{ className }}
                                >
                                    {item.i18n}
                                </Button>
                            </GridCol>
                        );
                    })}
                </GridRow>
                <input type='hidden' name='_csrf' value={csrfToken} />
            </Fieldset>
        </Form>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {Object}
 */
ModuleFormTheme.propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    content: PropTypes.shape({
    }),
    /* eslint-enable react/no-unused-prop-types */
    themeSelected: PropTypes.string,
    onchangeThemeSelectedDefault: PropTypes.func,
    onchangeThemeSelectedGrey: PropTypes.func,
    csrfToken: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ModuleFormContact.propTypes
 */
ModuleFormTheme.defaultProps = {
    content: {},
    themeSelected: AVAILABLE_THEMES.DEFAULT,
    csrfToken: '',
    onchangeThemeSelectedDefault: noop,
    onchangeThemeSelectedGrey: noop
};

/**
 * The component will subscribe to Redux store updates. Any time it updates,
 * mapStateToProps will be called, Its result must be a plain object,
 * and it will be merged into the component’s props.
 *
 * @function
 * @private
 * @param {Object.<*>} state - The redux store state
 * @returns {Object}
 */
function mapStateToProps(state) {
    return {
        csrfToken: selectStateCsrfToken(state),
        themeSelected: selectStateThemeSelected(state)
    };
}

/**
 * If an object is passed, each function inside it will be assumed to
 * be a Redux action creator. An object with the same function names,
 * but with every action creator wrapped into a dispatch call so they
 * may be invoked directly, will be merged into the component’s props.
 * If a function is passed, it will be given dispatch.
 *
 * @function
 * @private
 * @param {Function} dispatch - The redux store dispatch function
 * @returns {Object}
 */
function mapDispatchToProps(dispatch) {
    return {
        onchangeThemeSelectedDefault: (event) => {
            preventDefault(event);
            dispatch(changeThemeSelected('default'));
        },
        onchangeThemeSelectedGrey: (event) => {
            preventDefault(event);
            dispatch(changeThemeSelected('grey'));
        }
    };
}

/**
* Connects a React component to a Redux store. It does not modify the
* component class passed to it. Instead, it returns a new, connected component class.
*/
const ModuleFormThemeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModuleFormTheme);

export default ModuleFormThemeContainer;
export {
    ModuleFormTheme
};