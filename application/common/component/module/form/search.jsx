/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link http://maximilianschmitt.me/posts/tutorial-csrf-express-4/}
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { get } from 'lodash';

import { selectStateSearchTerm } from '../../../state/search/selector';
import { selectStateCsrfToken } from '../../../state/csrf/selector';
import { changeSearchTerm } from '../../../state/search/duck';
import { eventPreventDefault } from '../../../utils/event';
import { GridRow, GridCol } from '../../grid';
import { Form, Fieldset, Legend, InputGroup } from '../../element';

/**
 * Function representing a component to return a single react child element.
 *
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export function ModuleFormSearch(props) {
    const { content, csrfToken, searchTerm, handleSearchChangeTerm } = props;

    return (
        <Form
            action="/search/"
            className="m-form--search"
            id="m-form--search"
            itemProp="potentialAction"
            itemScope
            itemType="http://schema.org/SearchAction"
            onSubmit={eventPreventDefault}
            role="search"
        >
            <Fieldset>
                <Legend isVisuallyHidden>{content.legend}</Legend>

                <GridRow>
                    <GridCol cols={'12'}>
                        <InputGroup
                            id={'name'}
                            isLabelVisuallyHidden
                            itemProp="query-input"
                            label={content.inputTerm}
                            name={'name'}
                            onChange={handleSearchChangeTerm}
                            placeholder={content.inputTerm}
                            type="search"
                            value={searchTerm}
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
 * @property {string} [content....] - Translated string for element legend
 * @property {object} [storeState={}] - The redux contact state
 * @property {Function} [handleContactChange=Function.prototype] - Action handler for redux contact state
 * @property {string} [routerState] - The current router params
 * @property {string} [csrfToken=''] - The csrf token for validation
 */
ModuleFormSearch.propTypes = {
    content: PropTypes.shape({
        inputTerm: PropTypes.string,
        legend: PropTypes.string
    }),
    searchTerm: PropTypes.string,
    handleSearchChangeTerm: PropTypes.func,
    csrfToken: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 * @see ModuleFormContact.propTypes
 */
ModuleFormSearch.defaultProps = {
    content: {},
    searchTerm: '',
    handleSearchChangeTerm: Function.prototype,
    csrfToken: ''
};

/**
 * The component will subscribe to Redux store updates. Any time it updates,
 * mapStateToProps will be called, Its result must be a plain object,
 * and it will be merged into the component’s props.
 *
 * @private
 * @param {object.<*>} state - The redux store state
 * @param {object.<*>} ownProps - The current component props
 * @returns {object}
 */
function mapStateToProps(state, ownProps) {
    return {
        searchTerm: selectStateSearchTerm(state) || ownProps.searchTerm,
        csrfToken: selectStateCsrfToken(state)
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
        handleSearchChangeTerm: (e) => {
            dispatch(changeSearchTerm(get(e, 'target.value')));
        }
    };
}

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 */
export const ModuleFormSearchConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModuleFormSearch);
