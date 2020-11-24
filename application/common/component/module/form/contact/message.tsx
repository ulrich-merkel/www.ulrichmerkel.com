import { default as React, forwardRef, FunctionComponent } from 'react';

import { P } from '../../../element/paragraph';
import { Button } from '../../../element/button';
import { Headline } from '../../../element/headline';

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
export const ModuleFormContactMessage: FunctionComponent<Props> = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { btnLabel, btnTitle, headline, text, onReset, resetUrl } = props;

    return (
        <div
            className="m-article__text"
            id="m-form--contact-success"
            itemProp="text"
            ref={ref}
        >
            <Headline htmlElement="h3">{headline}</Headline>
            <div
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
            </div>
        </div>
    );
});
