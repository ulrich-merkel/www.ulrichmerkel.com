import {
    default as React,
    ElementRef,
    forwardRef,
    FunctionComponent
} from 'react';

import { P } from '../../../element/paragraph';
import { Button } from '../../../element/button';
import { Headline } from '../../../element/headline';
import { View } from '../../../element/view';

type Props = {
    btnLabel: string;
    btnTitle: string;
    headline: string;
    text: string;
    onReset: () => void;
    resetUrl: string;
};

/**
 * Rendering a message block for the contact form.
 *
 * @function
 * @param {object} [props] - The current component props
 * @returns {ReactElement} React component markup
 */
// eslint-disable-next-line react/display-name
export const ModuleFormContactMessage: FunctionComponent<Props> = forwardRef<
    HTMLDivElement,
    Props
>((props: Props, ref: ElementRef<any>) => {
    const { btnLabel, btnTitle, headline, text, onReset, resetUrl } = props;

    return (
        <View
            className="m-article__text"
            id="m-form--contact-success"
            itemProp="text"
            ref={ref}
        >
            <Headline htmlElement="h3">{headline}</Headline>
            <View
                className="m-article__description is-centered"
                itemProp="description"
            >
                <P>{text}</P>
                <P>
                    <Button
                        isLarge
                        className="is-centered"
                        onClick={onReset}
                        title={btnTitle}
                        to={resetUrl}
                    >
                        {btnLabel}
                    </Button>
                </P>
            </View>
        </View>
    );
});
