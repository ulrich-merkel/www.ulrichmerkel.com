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
 * @requires *
 *
 * @changelog
 * - 0.0.3 moved to stateless function
 * - 0.0.2 rewritten for es2015
 * - 0.0.1 basic functions and structure
 *
 */
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import scrollTo from './../../utils/scroll-to';
import ModuleKeyVisualPicture from './key-visual/picture';
import ModuleKeyVisualArticle from './key-visual/article';
import ModuleKeyVisualButton from './key-visual/button';

/**
 * Class representing a component.
 *
 * @class
 * @extends React.Component
 */
class ModuleKeyVisual extends Component {

    /**
     * The actual class constructor.
     *
     * This is usally unnecessary if we don't perform any actions here,
     * because a default constructor will call super(...props) for us.
     * We do this just because of completeness.
     *
     * @constructor
     * @function
     * @param {React.Props} [props] The initial class properties
     * @returns {void}
     */
    constructor(...props) {
        super(...props);

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
        this.onClickBtn = this.onClickBtn.bind(this);

    }

    /**
     * Handle button down click event.
     *
     * @function
     * @private
     * @returns {void}
     */
    onClickBtn() {

        const keyVisual = this.keyVisual;

        if (keyVisual) {

            const innerHeight = keyVisual.clientHeight;
            const boundingClientRectTop = keyVisual.getBoundingClientRect().top;
            const offsetTop = document.body.scrollTop;

            scrollTo({
                top: innerHeight + boundingClientRectTop + offsetTop
            });

        }

    }

    /**
     * The required render function to return a single react child element.
     *
     * @function
     * @returns {React.Element} React component markup
     */
    render() {

        const {
            componentType,
            className,
            isWork,
            isCovered,
            content,
            ...otherProps
        } = this.props;

        if (!content.img) {
            return null;
        }

        const ComponentType = componentType;
        const componentClassName = classnames(
            isWork ? 'm-key-visual--work' : 'm-key-visual',
            className
        );

        return (
            <ComponentType
                className={componentClassName}
                ref={(ref) => { this.keyVisual = ref; }}
                {...otherProps}
            >
                <ModuleKeyVisualPicture
                    img={content.img}
                    type={content.type}
                    {...isCovered}
                />
                <ModuleKeyVisualArticle
                    headline={content.headline}
                    lead={content.lead}
                />
                <ModuleKeyVisualButton
                    onClick={this.onClickBtn}
                    label={content.btnLabel}
                    title={content.btnTitle}
                />
            </ComponentType>
        );

    }

}


/**
* Validate props via React.PropTypes helpers.
*
* @static
* @type {Object}
* @property {string} [componentType='div'] The component element type used for React.createElement
* @property {string} [className] The component css class names - will be merged into component default classNames
* @property {boolean} [isWork=false] Whether the component has work modifiers or not
* @property {boolean} [isCovered=false] Whether the component should be background size covered or not
* @property {Object} [content={}] The component translation config
*/
ModuleKeyVisual.propTypes = {
    componentType: PropTypes.string,
    className: PropTypes.string,
    isWork: PropTypes.bool,
    isCovered: PropTypes.bool,
    content: PropTypes.shape({
        headline: PropTypes.string,
        lead: PropTypes.string,
        btnLabel: PropTypes.string,
        btnTitle: PropTypes.string,
        img: PropTypes.object,
        type: PropTypes.string
    })
};


/**
* Set defaults if props aren't available.
*
* @static
* @type {Object}
* @see ModuleKeyVisual.propTypes
*/
ModuleKeyVisual.defaultProps = {
    componentType: 'div',
    isWork: false,
    isCovered: false,
    content: {}
};

export default ModuleKeyVisual;
