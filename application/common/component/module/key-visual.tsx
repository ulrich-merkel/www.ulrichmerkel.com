/**
 * Es6 module for a key visual module.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { default as React, createRef, Component, ReactNode } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { noop } from 'lodash';

import { selectStateReducedMotionSelectedReduce } from '../../state/reduced-motion/selector';
import { scrollTo } from '../../utils/scroll-to';
import { Event, eventPreventDefault } from '../../utils/event';
import { View } from '../element/view';
import { ModuleKeyVisualPicture } from './key-visual/picture';
import { ModuleKeyVisualArticle } from './key-visual/article';
import { ModuleKeyVisualButton } from './key-visual/button';

type Props = {
    className?: string;
    content?: {
        headline: string;
        lead: string;
        btnLabel: string;
        btnTitle: string;
        img: Record<string, unknown>;
        type: string;
    };
    isCovered?: boolean;
    isWork?: boolean;
    onClickBtn?: () => void;
    reducedMotionSelected?: boolean;
};

/**
 * Class representing a component.
 *
 * @class
 * @augments React.Component
 */
export class ModuleKeyVisual extends Component<Props> {
    private keyVisual = createRef<HTMLDivElement>();

    /**
     * Handle button down click event.
     *
     * @param {object} event - Click event object
     * @returns {void}
     */
    onClickBtn = (event: Event): void => {
        const { onClickBtn = noop, reducedMotionSelected = false } = this.props;

        eventPreventDefault(event);

        if (this.keyVisual) {
            const innerHeight = this.keyVisual.current.clientHeight;
            const boundingClientRectTop = Math.abs(
                this.keyVisual.current.getBoundingClientRect().top
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
    render(): ReactNode {
        const {
            className,
            content,
            isCovered = false,
            isWork = false
        } = this.props;

        if (!content.img) {
            return null;
        }

        const componentClassName = classnames(
            isWork ? 'm-key-visual--work' : 'm-key-visual',
            className
        );

        return (
            <View className={componentClassName} ref={this.keyVisual}>
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
            </View>
        );
    }
}

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
        reducedMotionSelected: selectStateReducedMotionSelectedReduce(state)
    };
}

/**
 * Connects a React component to a Redux store. It does not modify the
 * component class passed to it. Instead, it returns a new, connected component class.
 *
 * @type {ReactElement}
 */
export const ModuleKeyVisualConnected = connect(mapStateToProps)(
    ModuleKeyVisual
);
