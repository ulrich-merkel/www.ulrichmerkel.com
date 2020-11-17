/* eslint-disable immutable/no-mutation, immutable/no-this */
/**
 * Es6 module for React Component.
 * Component module React classes combine elements to
 * bigger parts of the page.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';

import { selectStateReducedMotionSelected } from '../../state/reduced-motion/selector';
import { scrollTo } from '../../utils/scroll-to';
import { ModuleKeyVisualPicture } from './key-visual/picture';
import { ModuleKeyVisualArticle } from './key-visual/article';
import { ModuleKeyVisualButton } from './key-visual/button';
import { eventPreventDefault } from '../../utils/event';

/**
 * Class representing a component.
 *
 * @class
 * @augments React.Component
 */
export class ModuleKeyVisual extends Component {
    /**
     * Handle button down click event.
     *
     * @param {object} event - Click event object
     * @returns {void}
     */
    onClickBtn = (event) => {
        const { onClickBtn, reducedMotionSelected } = this.props;
        const { keyVisual } = this;

        eventPreventDefault(event);

        if (keyVisual) {
            const innerHeight = keyVisual.clientHeight;
            const boundingClientRectTop = Math.abs(
                keyVisual.getBoundingClientRect().top
            );
            const offsetTop = document.body.scrollTop;

            scrollTo({
                duration: reducedMotionSelected ? 0 : 300,
                top: innerHeight + boundingClientRectTop + offsetTop
            });
            onClickBtn();
        }
    };

    /**
     * The required render function to return a single react child element.
     *
     * @returns {ReactElement} React component markup
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
                ref={(ref) => {
                    this.keyVisual = ref;
                }}
                {...otherProps}
            >
                <ModuleKeyVisualPicture
                    img={content.img}
                    type={content.type}
                    isCovered={isCovered}
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
 * @type {object}
 * @property {string} [componentType='div'] - The component element type used for React.createElement
 * @property {string} [className] - The component css class names - will be merged into component default classNames
 * @property {boolean} [isWork=false] - Whether the component has work modifiers or not
 * @property {boolean} [isCovered=false] - Whether the component should be background size covered or not
 * @property {object} [content={}] - The component translation config
 */
ModuleKeyVisual.propTypes = {
    className: PropTypes.string, // eslint-disable-line react/require-default-props
    componentType: PropTypes.string,
    content: PropTypes.shape({
        headline: PropTypes.string,
        lead: PropTypes.string,
        btnLabel: PropTypes.string,
        btnTitle: PropTypes.string,
        img: PropTypes.object,
        type: PropTypes.string
    }),
    isCovered: PropTypes.bool,
    isWork: PropTypes.bool,
    onClickBtn: PropTypes.func,
    reducedMotionSelected: PropTypes.bool
};

/**
 * Set defaults if props aren't available.
 *
 * @static
 * @type {object}
 * @see ModuleKeyVisual.propTypes
 */
ModuleKeyVisual.defaultProps = {
    componentType: 'div',
    content: {},
    isCovered: false,
    isWork: false,
    onClickBtn: Function.prototype,
    reducedMotionSelected: false
};

/**
 * The component will subscribe to Redux store updates. Any time it updates,
 * mapStateToProps will be called, Its result must be a plain object,
 * and it will be merged into the component’s props.
 *
 * @private
 * @param {object<string, *>} state - The current redux store state
 * @returns {object<string, *>} The mapped state properties
 */
function mapStateToProps(state) {
    return {
        reducedMotionSelected: selectStateReducedMotionSelected(state)
    };
}

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 */
export const ModuleKeyVisualConnected = connect(mapStateToProps)(
    ModuleKeyVisual
);
