/**
* Es6 module for React Component.
* Component module React classes combine elements to
* bigger parts of the page.
*
* @file
* @module
*
* @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
* @version 0.0.3
*
* @requires React
* @requires classnames
* @requires component/element/h3
* @requires component/element/paragraph
*
* @changelog
* - 0.0.4 excluded headline/lead into separate component
* - 0.0.3 moved to stateless function
* - 0.0.2 rewritten for es2015
* - 0.0.1 basic functions and structure
*/
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import { changeDialogVisible } from './../../state/dialog/actions';
import Headline from './../element/headline';
import P from './../element/paragraph';
import A from './../element/a';
import ModulePerson from './person';

/**
* Helper function to get text block headline
*
* @function
* @private
* @param {string} [headline] The text headline
* @returns {React.Element|null} React component markup or null if empty
*/
function renderHeadline(headline) {

    if (!headline) {
        return null;
    }

    return (
        <Headline className='m-text__headline' htmlElement='h3'>
            {headline}
        </Headline>
    );

}

/**
* Helper function to get text block content
*
* @function
* @private
* @param {Array.<string>} [content] The text content strings
* @returns {React.Element|null} React component markup or null if empty
*/
function renderContent(content, isCentered, hasColumns2) {

    if (!content || !content.length) {
        return null;
    }

    const componentTextContentClassName = classnames(
        {
            'has-columns--2': hasColumns2,
            'is-centered': isCentered
        },
        'm-text__content'
    );

    return (
        <div className={componentTextContentClassName}>
            <P dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );

}

/**
* Helper function to get text block content
*
* @function
* @private
* @param {Array.<string>} [content] The text content strings
* @returns {React.Element|null} React component markup or null if empty
*/
function renderPerson(content, isCentered, hasColumns2) {

    if (!content) {
        return null;
    }

    const composedClassName = classnames(
        {
            'has-columns--2': hasColumns2,
            'is-centered': isCentered
        },
        'm-text__content'
    );

    return (
        <ModulePerson className={composedClassName} content={content} />
    );

}

/**
* Helper function to get
*
* @function
* @private
* @param {} [content]
* @returns {React.Element|null} React component markup or null if empty
*/
function renderTime(content) {

    const {
        timeStart,
        timeEnd
    } = content;

    if (!timeStart && !timeEnd) {
        return null;
    }

    const componentTextContentClassName = classnames(
        'm-text__time',
        'is-centered'
    );

    return (
        <div className={componentTextContentClassName}>
            {timeStart && <time className='c-time'>
                {timeStart}
            </time>}
            {timeStart && timeEnd && <span className='c-time--separator'>-</span>}
            {timeEnd && <time className='c-time'>
                {timeEnd}
            </time>}
        </div>
    );
}

/**
 * Helper function to get
 *
 * @function
 * @private
 * @param {} [content]
 * @returns {React.Element|null} React component markup or null if empty
 */
function renderLink(content) {

    const {
        linkTo,
        linkLabel,
        linkTitle
    } = content;

    if (!linkTo || !linkLabel) {
        return null;
    }

    const componentTextContentClassName = classnames(
        'm-text__link',
        'is-centered'
    );

    return (
        <div className={componentTextContentClassName}>
            <A to={linkTo} title={linkTitle}>
                <i aria-hidden='true' className='c-font-icon--earth' />
                {linkLabel}
            </A>
        </div>
    );
}

/**
 * Function representing a component to return a single react child element.
 *
 * This React component is defined as a plain JavaScript function.
 * In an ideal world, most of the components would be stateless functions,
 * because in the future we’ll also be able to make performance optimizations
 * specific to these components by avoiding unnecessary checks and memory allocations.
 * This is the recommended pattern, when possible.
 *
 * @constructor
 * @param {Object} [props] The current component props
 * @returns {React.Element} React component markup
 */
class ModuleText extends Component {

    constructor(props) {
        super(props);

        this.openDialog = this.openDialog.bind(this);
    }

    componentDidMount() {
        this.bindDialogOpen();
    }

    componentDidUpdate() {
        this.unbindDialogOpen();
        this.bindDialogOpen();
    }

    componentWillUnmount() {
        this.unbindDialogOpen();
    }

    bindDialogOpen() {
        const showDialogNodes = document.getElementsByClassName('js-show-broadcast');
        if (showDialogNodes) {
            Array.prototype.forEach.call(showDialogNodes, (showDialogNode) => {
                showDialogNode.addEventListener('click', this.openDialog);
            });
        }
    }

