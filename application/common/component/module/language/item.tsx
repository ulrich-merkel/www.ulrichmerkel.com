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
import { default as React, FunctionComponent } from 'react';
import classnames from 'classnames';

import { GridCol } from '../../grid/col';
import { Headline } from '../../element/headline';
import { Meta } from '../../element/meta';
import { View } from '../../element/view';

type Props = {
    headline?: string;
    lead?: string;
    percent?: number;
};

/**
 * Helper function to get style classNames for css3 rotate transform.
 *
 * @private
 * @param {number} percent - The percent value to be calculated in degrees
 * @returns {object} The classNames config for left and right circle
 */
function getCssTransformRotate(
    percent: number
): { left: string; right: string } {
    let left = '',
        right = '',
        deg = 0;

    if (percent <= 50) {
        // eslint-disable-next-line no-mixed-operators
        deg = Math.round(180 - (percent / 100) * 360);
        left = 'is-hidden';
        right = `is-rotated-${deg}`;
    } else {
        // eslint-disable-next-line no-mixed-operators
        deg = Math.round(180 - ((percent - 50) / 100) * 360);
        left = `is-rotated-${deg}`;
    }

    return {
        left,
        right
    };
}

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleLanguageItem: FunctionComponent<Props> = (props) => {
    const { headline = '', lead = '', percent = 0 } = props;

    const rotatedCssTransform = getCssTransformRotate(percent);

    return (
        <GridCol
            cols={4}
            htmlElement="li"
            itemProp="itemListElement"
            itemType="https://schema.org/Language"
            role="listitem"
        >
            <View className="c-box">
                <Headline className="c-box__header" htmlElement="h3">
                    {headline}
                </Headline>
                <View className="c-box__content">
                    <View className="c-pie">
                        <View
                            className="c-pie__circle"
                            data-percent={percent}
                            data-text={lead}
                        >
                            <View className="c-pie__left">
                                <span
                                    className={classnames(
                                        'c-pie__mask',
                                        rotatedCssTransform.left
                                    )}
                                />
                            </View>
                            <View className="c-pie__right">
                                <span
                                    className={classnames(
                                        'c-pie__mask',
                                        rotatedCssTransform.right
                                    )}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <Meta itemProp="name" content={headline} />
            </View>
        </GridCol>
    );
};
