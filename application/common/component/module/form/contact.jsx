/* eslint-disable immutable/no-mutation, immutable/no-this, promise/avoid-new */
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
import { isFunction, has } from 'lodash';

import configApplication, { url } from './../../../config/application';
import { isBrowser } from './../../../utils/environment';
import xor from './../../../utils/xor';
import logger from './../../../utils/logger';
import scrollTo from './../../../utils/scroll-to';
import xhr, { XHR_DEFAULT_HEADERS } from './../../../utils/xhr';
import { selectStateContact, selectStateCsrfToken } from './../../../state/selectors';
import { changeContact } from './../../../state/contact/actions';
import { validate, isValid } from './../../../state/contact/utils';
import Row from './../../grid/row';
import Col from './../../grid/col';
import Form from './../../element/form';
import Fieldset from './../../element/fieldset';
import Legend from './../../element/legend';
import InputGroup from './../../element/input-group';
import TextareaGroup from './../../element/textarea-group';
import ButtonGroup from './../../element/button-group';
import Headline from './../../element/headline';
import P from './../../element/paragraph';
import Button from './../../element/button';

const defaultState = {
    name: '',
    email: '',
    website: '',
    subject: '',
    message: '',
    namePristine: false,
    emailPristine: false,
    websitePristine: false,
    subjectPristine: false,
    messagePristine: false,
    pending: false,
    success: false,
    error: false
};

const xorUse = configApplication.xor.use;
const xorKey = configApplication.xor.key;

/**
 * Scroll to text message, usually for smaller screens after submitting.
 * More or less a work around until Element.scrollIntoView() is fully
 * supported.
 *
 * @function
 * @private
 * @param {Object} textMessage - The text message dom node
 * @returns {void}
 */
function scrollToTextMessage(textMessage) {
    if (textMessage) {
        const boundingClientRectTop = Math.abs(textMessage.getBoundingClientRect().top);
        scrollTo({
            top: boundingClientRectTop
        });
    }
}
/**
 * Helper function to send post request.
 *
 * @function
 * @private
 * @param {Object} data - The post data to be send
 * @param {Object} [csrfToken=''] - The csrf token string to be validated
 * @returns {Future}
 */
function send(data, csrfToken = '') {
    const bodyData = xorUse
        ? xor.encrypt(JSON.stringify(data), xorKey)
        : JSON.stringify(data);

    const xhrData = {
        headers: Object.assign({}, XHR_DEFAULT_HEADERS, { 'X-CSRF-Token': csrfToken }),
        body: JSON.stringify({
            _csrf: csrfToken,
            data: bodyData
        })
    };

    return new Promise((resolve, reject) => {
        xhr(url.contact, xhrData).then(resolve).catch(reject);
    });
}

/**
 * Return current stored state value or default
 *
 * @function
 * @private
 * @param {string} key - The state's key
 * @param {Object} storeState - The redux contact state
 * @returns {*}
 */
function getState(key, storeState) {
    return storeState && storeState[key] !== undefined ? storeState[key] : defaultState[key];
}

/**
 * Class representing a component.
 *
 * @class
 * @extends React.Component
 */
class ModuleFormContact extends Component {

    /**
     * The actual class constructor.
     *
     * @constructs
     * @param {Object} [props] - The initial class properties
     * @returns {void}
     */
    constructor(props) {
        super(props);

        const {
            storeState,
            routerState
        } = props;

        // setup initial state properties
        this.state = {
            name: getState('name', storeState),
            email: getState('email', storeState),
            website: getState('website', storeState),
            subject: getState('subject', storeState),
            message: getState('message', storeState),
            namePristine: getState('namePristine', storeState),
            emailPristine: getState('emailPristine', storeState),
            subjectPristine: getState('subjectPristine', storeState),
            messagePristine: getState('messagePristine', storeState),
            pending: getState('pending', storeState),
            success: routerState === 'success' || getState('success', storeState),
            error: routerState === 'error' || getState('error', storeState)
        };

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
        // @TODO: Use throttle for onChange, this.onChange = throttle(this.onChange.bind(this), 100);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onReset = this.onReset.bind(this);

    }

