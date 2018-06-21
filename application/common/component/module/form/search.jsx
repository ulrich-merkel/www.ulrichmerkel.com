/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.4
 *
 * @see {@link http://maximilianschmitt.me/posts/tutorial-csrf-express-4/}
 *
 * @requires react
 * @requires prop-types
 * @requires react-redux
 * @requires lodash
 * @requires common/config/application
 * @requires common/utils/environment
 * @requires common/utils/xor
 * @requires common/utils/logger
 * @requires common/utils/scroll-to
 * @requires common/utils/xhr
 * @requires common/state/selectors
 * @requires common/state/actions
 * @requires common/component/grid/row
 * @requires common/component/grid/col
 * @requires common/component/element/form
 * @requires common/component/element/fieldset
 * @requires common/component/element/legend
 * @requires common/component/element/input-group
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { get } from 'lodash';

import {
    selectStateSearchTerm,
    selectStateCsrfToken
} from '../../../state/selectors';
import { changeSearchTerm } from '../../../state/actions';
import { eventPreventDefault } from '../../../utils/event';
import {
    GridRow,
    GridCol
} from '../../grid';
import {
    Form,
    Fieldset,
    Legend,
    InputGroup
} from '../../element';

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {Object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
function ModuleFormSearch(props) {
    const {
        content,
        csrfToken,
        searchTerm,
        handleSearchChangeTerm
    } = props;

    return (
        <Form
            action='/search/'
            className='m-form--search'
            id='m-form--search'
            itemProp='potentialAction'
            itemScope
            itemType='http://schema.org/SearchAction'
            onSubmit={eventPreventDefault}
            role='search'
        >
            <Fieldset>

                <Legend isVisuallyHidden>
                    {content.legend}
                </Legend>

                <GridRow>
                    <GridCol cols={'12'}>
                        <InputGroup
                            id={'name'}
                            isLabelVisuallyHidden
                            itemProp='query-input'
                            label={content.inputTerm}
                            name={'name'}
                            onChange={handleSearchChangeTerm}
                            placeholder={content.inputTerm}
                            type='search'
                            value={searchTerm}
                        />
                    </GridCol>
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
 * @property {string} [content....] - Translated string for element legend
 * @property {Object} [storeState={}] - The redux contact state
 * @property {Function} [handleContactChange=Function.prototype] - Action handler for redux contact state
 * @property {string} [routerState] - The current router params
 * @property {string} [csrfToken=''] - The csrf token for validation
 */
ModuleFormSearch.propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    content: PropTypes.shape({
    }),
    /* eslint-enable react/no-unused-prop-types */
    searchTerm: PropTypes.string,
    handleSearchChangeTerm: PropTypes.func,
    csrfToken: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
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
 * @function
 * @private
 * @param {Object.<*>} state - The redux store state
 * @param {Object.<*>} ownProps - The current component props
 * @returns {Object}
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
 * @function
 * @private
 * @param {Function} dispatch - The redux store dispatch function
 * @returns {Object}
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
const ModuleFormSearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModuleFormSearch);

export default ModuleFormSearchContainer;
export {
    ModuleFormSearch
};
