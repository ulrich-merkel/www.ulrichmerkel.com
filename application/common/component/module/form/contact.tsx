/* eslint-disable immutable/no-mutation, immutable/no-this, promise/avoid-new, react/no-did-mount-set-state */
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
import { default as React, Component, createRef } from 'react';
import { connect } from 'react-redux';
import { has, noop } from 'lodash';

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
import { GridCol } from '../../grid/col';
import { GridRow } from '../../grid/row';
import { ButtonGroup } from '../../element/button-group';
import { Fieldset } from '../../element/fieldset';
import { Form } from '../../element/form';
import { InputGroup } from '../../element/input-group';
import { Legend } from '../../element/legend';
import { TextareaGroup } from '../../element/textarea-group';
import { ModuleFormContactMessage } from './contact/message';

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

type State = {
    name: string;
    email: string;
    subject: string;
    message: string;
    pristine: boolean;
    namePristine: boolean;
    emailPristine: boolean;
    websitePristine: boolean;
    subjectPristine: boolean;
    messagePristine: boolean;
    pending: boolean;
    success: boolean;
    error: boolean;
    browser: boolean;
};

type Props = {
    content?: {
        legend?: string;
        inputName?: string;
        inputEmail?: string;
        inputWebsite?: string;
        inputSubject?: string;
        inputMessage?: string;
        btnResetTitle?: string;
        btnResetLabel?: string;
        btnSubmitTitle?: string;
        btnSubmitLabel?: string;
        btnRenewTitle?: string;
        btnRenewLabel?: string;
        thankYou?: string;
        errorHeadline?: string;
        errorText?: string;
        btnTryAgainTitle?: string;
        btnTryAgainLabel?: string;
        thankYouHeadline?: string;
        thankYouText?: string;
    };
    storeState?: {
        name: string;
        email: string;
        subject: string;
        message: string;
        pristine: boolean;
        namePristine: boolean;
        emailPristine: boolean;
        websitePristine: boolean;
        subjectPristine: boolean;
        messagePristine: boolean;
        pending: boolean;
        success: boolean;
        error: boolean;
        browser: boolean;
    };
    onChangeContactForm?: (State) => void;
    routerState?: string;
    csrfToken?: string;
};

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
 * @param {string} [csrfToken=''] - The csrf token string to be validated
 * @returns {Future}
 */
function send(data, csrfToken: string = ''): Promise<Response> {
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

    return new Promise(function (resolve, reject) {
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
function getState(key: string, storeState) {
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
class ModuleFormContact extends Component<Props, State> {
    textMessage = createRef();

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
     * @returns {void}
     */
    handleContactChange() {
        const { onChangeContactForm = noop } = this.props;
        onChangeContactForm(this.state);
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
                ref={this.textMessage}
                {...{
                    headline,
                    text,
                    btnTitle,
                    btnLabel
                }}
            />
        );
    }

    /**
     * Send state/form data as json to server.
     *
     * @private
     * @returns {void}
     */
    send() {
        const { csrfToken = '' } = this.props;
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
                        return scrollToTextMessage(this.textMessage.current);
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
        const { content, csrfToken = '' } = this.props;

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
                        <GridCol cols={6}>
                            <InputGroup
                                id={'name'}
                                isPristine={state.namePristine}
                                isValid={validate(state).name}
                                label={content.inputName}
                                name={'name'}
                                onChange={this.onChange}
                                required
                                value={state.name}
                            />
                        </GridCol>
                        <GridCol cols={6}>
                            <InputGroup
                                id={'email'}
                                isPristine={state.emailPristine}
                                isValid={validate(state).email}
                                label={content.inputEmail}
                                name={'email'}
                                onChange={this.onChange}
                                required
                                type={'email'}
                                value={state.email}
                            />
                        </GridCol>
                    </GridRow>
                    <GridRow>
                        <GridCol>
                            <InputGroup
                                id={'subject'}
                                isPristine={state.subjectPristine}
                                isValid={validate(state).subject}
                                label={content.inputSubject}
                                name={'subject'}
                                onChange={this.onChange}
                                required
                                value={state.subject}
                            />
                        </GridCol>
                    </GridRow>
                    <GridRow>
                        <GridCol>
                            <TextareaGroup
                                id={'message'}
                                isPristine={state.messagePristine}
                                isValid={validate(state).message}
                                label={content.inputMessage}
                                name={'message'}
                                onChange={this.onChange}
                                required
                                value={state.message}
                            />
                        </GridCol>
                    </GridRow>
                    <GridRow>
                        <GridCol cols={6}>
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
                        <GridCol cols={6}>
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
 * @type {object<string, Function>}
 */
const mapDispatchToProps = {
    onChangeContactForm: changeContactForm
};

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 */
export const ModuleFormContactConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModuleFormContact);
