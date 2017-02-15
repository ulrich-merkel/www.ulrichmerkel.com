/* eslint-disable import/no-extraneous-dependencies, func-names */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import mockedStore from './../../../__mocks__/store';
import ModuleFormSearchContainer from './../search';

describe('common/component/module/form/search', function () {
    const defaultProps = {
        content: {},
        csrfToken: '',
        searchTerm: '',
        handleSearchChangeTerm: () => {}
    };

    it('should render correctly', function () {
        const component = renderer.create(
            <Provider store={mockedStore}>
                <ModuleFormSearchContainer
                    {...defaultProps}
                >
                    Module form search children
                </ModuleFormSearchContainer>
            </Provider>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        tree.props.onSubmit();
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
