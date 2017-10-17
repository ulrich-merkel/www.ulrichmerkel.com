/* eslint-disable func-names */
import { selectStateDialogVisible, selectStateDialogPage } from '../selector';

describe('common/state/dialog/selector', function () {
    describe('selectStateDialogVisible', function () {
        it('should return the correct state', function () {
            const state = Object.assign({}, {
                dialog: {
                    visible: true
                }
            });
            expect(selectStateDialogVisible(state)).toEqual(state.dialog.visible);
        });
        it('should return false if state isn\'t found', function () {
            const state = Object.assign({}, {
                some: {
                    thing: 'lorem'
                }
            });
            expect(selectStateDialogVisible(state)).toEqual(false);
        });
    });
    describe('selectStateDialogPage', function () {
        it('should return the correct state', function () {
            const state = Object.assign({}, {
                dialog: {
                    page: 'foo'
                }
            });
            expect(selectStateDialogPage(state)).toEqual(state.dialog.page);
        });
        it('should return false if state isn\'t found', function () {
            const state = Object.assign({}, {
                some: {
                    thing: 'lorem'
                }
            });
            expect(selectStateDialogPage(state)).toEqual(false);
        });
    });
});
