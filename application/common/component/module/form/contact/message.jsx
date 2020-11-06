/* eslint-disable immutable/no-mutation */
import * as React from 'react';
import PropTypes from 'prop-types';

import { P } from '../../../element/paragraph';
import { Button } from '../../../element/button';
import { Headline } from '../../../element/headline';

function ModuleFormContactMessage(props) {
    const { btnLabel, btnTitle, headline, text, onReset, resetUrl } = props;

    return (
        <div
            className="m-article__text"
            id="m-form--contact-success"
            itemProp="text"
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
}

ModuleFormContactMessage.propTypes = {
    btnLabel: PropTypes.string, // eslint-disable-line react/require-default-props
    btnTitle: PropTypes.string, // eslint-disable-line react/require-default-props
    headline: PropTypes.string, // eslint-disable-line react/require-default-props
    text: PropTypes.string, // eslint-disable-line react/require-default-props
    onReset: PropTypes.func, // eslint-disable-line react/require-default-props
    resetUrl: PropTypes.string // eslint-disable-line react/require-default-props
};

export default ModuleFormContactMessage;
