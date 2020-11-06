/* eslint-disable func-names */
import {
    selectStateDialog,
    selectStateDialogContent,
    selectStateDialogVisible
} from '../selector';
import { initialState, DIALOG_RESOURCE_NAME } from '../duck';

describe('selectStateDialog', function () {
    it('should return the correct state', function () {
        const state = {
            [DIALOG_RESOURCE_NAME]: {
                payload: {
                    visible: true,
                    content: 'search'
                }
            }
        };
        expect(selectStateDialog(state)).toEqual(state[DIALOG_RESOURCE_NAME]);
    });
    it('should return the initial state if resource key is not found', function () {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateDialog(state)).toEqual(initialState);
    });
    it('should return the initial state if no state is found', function () {
        expect(selectStateDialog()).toEqual(initialState);
    });
});

describe('selectStateDialogVisible', function () {
    it('should return the correct state', function () {
        const state = {
            [DIALOG_RESOURCE_NAME]: {
                payload: {
                    visible: true,
                    content: 'search'
                }
            }
        };
        expect(selectStateDialogVisible(state)).toEqual(
            state[DIALOG_RESOURCE_NAME].payload.visible
        );
    });
    it("should return the default if state isn't found", function () {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateDialogVisible(state)).toEqual(
            initialState.payload.visible
        );
    });
});

describe('selectStateDialogContent', function () {
    it('should return the correct state', function () {
        const state = {
            [DIALOG_RESOURCE_NAME]: {
                payload: {
                    visible: true,
                    content: 'search'
                }
            }
        };
        expect(selectStateDialogContent(state)).toEqual(
            state[DIALOG_RESOURCE_NAME].payload.content
        );
    });
    it("should return the default if state isn't found", function () {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateDialogContent(state)).toEqual(
            initialState.payload.content
        );
    });
});
