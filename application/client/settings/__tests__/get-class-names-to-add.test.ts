import { getClassNamesToAdd } from '../get-class-names-to-add';

describe('getClassNamesToAdd', function fnDescribe() {
    it('should add class names correctly', function fnIt() {
        expect(getClassNamesToAdd()).toMatchSnapshot();
        expect(getClassNamesToAdd(['dark'])).toMatchSnapshot();
        expect(
            getClassNamesToAdd(['dark', 'light'], 'color-scheme')
        ).toMatchSnapshot();
    });
});
