/* eslint-disable func-names */
import {
    STATE_DIALOG_VISIBLE_CHANGE,
    STATE_DIALOG_PAGE_BROADCAST,
    STATE_DIALOG_PAGE_SEARCH,
    STATE_DIALOG_PAGE_THEME
} from '../constants';
import {
    changeDialogVisible,
    changeDialogVisibleBroadcast,
    changeDialogVisibleSearch,
    changeDialogVisibleTheme
} from '../actions';

describe('common/state/dialog/actions', function () {
    describe('changeDialogVisible', function () {
        it(`should have a type of ${STATE_DIALOG_VISIBLE_CHANGE}`, function () {
            expect(changeDialogVisible().type).toEqual(STATE_DIALOG_VISIBLE_CHANGE);
        });
        it('should pass on the visible value we pass in', function () {
            const visible = true;
            expect(changeDialogVisible(visible).visible).toEqual(visible);
        });
    });
    describe('changeDialogVisibleBroadcast', function () {
        it(`should have a type of ${STATE_DIALOG_VISIBLE_CHANGE}`, function () {
            expect(changeDialogVisibleBroadcast().type).toEqual(STATE_DIALOG_VISIBLE_CHANGE);
        });
        it(`should have a page of ${STATE_DIALOG_PAGE_BROADCAST}`, function () {
            expect(changeDialogVisibleBroadcast().page).toEqual(STATE_DIALOG_PAGE_BROADCAST);
        });
        it('should pass on the visible value we pass in', function () {
            const visible = true;
            expect(changeDialogVisibleBroadcast(visible).visible).toEqual(visible);
        });
    });
    describe('changeDialogVisibleSearch', function () {
        it(`should have a type of ${STATE_DIALOG_VISIBLE_CHANGE}`, function () {
            expect(changeDialogVisibleSearch().type).toEqual(STATE_DIALOG_VISIBLE_CHANGE);
        });
        it(`should have a page of ${STATE_DIALOG_PAGE_SEARCH}`, function () {
            expect(changeDialogVisibleSearch().page).toEqual(STATE_DIALOG_PAGE_SEARCH);
        });
        it('should pass on the visible value we pass in', function () {
            const visible = true;
            expect(changeDialogVisibleSearch(visible).visible).toEqual(visible);
        });
    });
    describe('changeDialogVisibleTheme', function () {
        it(`should have a type of ${STATE_DIALOG_VISIBLE_CHANGE}`, function () {
            expect(changeDialogVisibleTheme().type).toEqual(STATE_DIALOG_VISIBLE_CHANGE);
        });
        it(`should have a page of ${STATE_DIALOG_PAGE_THEME}`, function () {
            expect(changeDialogVisibleTheme().page).toEqual(STATE_DIALOG_PAGE_THEME);
        });
        it('should pass on the visible value we pass in', function () {
            const visible = true;
            expect(changeDialogVisibleTheme(visible).visible).toEqual(visible);
        });
    });
});
