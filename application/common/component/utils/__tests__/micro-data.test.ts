import { getItemTypeAttributes } from '../micro-data';

describe('getItemTypeAttributes', function fnDescribe() {
    it('should return the correct attributes', function fnIt() {
        expect(getItemTypeAttributes()).toMatchSnapshot();
        expect(
            getItemTypeAttributes('https://schema.org/Book')
        ).toMatchSnapshot();
    });
});