    /**
     * Handle input value change.
     *
     * @function
     * @private
     * @param {Object} e - The current sytheticEvent object
     * @returns {void}
     */
    onChange(e) {

        if (!has(e, 'target')) {
            return;
        }

        const target = e.target;
        const stateValue = target.value;
        const stateName = target.name;

        /**
         * setState() is not a synchronous operation, so we have to pass a callback.
         *
         * setState() does not immediately mutate this.state but creates a pending state transition.
         * Accessing this.state after calling this method can potentially return the existing value.
         * There is no guarantee of synchronous operation of calls to setState and calls may be batched
         * for performance gains.
         *
         * @see {@link http://facebook.github.io/react/docs/component-api.html#setstate}
         * @see {@link http://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name}
         */
        this.setState(
            {
                [stateName]: stateValue,
                [`${stateName}Pristine`]: true
            },
            () => {
                this.props.handleContactChange(this.state);
            }
        );

    }

    /**
     * Handle form submit event.
     *
     * @function
     * @private
     * @param {Object} e - The current event object
     * @returns {void}
     */
    onSubmit(e) {
        if (e && isFunction(e.preventDefault)) {
            e.preventDefault();
        }
        this.send();
    }

    /**
     * Handle form reset event.
     *
     * @function
     * @private
     * @returns {void}
     */
    onReset() {
        this.setState(
            defaultState,
            () => {
                this.props.handleContactChange(this.state);
            }
        );
    }

    /**
     * Helper function to render message.
     *
     * @todo Should be done in article module component
     *
     * @function
     * @private
     * @param {string} headline - The message headline
     * @param {string} text - The message text body
     * @param {string} btnTitle - The message button title
     * @param {string} btnLabel - The message button label
     * @returns {React.Element}
     */
    getTextMessage(headline, text, btnTitle, btnLabel) {
        return (
            <div className='m-article__text' id='m-form--contact-success' itemProp='text' ref={(ref) => { this.textMessage = ref; }}>
                <Headline htmlElement='h3'>
                    {headline}
                </Headline>
                <div className='m-article__description is-centered' itemProp='description'>
                    <P>
                        {text}
                    </P>
                    <P>
                        <Button isLarge className='is-centered' onClick={this.onReset} title={btnTitle} to={url.contact}>
                            {btnLabel}
                        </Button>
                    </P>
                </div>
            </div>
        );
    }

    /**
     * Send state/form data as json to server.
     *
     * @function
     * @private
     * @returns {void}
     */
    send() {

        const { csrfToken } = this.props;
        const state = this.state;
        const data = {
            name: String(state.name),
            email: String(state.email),
            subject: String(state.subject),
            message: String(state.message)
        };

        this.setState({
            pending: true,
            success: false,
            error: false
        }, () => {
            send(data, csrfToken).then((response) => { // eslint-disable-line promise/catch-or-return
                if (!response || !response.ok) {
                    throw new Error(`Can't send email! ${response.statusText}`);
                }
                return this.setState({
                    success: true,
                    pending: false
                });
            })
            .catch((reason) => {
                this.setState({
                    error: true,
                    pending: false
                }, () => {
                    logger.warn(reason);
                });
            })
            .then(() => {
                return scrollToTextMessage(this.textMessage);
            });
        });

    }

    /**
     * Render success message.
     *
     * @function
     * @private
     * @returns {void}
     */
    renderSuccess() {

        const { content } = this.props;

        return this.getTextMessage(
            content.thankYouHeadline,
            content.thankYouText,
            content.btnRenewTitle,
            content.btnRenewLabel
        );

    }

    /**
     * Render error message.
     *
     * @function
     * @private
     * @returns {void}
     */
    renderError() {

        const { content } = this.props;

        return this.getTextMessage(
            content.errorHeadline,
            content.errorText,
            content.btnTryAgainTitle,
            content.btnTryAgainLabel
        );

    }