    unbindDialogOpen() {
        const showDialogNodes = document.getElementsByClassName('js-show-broadcast');
        if (showDialogNodes) {
            Array.prototype.forEach.call(showDialogNodes, (showDialogNode) => {
                showDialogNode.removeEventListener('click', this.openDialog);
            });
        }
    }

    openDialog(e) {
        e.preventDefault();
        this.props.handleChangeDialogVisible(true);
    }

    render() {
        const {
            componentType,
            className,
            itemType,
            isCentered,
            hasColumns2,
            content,
            children
        } = this.props;

        if (!content.text || !content.text.length) {
            return null;
        }

        const ComponentType = componentType;
        const componentClassName = classnames(
            'm-text',
            className
        );
        const componentTextBlockClassName = classnames(
            'm-text__block'
        );
        let componentSchema = {};

        if (itemType) {
            componentSchema = {
                itemScope: true,
                itemType
            };
        }

        return (
            <ComponentType
                className={componentClassName}
                role='list'
                {...componentSchema}
            >
                {content.text.map((value, index) => {
                    return (
                        <div key={index} className={componentTextBlockClassName}>
                            {renderHeadline(value.headline)}
                            {renderContent(value.content, isCentered, hasColumns2)}
                            {value.person && renderPerson(value.person, isCentered, hasColumns2)}
                            {renderContent(value.small, isCentered, hasColumns2)}
                        </div>
                    );
                })}
                {renderTime(content)}
                {renderLink(content)}
                {children}

            </ComponentType>
        );
    }
}

/**
* Validate props via React.PropTypes helpers.
*
* @static
* @type {React.Component.PropTypes}
* @property {string} [componentType] The component element type used for React.createElement
* @property {string} [className] The component css class names - will be merged into component default classNames
* @property {boolean} [isCentered] Whether the component text should be centered via css or not
* @property {boolean} [hasColumns2] Whether the component text should be clusted in columns via css or not
* @property {string} [itemType] The schema.org itemtype url attribute
* @property {Array|string} [children] The component dom node childs - usally an array of components, if there is only a single child it's a string
* @property {Object} [i18n] The component translation config
* @property {string} [i18n.headline] Translation input
* @property {string} [i18n.lead] Translation input
* @property {Array.<Object>} [i18n.text] Translation input
* @property {string} [i18n.datePublished] Translation input
* @property {string} [i18n.author] Translation input
*/
ModuleText.propTypes = {
    componentType: PropTypes.string,
    className: PropTypes.string,
    isCentered: PropTypes.bool,
    hasColumns2: PropTypes.bool,
    itemType: PropTypes.string,
    children: PropTypes.node,
    /* eslint-disable react/no-unused-prop-types */
    content: PropTypes.shape({
        text: PropTypes.arrayOf(
            PropTypes.shape({
                headline: PropTypes.string,
                content: PropTypes.oneOfType([
                    PropTypes.array,
                    PropTypes.string
                ])
            })
        ),
        datePublished: PropTypes.string,
        author: PropTypes.string,
        timeStart: PropTypes.string,
        linkTo: PropTypes.string,
        linkLabel: PropTypes.string,
        linkTitle: PropTypes.string,
        btnTo: PropTypes.string,
        btnTitle: PropTypes.string,
        btnLabel: PropTypes.string
    }),
    /* eslint-enable react/no-unused-prop-types */
    handleChangeDialogVisible: PropTypes.func.isRequired
};

/**
* Set defaults if props aren't available.
*
* @static
* @type {React.Component.DefaultProps}
* @property {string} componentType='article' The component element type used for React.createElement
* @property {boolean} isCentered=false Whether the component text should be centered via css or not
* @property {boolean} hasColumns2=true Whether the component text should be clusted in columns via css or not
* @property {Object} i18n The component translation config
*/
ModuleText.defaultProps = {
    componentType: 'div',
    isCentered: false,
    hasColumns2: true,
    content: {}
};

/**
* Connects a React component to a Redux store. It does not modify the
* component class passed to it. Instead, it returns a new, connected component class.
*/
const ModuleTextContainer = connect(
    null,
    {
        handleChangeDialogVisible: changeDialogVisible
    }
)(ModuleText);

export default ModuleTextContainer;
