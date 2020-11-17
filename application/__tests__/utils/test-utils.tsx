import { default as React, Component } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import snapshotDiff from 'snapshot-diff';

import { getMockedStore } from './get-mocked-store';
import { RootState } from '../../common/state/configure-store';

/**
 * A custom wrapper where all additional providers can be defined (Redux, Theme, ....).
 *
 * @see {@link https://testing-library.com/docs/react-testing-library/setup#custom-render}
 *
 * @private
 * @param {object} [state] - The state to be used, falls back to mockState
 * @param {object} [props] - The react provider options
 * @returns {ReactElement} The component to be rendered
 */
function AllTestProviders(state: RootState, props: Object): Component {
    // eslint-disable-next-line react/prop-types
    const { children } = props;
    const store = getMockedStore(state);

    return (
        <Provider {...{ store }}>
            <MemoryRouter>{children}</MemoryRouter>
        </Provider>
    );
}

/**
 * Overrider the "default" render function with custom adjustments.
 *
 * @see {@link https://testing-library.com/docs/react-testing-library/setup#custom-render}
 * @see {@link https://callstack.github.io/react-native-testing-library/docs/api.html}
 *
 * @param {ReactElement} reactElement - React element to be rendered
 * @param {object} [options={}] - Testing library options
 * @returns {object} The test render result
 */
function customRender(reactElement: Component, options: Object = {}): Object {
    const { state, ...otherOptions } = options;

    return render(reactElement, {
        wrapper: AllTestProviders.bind(null, state),
        ...otherOptions
    });
}

// Re-export the render method and everything else, if something is missing please
// add it here...
export { fireEvent, screen } from '@testing-library/react';
export { customRender as render, snapshotDiff };
