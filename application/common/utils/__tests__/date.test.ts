import MockDate from 'mockdate';
import { getDateNow } from '../date';

describe('getDateNow', function fnDescribe() {
    beforeEach(function fnBeforeEach() {
        MockDate.set('2000-11-22');
    });

    afterEach(function fnAfterEach() {
        MockDate.reset();
    });

    it('should return a date via date', function fnIt() {
        const windowSpy = jest.spyOn(global, 'performance', 'get');
        windowSpy.mockImplementation(() => {});

        expect(getDateNow()).toEqual(974851200000);
        windowSpy.mockRestore();
    });
});
