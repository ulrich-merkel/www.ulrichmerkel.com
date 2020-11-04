/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.4
 *
 * @requires react
 * @requires prop-types
 * @requires classnames
 * @requires react-redux
 * @requires shortid
 * @requires common/state/dialog/actions
 * @requires common/utils/environment
 * @requires common/utils/event
 * @requires component/module/text/headline
 * @requires component/module/text/content
 * @requires component/module/text/person
 * @requires component/module/text/time
 * @requires component/module/text/link
 *
 * @changelog
 * - 0.0.4 Excluded headline/content/person... into separate component
 * - 0.0.3 Moved to stateless function
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import { default as React, Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import shortid from 'shortid';

import { changeDialogVisibleBroadcast } from '../../state/dialog/actions';
import { isBrowser } from '../../utils/environment';
import { eventPreventDefault } from '../../utils/event';
import ModuleTextHeadline from './text/headline';
import ModuleTextContent from './text/content';
import ModuleTextPerson from './text/person';
import ModuleTextTime from './text/time';
import ModuleTextLink from './text/link';

/**
 * Class representing a component.
 *
 * @class
 * @augments React.Component
 * @property {Function} [props.handleChangeDialogVisible=Function.prototype] - The redux action for handling the dialog
 * @property {string} [props.componentType='div'] - The component element type used for React.createElement
 * @property {string} [props.className] - The component css class names - will be merged into component default classNames
 * @property {boolean} [props.isCentered=false] - Whether the component text should be centered via css or not
 * @property {boolean} [props.hasColumns2=true] - Whether the component text should be clusted in columns via css or not
 * @property {string} [props.itemType=''] - The schema.org itemtype url attribute
 * @property {Array|string} [props.children] - The component dom node childs - usally an array of components, if there is only a single child it's a string
 * @property {object} [props.content={}] - The component translation config
 */
class ModuleText extends Component {

    /**
     * The actual class constructor.
     *
     * @constructs
     * @param {object} [props] - The initial class properties
     * @returns {void}
     */
    constructor(props) {
        super(props);

        this.openDialog = this.openDialog.bind(this);
    }

    /**
     * Invoked once, only on the client (not on the server),
     * immediately after the initial rendering occurs.
     *
     * @returns {void}
     */
    componentDidMount() {
        this.bindDialogOpen();
    }

    /**
     * Invoked immediately after the component's updates are flushed to
     * the DOM. This method is not called for the initial render.
     *
     * @returns {void}
     */
    componentDidUpdate() {
        this.unbindDialogOpen();
        this.bindDialogOpen();
    }

    /**
     * Invoked immediately before a component is unmounted from the DOM.
     *
     * @returns {void}
     */
    componentWillUnmount() {
        this.unbindDialogOpen();
    }

    /**
     * Bind click event handlers to links in text content.
     *
     * @private
     * @returns {void}
     */
    bindDialogOpen() {
        if (!isBrowser()) {
            return;
        }

        const showDialogNodes = document.getElementsByClassName('js-show-broadcast');
        if (showDialogNodes) {
            Array.prototype.forEach.call(showDialogNodes, (showDialogNode) => {
                showDialogNode.addEventListener('click', this.openDialog);
            });
        }
    }

    /**
     * Remove event listeners from text links.
     *
     * @private
     * @returns {void}
     */
    unbindDialogOpen() {
        if (!isBrowser()) {
            return;
        }

        const showDialogNodes = document.getElementsByClassName('js-show-broadcast');
        if (showDialogNodes) {
            Array.prototype.forEach.call(showDialogNodes, (showDialogNode) => {
                showDialogNode.removeEventListener('click', this.openDialog);
            });
        }
    }

    /**
     * Open broadcast dialog.
     *
     * @private
     * @param {object} event - Synthetic react event
     * @returns {void}
     */
    openDialog(event) {
        eventPreventDefault(event);
        // eslint-disable-next-line react/destructuring-assignment
        this.props.handleChangeDialogVisible(true);
    }

    /**
     * The required render function to return a single react child element.
     *
     * @returns {ReactElement} React component markup
     */
    render() {
        const {
            children,
            className,
            componentType,
            content,
            hasColumns2,
            isCentered,
            itemType
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
        const componentSchema = itemType ? { itemScope: true, itemType } : null;

        return (
            <ComponentType
                className={componentClassName}
                {...componentSchema}
            >
                {content.text.map((value) => {
                    return (
                        <div key={shortid.generate()} className={componentTextBlockClassName}>
                            <ModuleTextHeadline
                                text={value.headline}
                            />
                            <ModuleTextContent
                                content={value.content}
                                isCentered={isCentered}
                                hasColumns2={hasColumns2}
                            />
                            <ModuleTextPerson
                                content={value.person}
                                isCentered={isCentered}
                                hasColumns2={hasColumns2}
                            />
                            <ModuleTextContent
                                content={value.small}
                                isCentered={isCentered}
                                hasColumns2={hasColumns2}
                            />
                        </div>
                    );
                })}
                <ModuleTextTime content={content} />
                <ModuleTextLink content={content} />
                {children}
            </ComponentType>
        );
    }
}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {object}
 */
ModuleText.propTypes = {
    children: PropTypes.node, // eslint-disable-line react/require-default-props
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    componentType: PropTypes.string,
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
    handleChangeDialogVisible: PropTypes.func,
    hasColumns2: PropTypes.bool,
    isCentered: PropTypes.bool,
    itemType: PropTypes.string
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 */
ModuleText.defaultProps = {
    componentType: 'div',
    content: {},
    handleChangeDialogVisible: Function.prototype,
    hasColumns2: true,
    isCentered: false,
    itemType: ''
};

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 */
const ModuleTextContainer = connect(
    null,
    {
        handleChangeDialogVisible: changeDialogVisibleBroadcast
    }
)(ModuleText);

export default ModuleTextContainer;
export {
    ModuleText
};
