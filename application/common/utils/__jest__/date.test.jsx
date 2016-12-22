/* eslint-disable func-names */
import { getDateNow } from './../date';

describe('date', function () {
    it('should return a date via performance', function () {
        global.performance = {
            now: jest.genMockFunction().mockReturnValue(1234567890)
        };
        expect(getDateNow()).toEqual(getDateNow());
    });
    it('should return a date via Date', function () {
        Date.now = jest.genMockFunction().mockReturnValue(1234567890);
        expect(getDateNow()).toEqual(getDateNow());
    });
});
