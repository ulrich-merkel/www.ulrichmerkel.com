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

import { toggleThemeSelected } from '../../../state/color-scheme/duck';
import { selectStateCsrfToken } from '../../../state/csrf/selector';
import { selectStateColorSchemeSelectedDarkMode } from '../../../state/color-scheme/selector';
import { toggleReducedMotionSelected } from '../../../state/reduced-motion/duck';
import { selectStateReducedMotionSelectedReduce } from '../../../state/reduced-motion/selector';
import { eventPreventDefault } from '../../../utils/event';
import { GridRow } from '../../grid/row';
import { GridCol } from '../../grid/col';
import { Toggle } from '../../element/toggle';
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
export function ModuleFormSettings(props) {
    const {
        content,
        csrfToken,
        colorSchemeSelectedDarkMode,
        onToggleReducedMotionSelected,
        reducedMotionSelectedReduce,
        onToggleThemeSelected
    } = props;

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
                    <GridCol cols={'6'}>
                        <Toggle
                            id="dark-mode"
                            label="Dark mode"
                            onChange={onToggleThemeSelected}
                            checked={colorSchemeSelectedDarkMode}
                        />
                    </GridCol>
                </GridRow>
                <GridRow>
                    <GridCol cols={'6'}>
                        <Toggle
                            id="reduced-motion-toggle"
                            label="Reduced motion"
                            checked={reducedMotionSelectedReduce}
                            onChange={onToggleReducedMotionSelected}
                        />
                    </GridCol>
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
ModuleFormSettings.propTypes = {
    content: PropTypes.shape({
        legend: PropTypes.string
    }),
    colorSchemeSelectedDarkMode: PropTypes.bool,
    csrfToken: PropTypes.string,
    onToggleReducedMotionSelected: PropTypes.func,
    onToggleThemeSelected: PropTypes.func,
    reducedMotionSelectedReduce: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 * @see ModuleFormContact.propTypes
 */
ModuleFormSettings.defaultProps = {
    colorSchemeSelectedDarkMode: false,
    content: {},
    csrfToken: '',
    onToggleReducedMotionSelected: noop,
    onToggleThemeSelected: noop,
    reducedMotionSelectedReduce: false
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
        colorSchemeSelectedDarkMode: selectStateColorSchemeSelectedDarkMode(
            state
        ),
        reducedMotionSelectedReduce: selectStateReducedMotionSelectedReduce(
            state
        )
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
 * @type {object<string, Function>}
 */
const mapDispatchToProps = {
    onToggleThemeSelected: toggleThemeSelected,
    onToggleReducedMotionSelected: toggleReducedMotionSelected
};

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 */
export const ModuleFormSettingsConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModuleFormSettings);
