import { mockState } from '../../../../__tests__/utils/get-mocked-store';
import {
    selectStateIntl,
    selectStateIntlLocale,
    selectStateIntlAvailableLocales
} from '../selector';

describe('selectStateIntl', function fnDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStateIntl(mockState)).toMatchSnapshot();
    });
    it('should return the initial state if resource key is not found', function fnIt() {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateIntl(state)).toMatchSnapshot();
    });
    it('should return the initial state if no state is found', function fnIt() {
        expect(selectStateIntl()).toMatchSnapshot();
    });
});

describe('selectStateIntlLocale', function fnDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStateIntlLocale(mockState)).toMatchSnapshot();
    });
    it("should return the default locale if state isn't found", function fnIt() {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateIntlLocale(state)).toMatchSnapshot();
    });
});

describe('selectStateIntlAvailableLocales', function fnDescribe() {
    it('should return the correct state', function fnIt() {
        expect(selectStateIntlAvailableLocales(mockState)).toMatchSnapshot();
    });
    it("should return the default availableLocales if state isn't found", function fnIt() {
        const state = {
            foo: {
                bar: 'lorem'
            }
        };
        expect(selectStateIntlAvailableLocales(state)).toMatchSnapshot();
    });
});
