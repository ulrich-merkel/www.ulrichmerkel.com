/* eslint-disable import/no-extraneous-dependencies, func-names, immutable/no-let */
import * as React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from '../../../__mocks__/store';
import ModuleFormThemeContainer from '../theme';

describe('common/component/module/form/theme', function () {
    const defaultProps = {
        content: {},
        csrfToken: '',
        themeSelected: 'grey',
        onchangeThemeSelectedDefault: () => {},
        onchangeThemeSelectedGrey: () => {}
    };

    it('should render correctly', function () {
        const component = renderer.create(
            <Provider store={mockedStore}>
                <ModuleFormThemeContainer {...defaultProps}>
                    Module form search children
                </ModuleFormThemeContainer>
            </Provider>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        tree.props.onSubmit();
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
