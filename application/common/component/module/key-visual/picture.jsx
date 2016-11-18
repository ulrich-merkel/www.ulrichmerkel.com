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
 * @requires component/element/image
 * @requires component/element/h3
 * @requires component/element/paragraph
 *
 * @changelog
 * - 0.0.3 moved to stateless function
 * - 0.0.2 rewritten for es2015
 * - 0.0.1 basic functions and structure
 *
 */
import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import { throttle } from 'lodash';

import Picture from './../../element/picture';

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
 * @private
 * @param {Object} [props] The current component props
 * @returns {React.Element} React component markup
 */
class ModuleKeyVisualPicture extends Component {

    /**
     * The actual class constructor.
     *
     * This is usally unnecessary if we don't perform any actions here,
     * because a default constructor will call super(...props) for us.
     * We do this just because of completeness.
     *
     * @constructs
     * @param {React.Props} [props] The initial class properties
     * @returns {void}
     */
    constructor(props) {
        super(props);

        /**
        * Bind manually because React class components don't auto-bind.
        *
        * A bind call or arrow function in a JSX prop will create a brand new
        * function on every single render. This is bad for performance, as it
        * will result in the garbage collector being invoked way more than is necessary.
        *
        * Unfortunately React ES6 classes do not autobind their methods like components created
        * with the older React.createClass syntax. There are several approaches to binding methods
        * for ES6 classes. A basic approach is to just manually bind the methods in the constructor.
        *
        * We also throttle the scroll function here to avoid unnecessary function calls while scrolling.
        *
        * @see {@link http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding}
        * @see {@link http://stackoverflow.com/questions/23123138/perform-debounce-in-react-js/24679479#24679479}
        * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md}
        */
        this.onResize = throttle(this.onResize.bind(this), 100);

        this.state = {
            pictureStyle: {}
        };

    }

    /**
     * Invoked once, only on the client (not on the server),
     * immediately after the initial rendering occurs.
     *
     * @function
     * @returns {void}
     */
    componentDidMount() {
        window.addEventListener('resize', this.onResize);
        window.dispatchEvent(new CustomEvent('resize'));
    }

    /**
     * Invoked immediately before a component is unmounted from the DOM.
     *
     * @function
     * @returns {void}
     */
    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    /**
     * Set background image if it should be covered
     *
     * @function
     * @returns {void}
     */
    onResize() {
        const { isCovered } = this.props;

        if (isCovered) {

            const pictureDomNode = findDOMNode(this.picture);
            const imgDomNode = pictureDomNode.querySelector('img');
            const currentSrc = imgDomNode.currentSrc || imgDomNode.src;

            this.setState({
                pictureStyle: {
                    backgroundPosition: '20% 25%',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${currentSrc})`
                }
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
            img,
            type
        } = this.props;

        if (!img.name || !img.ext || !img.path) {
            return null;
        }

        const componentPictureClassName = classnames(
            'm-key-visual__image',
            type ? `m-key-visual__image--${type}` : ''
        );
        const componentPictureStyle = this.state.pictureStyle;

        return (
            <Picture
                name={img.name}
                ext={img.ext}
                path={img.path}
                alt={img.alt}
                sizes={img.sizes}
                ref={
                    (ref) => { this.picture = ref; }
                }
                className={componentPictureClassName}
                style={componentPictureStyle}
            />

        );
    }

}

/**
 * Validate props via React.PropTypes helpers.
 *
 * @static
 * @type {React.Component.PropTypes}
 * @property {string} [imageAlt] The image alt description
 * @property {string} [imageSrc] The image src url
 * @property {string} [type] The picture type
 * @property {boolean} [isCovered] Whether the image should be background size covered or not
 */
ModuleKeyVisualPicture.propTypes = {
    img: PropTypes.object,
    type: PropTypes.string,
    isCovered: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {React.Component.DefaultProps}
 * @property {string} type='digital' The picture type
 */
ModuleKeyVisualPicture.defaultProps = {
    img: {},
    type: 'digital'
};

export default ModuleKeyVisualPicture;