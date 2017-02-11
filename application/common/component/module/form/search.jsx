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
 * @TODO: Add classname and htmlElement to props, add honeypot again
 *
 * @requires react
 * @requires react-redux
 * @requires lodash
 * @requires common/config/application
 * @requires common/utils/environment
 * @requires common/utils/xor
 * @requires common/utils/logger
 * @requires common/utils/scroll-to
 * @requires common/utils/xhr
 * @requires common/state/selectors
 * @requires common/state/contact/actions
 * @requires common/state/contact/utils
 * @requires common/component/grid/row
 * @requires common/component/grid/col
 * @requires common/component/element/form
 * @requires common/component/element/fieldset
 * @requires common/component/element/legend
 * @requires common/component/element/input-group
 * @requires common/component/element/textarea-group
 * @requires common/component/element/button-group
 * @requires common/component/element/headline
 * @requires common/component/element/paragraph
 * @requires common/component/element/button
 *
 * @changelog
 * - 0.0.4 Refactored, simplified state
 * - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { isFunction, get } from 'lodash';

import { selectStateSearchTerm, selectStateCsrfToken } from './../../../state/selectors';
import { changeSearchTerm } from './../../../state/actions';
import Row from './../../grid/row';
import Col from './../../grid/col';
import Form from './../../element/form';
import Fieldset from './../../element/fieldset';
import Legend from './../../element/legend';
import InputGroup from './../../element/input-group';
import ButtonGroup from './../../element/button-group';

/**
 * Handle form submit event.
 *
 * @function
 * @private
 * @param {Object} e - The current event object
 * @returns {void}
 */
function onSubmit(e) {
    if (e && isFunction(e.preventDefault)) {
        e.preventDefault();
    }
}

/**
 * Class representing a component.
 *
 * @class
 * @extends React.Component
 */
class ModuleFormSearch extends Component {

    /**
     * The actual class constructor.
     *
     * @constructs
     * @param {Object} [props] - The initial class properties
     * @returns {void}
     */
    constructor(props) {
        super(props);

        /**
         * A bind call or arrow function in a JSX prop will create a brand new
         * function on every single render. This is bad for performance, as it
         * will result in the garbage collector being invoked way more than is necessary.
         *
         * Unfortunately React ES6 classes do not autobind their methods like components created
         * with the older React.createClass syntax. There are several approaches to binding methods
         * for ES6 classes. A basic approach is to just manually bind the methods in the constructor
         *
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md}
         */
        this.onReset = this.onReset.bind(this);

    }

    /**
     * Handle form reset event.
     *
     * @function
     * @private
     * @returns {void}
     */
    onReset() {
        this.props.handleSearchChangeTerm('');
    }

    /**
     * The required render function to return a single react child element.
     *
     * @function
     * @returns {ReactElement} React component markup
     */
    render() {
        const {
            content,
            csrfToken,
            searchTerm,
            handleSearchChangeTerm
        } = this.props;

        return (
            <Form
                action='/search/'
                id='m-form--search'
                itemProp='potentialAction'
                onSubmit={onSubmit}
                onReset={this.onReset}
            >
                <Fieldset>

                    <Legend isVisuallyHidden>
                        {content.legend}
                    </Legend>

                    <Row>
                        <Col cols={'12'}>
                            <InputGroup
                                id={'name'}
                                name={'name'}
                                onChange={handleSearchChangeTerm}
                                label={content.inputTerm}
                                placeholder={content.inputTerm}
                                isLabelVisuallyHidden
                                value={searchTerm}
                            />
                        </Col>
                    </Row>
                    <input type='hidden' name='_csrf' value={csrfToken} />
                </Fieldset>
            </Form>
        );
    }
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
    // routerState: PropTypes.string, // eslint-disable-line react/require-default-props
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
