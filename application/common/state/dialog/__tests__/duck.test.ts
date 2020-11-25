import {
    changeDialogVisible,
    changeDialogVisibleBroadcast,
    changeDialogVisibleSearch,
    changeDialogVisibleTheme,
    initialState,
    reducer,
    DIALOG_RESOURCE_NAME,
    DIALOG_VISIBLE_CHANGE,
    DIALOG_CONTENT_BROADCAST,
    DIALOG_CONTENT_SEARCH,
    DIALOG_CONTENT_THEME,
    reducerDialog
} from '../duck';

describe('changeDialogVisible', function fnDescribe() {
    it(`should have a type of ${DIALOG_VISIBLE_CHANGE}`, function fnIt() {
        expect(changeDialogVisible(true).type).toEqual(DIALOG_VISIBLE_CHANGE);
    });
    it('should pass on the visible value we pass in', function fnIt() {
        const visible = true;
        expect(changeDialogVisible(visible).visible).toEqual(visible);
    });
});

describe('changeDialogVisibleBroadcast', function fnDescribe() {
    it(`should have a type of ${DIALOG_VISIBLE_CHANGE}`, function fnIt() {
        expect(changeDialogVisibleBroadcast(true).type).toEqual(
            DIALOG_VISIBLE_CHANGE
        );
    });
    it(`should have a page of ${DIALOG_CONTENT_BROADCAST}`, function fnIt() {
        expect(changeDialogVisibleBroadcast(true).content).toEqual(
            DIALOG_CONTENT_BROADCAST
        );
    });
    it('should pass on the visible value we pass in', function fnIt() {
        const visible = true;
        expect(changeDialogVisibleBroadcast(visible).visible).toEqual(visible);
    });
});

describe('changeDialogVisibleSearch', function fnDescribe() {
    it(`should have a type of ${DIALOG_VISIBLE_CHANGE}`, function fnIt() {
        expect(changeDialogVisibleSearch(true).type).toEqual(
            DIALOG_VISIBLE_CHANGE
        );
    });
    it(`should have a page of ${DIALOG_CONTENT_SEARCH}`, function fnIt() {
        expect(changeDialogVisibleSearch(true).content).toEqual(
            DIALOG_CONTENT_SEARCH
        );
    });
    it('should pass on the visible value we pass in', function fnIt() {
        const visible = true;
        expect(changeDialogVisibleSearch(visible).visible).toEqual(visible);
    });
});

describe('changeDialogVisibleTheme', function fnDescribe() {
    it(`should have a type of ${DIALOG_VISIBLE_CHANGE}`, function fnIt() {
        expect(changeDialogVisibleTheme(true).type).toEqual(
            DIALOG_VISIBLE_CHANGE
        );
    });
    it(`should have a page of ${DIALOG_CONTENT_THEME}`, function fnIt() {
        expect(changeDialogVisibleTheme(true).content).toEqual(
            DIALOG_CONTENT_THEME
        );
    });
    it('should pass on the visible value we pass in', function fnIt() {
        const visible = true;
        expect(changeDialogVisibleTheme(visible).visible).toEqual(visible);
    });
});

describe('reducer', function fnDescribe() {
    it('should return the initial state', function fnIt() {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it(`should react to an action with the type ${DIALOG_VISIBLE_CHANGE}`, function fnIt() {
        expect(
            reducer(undefined, {
                type: DIALOG_VISIBLE_CHANGE
            })
        ).toMatchSnapshot();
        expect(
            reducer(undefined, {
                type: DIALOG_VISIBLE_CHANGE,
                content: DIALOG_CONTENT_THEME,
                visible: true
            })
        ).toMatchSnapshot();
    });
});

describe('reducerDialog', function fnDescribe() {
    it(`should have a key of ${DIALOG_RESOURCE_NAME}`, function fnIt() {
        expect(reducerDialog).toEqual(
            expect.objectContaining({
                [DIALOG_RESOURCE_NAME]: reducer
            })
        );
    });
});
