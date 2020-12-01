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

import { Headline } from '../../element/headline';
import { ListItem } from '../../element/list-item';
import { P } from '../../element/paragraph';
import { Icon } from '../../element/icon';
import { View } from '../../element/view';

type Props = {
    headline?: string;
    text?: string;
    index?: number;
    icon?: string;
    isClear?: boolean;
};

/**
 * Function representing a component to return a single react child element.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
export const ModuleServiceItem: FunctionComponent<Props> = (props) => {
    const {
        headline = '',
        text = '',
        index = 0,
        icon = '',
        isClear = false
    } = props;

    if (isClear) {
        return <ListItem className="m-service__item--clear" ariaHidden />;
    }

    const componentListItemClassName = classnames({
        'm-service__item--right': index % 3 === 1,
        'm-service__item--left': index % 3 === 0
    });
    const componentListItemIconClassName = classnames('m-service__icon-font');

    return (
        <ListItem
            className={componentListItemClassName}
            itemProp="itemListElement"
        >
            <View className="m-service__content">
                <View className="m-service__icon">
                    <Icon
                        className={componentListItemIconClassName}
                        icon={icon}
                    />
                </View>
                <View className="m-service__description">
                    <Headline className="m-service__headline" htmlElement="h3">
                        {headline}
                    </Headline>
                    <P
                        className="m-service__text"
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                </View>
            </View>
        </ListItem>
    );
};
