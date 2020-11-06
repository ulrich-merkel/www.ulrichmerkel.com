/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { AVAILABLE_THEMES } from '../../../constants/theme';
import { selectStateCsrfToken } from '../../../state/csrf/selector';
import { selectStateColorSchemeSelected } from '../../../state/color-scheme/selector';
import { changeThemeSelected } from '../../../state/color-scheme/duck';
import { eventPreventDefault } from '../../../utils/event';
import { GridRow, GridCol } from '../../grid';
import { Button } from '../../element/button';
import { Fieldset } from '../../element/fieldset';
import { Form } from '../../element/form';
import { Legend } from '../../element/legend';

const noop = Function.prototype;

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export function ModuleFormTheme(props) {
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
            action="/theme/"
            className="m-form--theme"
            id="m-form--theme"
            itemProp="potentialAction"
            itemScope
            itemType="http://schema.org/Action"
            onSubmit={eventPreventDefault}
        >
            <Fieldset>
                <Legend isVisuallyHidden>{content.legend}</Legend>

                <GridRow>
                    {items.map(function mapItems(item) {
                        const className =
                            themeSelected === item.value ? 'is-active' : '';

                        return (
                            <GridCol
                                key={`button-theme-switch-${item.value}`}
                                cols={'6'}
                            >
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
                <input type="hidden" name="_csrf" value={csrfToken} />
            </Fieldset>
        </Form>
    );
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
ModuleFormTheme.propTypes = {
    content: PropTypes.shape({
        legend: PropTypes.string
    }),
    themeSelected: PropTypes.string,
    onchangeThemeSelectedDefault: PropTypes.func,
    onchangeThemeSelectedGrey: PropTypes.func,
    csrfToken: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
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
 * @private
 * @param {object.<*>} state - The redux store state
 * @returns {object}
 */
function mapStateToProps(state) {
    return {
        csrfToken: selectStateCsrfToken(state),
        themeSelected: selectStateColorSchemeSelected(state)
    };
}

/**
 * If an object is passed, each function inside it will be assumed to
 * be a Redux action creator. An object with the same function names,
 * but with every action creator wrapped into a dispatch call so they
 * may be invoked directly, will be merged into the component’s props.
 * If a function is passed, it will be given dispatch.
 *
 * @private
 * @param {Function} dispatch - The redux store dispatch function
 * @returns {object}
 */
function mapDispatchToProps(dispatch) {
    return {
        onchangeThemeSelectedDefault: (event) => {
            eventPreventDefault(event);
            dispatch(changeThemeSelected('light'));
        },
        onchangeThemeSelectedGrey: (event) => {
            eventPreventDefault(event);
            dispatch(changeThemeSelected('dark'));
        }
    };
}

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 */
export const ModuleFormThemeConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModuleFormTheme);
