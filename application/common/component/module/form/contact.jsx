/* eslint-disable immutable/no-mutation, immutable/no-this, promise/avoid-new, react/no-did-mount-set-state */
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
 * @TODO Add classname and htmlElement to props, add honeypot again
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
 * @requires common/state/contact/actions
 * @requires common/state/contact/utils
 * @requires common/component/grid/row
 * @requires common/component/grid/col
 * @requires common/component/element/button-group
 * @requires common/component/element/fieldset
 * @requires common/component/element/form
 * @requires common/component/element/input-group
 * @requires common/component/element/legend
 * @requires common/component/element/textarea-group
 *
 * @changelog
 * - 0.0.4 Refactored, simplified state
 * - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import { default as React, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { has } from 'lodash';

import { configApplication, url } from '../../../config/application';
import { isBrowser } from '../../../utils/environment';
import { encrypt } from '../../../utils/xor';
import { logger } from '../../../utils/logger';
import { scrollTo } from '../../../utils/scroll-to';
import { xhr, XHR_DEFAULT_HEADERS } from '../../../utils/xhr';
import { selectStateContactForm } from '../../../state/contact/selector';
import { selectStateCsrfToken } from '../../../state/csrf/selector';
import { changeContactForm } from '../../../state/contact/duck';
import { canSendForm, validate } from '../../../state/contact/utils';
import { eventPreventDefault } from '../../../utils/event';
import { GridCol, GridRow } from '../../grid';
import {
    ButtonGroup,
    Fieldset,
    Form,
    InputGroup,
    Legend,
    TextareaGroup
} from '../../element';
import ModuleFormContactMessage from './contact/message';

const defaultState = {
    name: '',
    email: '',
    subject: '',
    message: '',
    pristine: false,
    namePristine: false,
    emailPristine: false,
    websitePristine: false,
    subjectPristine: false,
    messagePristine: false,
    pending: false,
    success: false,
    error: false,
    browser: false
};

const configApplicationXor = configApplication.xor;
const xorUse = configApplicationXor.use;
const xorKey = configApplicationXor.key;

/**
 * Scroll to text message, usually for smaller screens after submitting.
 * More or less a work around until Element.scrollIntoView() is fully
 * supported.
 *
 * @private
 * @param {object} textMessage - The text message dom node
 * @returns {void}
 */
function scrollToTextMessage(textMessage) {
    if (textMessage) {
        const boundingClientRectTop = Math.abs(
            textMessage.getBoundingClientRect().top
        );
        scrollTo({
            top: boundingClientRectTop
        });
    }
}

/**
 * Helper function to send post request.
 *
 * @private
 * @param {object} data - The post data to be send
 * @param {object} [csrfToken=''] - The csrf token string to be validated
 * @returns {Future}
 */
function send(data, csrfToken = '') {
    const bodyData = xorUse
        ? encrypt(JSON.stringify(data), xorKey)
        : JSON.stringify(data);

    const xhrData = {
        headers: { ...XHR_DEFAULT_HEADERS, 'X-CSRF-Token': csrfToken },
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
 * @private
 * @param {string} key - The state's key
 * @param {object} storeState - The redux contact state
 * @returns {*}
 */
function getState(key, storeState) {
    return storeState && storeState[key] !== undefined
        ? storeState[key]
        : defaultState[key];
}

/**
 * Class representing a component.
 *
 * @class
 * @augments React.Component
 */
class ModuleFormContact extends Component {
    /**
     * The actual class constructor.
     *
     * @constructs
     * @param {object} [props] - The initial class properties
     * @returns {void}
     */
    constructor(props) {
        super(props);

        this.state = defaultState;

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
        // @TODO Use throttle for onChange, this.onChange = throttle(this.onChange.bind(this), 100);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onReset = this.onReset.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
    }

    componentDidMount() {
        const { storeState, routerState } = this.props;

        this.setState({
            name: getState('name', storeState),
            email: getState('email', storeState),
            subject: getState('subject', storeState),
            message: getState('message', storeState),
            namePristine: getState('namePristine', storeState),
            emailPristine: getState('emailPristine', storeState),
            subjectPristine: getState('subjectPristine', storeState),
            messagePristine: getState('messagePristine', storeState),
            pending: getState('pending', storeState),
            success:
                routerState === 'success' || getState('success', storeState),
            error: routerState === 'error' || getState('error', storeState),
            browser: isBrowser()
        });
    }

    /**
     * Handle input value change.
     *
     * @private
     * @param {object} e - The current sytheticEvent object
     * @returns {void}
     */
    onChange(e) {
        if (!has(e, 'target')) {
            return;
        }

        const { target } = e;
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
                [`${stateName}Pristine`]: true,
                pristine: true
            },
            this.handleContactChange
        );
    }

    /**
     * Handle form submit event.
     *
     * @private
     * @param {object} event - The current event object
     * @returns {void}
     */
    onSubmit(event) {
        eventPreventDefault(event);
        this.send();
    }

    /**
     * Handle form reset event.
     *
     * @private
     * @returns {void}
     */
    onReset() {
        this.setState(defaultState, this.handleContactChange);
    }

    /**
     * Helper function to render message.
     *
     * @TODO Should be done in article module component
     *
     * @private
     * @param {string} headline - The message headline
     * @param {string} text - The message text body
     * @param {string} btnTitle - The message button title
     * @param {string} btnLabel - The message button label
     * @returns {ReactElement}
     */
    getTextMessage(headline, text, btnTitle, btnLabel) {
        return (
            <ModuleFormContactMessage
                onReset={this.onReset}
                resetUrl={url.contact}
                {...{
                    headline,
                    text,
                    btnTitle,
                    btnLabel
                }}
            />
        );
    }

    handleContactChange() {
        // eslint-disable-next-line react/destructuring-assignment
        this.props.handleContactChange(this.state);
    }

    /**
     * Send state/form data as json to server.
     *
     * @private
     * @returns {void}
     */
    send() {
        const { csrfToken } = this.props;
        const { state } = this;

        if (!canSendForm(state)) {
            return;
        }

        const data = {
            name: String(state.name),
            email: String(state.email),
            subject: String(state.subject),
            message: String(state.message)
        };

        this.setState(
            {
                pending: true,
                success: false,
                error: false
            },
            () => {
                send(data, csrfToken)
                    .then((response) => {
                        if (!response || !response.ok) {
                            throw new Error(
                                `Can't send email! ${response.statusText}`
                            );
                        }
                        return new Promise((resolve) => {
                            this.setState(
                                {
                                    success: true,
                                    pending: false
                                },
                                resolve
                            );
                        });
                    })
                    .then(() => {
                        return scrollToTextMessage(this.textMessage);
                    })
                    .catch((reason) => {
                        this.setState(
                            {
                                error: true,
                                pending: false
                            },
                            () => {
                                logger.warn(reason);
                            }
                        );
                    });
            }
        );
    }

    /**
     * Render success message.
     *
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
     * @returns {ReactElement} React component markup
     */
    render() {
        const { content, csrfToken } = this.props;

        const { state } = this;

        if (state.success) {
            return this.renderSuccess();
        }

        if (state.error) {
            return this.renderError();
        }

        return (
            <Form
                action="/contact/"
                className="m-form--contact"
                id="m-form--contact"
                itemProp="potentialAction"
                onSubmit={this.onSubmit}
                onReset={this.onReset}
            >
                <Fieldset>
                    <Legend className="is-visually-hidden">
                        {content.legend}
                    </Legend>

                    <GridRow>
                        <GridCol cols={'6'}>
                            <InputGroup
                                id={'name'}
                                name={'name'}
                                onChange={this.onChange}
                                label={content.inputName}
                                value={state.name}
                                isValid={validate(state).name}
                                isPristine={state.namePristine}
                            />
                        </GridCol>
                        <GridCol cols={'6'}>
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
                        </GridCol>
                    </GridRow>
                    <GridRow>
                        <GridCol>
                            <InputGroup
                                id={'subject'}
                                name={'subject'}
                                onChange={this.onChange}
                                label={content.inputSubject}
                                value={state.subject}
                                isValid={validate(state).subject}
                                isPristine={state.subjectPristine}
                            />
                        </GridCol>
                    </GridRow>
                    <GridRow>
                        <GridCol>
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
                        </GridCol>
                    </GridRow>
                    <GridRow>
                        <GridCol cols={'6'}>
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
                        </GridCol>
                        <GridCol cols={'6'}>
                            <ButtonGroup
                                id={'submit'}
                                name={'submit'}
                                type={'submit'}
                                title={content.btnSubmitTitle}
                                label={content.btnSubmitLabel}
                                className={
                                    'm-form__group--submit hide-on-print'
                                }
                                btnClassName={'c-btn--submit'}
                                isPrimary
                                isDisabled={!canSendForm(state)}
                                isPending={state.pending}
                            />
                        </GridCol>
                    </GridRow>
                    <input type="hidden" name="_csrf" value={csrfToken} />
                </Fieldset>
            </Form>
        );
    }
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
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
 * @property {object} [storeState={}] - The redux contact state
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
        btnTryAgainLabel: PropTypes.string,
        thankYouHeadline: PropTypes.string,
        thankYouText: PropTypes.string
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
 * @type {object}
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
 * @private
 * @param {object.<*>} state - The redux store state
 * @returns {object}
 */
function mapStateToProps(state) {
    return {
        storeState: selectStateContactForm(state),
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
        handleContactChange: (contact) => {
            dispatch(changeContactForm(contact));
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
export { ModuleFormContact };