    /**
     * The required render function to return a single react child element.
     *
     * @function
     * @returns {React.Element} React component markup
     */
    render() {

        const {
            content,
            csrfToken
        } = this.props;

        const state = this.state;

        if (state.success) {
            return this.renderSuccess();
        }

        if (state.error) {
            return this.renderError();
        }

        return (
            <Form
                action='/contact/'
                className='m-form--contact'
                id='m-form--contact'
                itemProp='potentialAction'
                onSubmit={this.onSubmit}
                onReset={this.onReset}
            >
                <Fieldset>

                    <Legend className='is-visually-hidden'>
                        {content.legend}
                    </Legend>

                    <Row>
                        <Col cols={'6'}>
                            <InputGroup
                                id={'name'}
                                name={'name'}
                                onChange={this.onChange}
                                label={content.inputName}
                                value={state.name}
                                isValid={validate(state).name}
                                isPristine={state.namePristine}
                            />
                        </Col>
                        <Col cols={'6'}>
                            <InputGroup
                                id={'email'}
                                name={'email'}
                                type={'email'}
                                onChange={this.onChange}
                                label={content.inputEmail}
                                value={state.email}
                                isValid={validate(state).email}
                                isPristine={state.emailPristine}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <InputGroup
                                id={'subject'}
                                name={'subject'}
                                onChange={this.onChange}
                                label={content.inputSubject}
                                value={state.subject}
                                isValid={validate(state).subject}
                                isPristine={state.subjectPristine}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TextareaGroup
                                id={'message'}
                                name={'message'}
                                onBlur={this.onBlur}
                                onChange={this.onChange}
                                label={content.inputMessage}
                                value={state.message}
                                isValid={validate(state).message}
                                isPristine={state.messagePristine}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col cols={'6'}>
                            <ButtonGroup
                                id={'reset'}
                                name={'reset'}
                                type={'reset'}
                                title={content.btnResetTitle}
                                label={content.btnResetLabel}
                                className={'m-form__group--reset hide-on-print'}
                                isSecondary
                                isDisabled={state.pending}
                            />
                        </Col>
                        <Col cols={'6'}>
                            <ButtonGroup
                                id={'submit'}
                                name={'submit'}
                                type={'submit'}
                                title={content.btnSubmitTitle}
                                label={content.btnSubmitLabel}
                                className={'m-form__group--submit hide-on-print'}
                                btnClassName={'c-btn--submit'}
                                isPrimary
                                isDisabled={!state.pending && !isValid(state) && isBrowser()}
                                isPending={state.pending}
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
 * @property {string} [content.legend] - Translated string for element legend
 * @property {string} [content.inputName] - Translated string for name input
 * @property {string} [content.inputEmail] - Translated string for email input
 * @property {string} [content.inputWebsite] - Translated string for website input
 * @property {string} [content.inputSubject] - Translated string for subject input
 * @property {string} [content.inputMessage] - Translated string for message textarea
 * @property {string} [content.btnResetTitle] - Translated string for reset button title
 * @property {string} [content.btnResetLabel] - Translated string for reset button label
 * @property {string} [content.btnSubmitTitle] - Translated string for submit button title
 * @property {string} [content.btnSubmitLabel] - Translated string for submit button label
 * @property {string} [content.btnRenewTitle] - Translated string for renew button title
 * @property {string} [content.btnRenewLabel] - Translated string for renew button label
 * @property {string} [content.thankYou] - Translated string for thank you message
 * @property {string} [content.errorHeadline] - Translated string for error headline
 * @property {string} [content.errorText] - Translated string for error message
 * @property {string} [content.btnTryAgainTitle] - Translated string for retry button title
 * @property {string} [content.btnTryAgainLabel] - Translated string for retry button label
 * @property {Object} [storeState={}] - The redux contact state
 * @property {Function} [handleContactChange=Function.prototype] - Action handler for redux contact state
 * @property {string} [routerState] - The current router params
 * @property {string} [csrfToken=''] - The csrf token for validation
 */
ModuleFormContact.propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    content: PropTypes.shape({
        legend: PropTypes.string,
        inputName: PropTypes.string,
        inputEmail: PropTypes.string,
        inputWebsite: PropTypes.string,
        inputSubject: PropTypes.string,
        inputMessage: PropTypes.string,
        btnResetTitle: PropTypes.string,
        btnResetLabel: PropTypes.string,
        btnSubmitTitle: PropTypes.string,
        btnSubmitLabel: PropTypes.string,
        btnRenewTitle: PropTypes.string,
        btnRenewLabel: PropTypes.string,
        thankYou: PropTypes.string,
        errorHeadline: PropTypes.string,
        errorText: PropTypes.string,
        btnTryAgainTitle: PropTypes.string,
        btnTryAgainLabel: PropTypes.string
    }),
    /* eslint-enable react/no-unused-prop-types */
    storeState: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    handleContactChange: PropTypes.func,
    routerState: PropTypes.string, // eslint-disable-line react/require-default-props
    csrfToken: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {Object}
 * @see ModuleFormContact.propTypes
 */
ModuleFormContact.defaultProps = {
    content: {},
    storeState: {},
    handleContactChange: Function.prototype,
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
 * @returns {Object}
 */
function mapStateToProps(state) {
    return {
        storeState: selectStateContact(state),
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
        handleContactChange: (contact) => {
            dispatch(changeContact(contact));
        }
    };
}

/**
* Connects a React component to a Redux store. It does not modify the
* component class passed to it. Instead, it returns a new, connected component class.
*/
const ModuleFormContactContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModuleFormContact);

export default ModuleFormContactContainer;
export {
    ModuleFormContact
};
