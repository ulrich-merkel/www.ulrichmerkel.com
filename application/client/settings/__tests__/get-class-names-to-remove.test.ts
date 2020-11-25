import { getClassNamesToRemove } from '../get-class-names-to-remove';

describe('getClassNamesToRemove', function fnDescribe() {
    it('should add class names correctly', function fnIt() {
        expect(getClassNamesToRemove()).toMatchSnapshot();
        expect(getClassNamesToRemove(['dark'])).toMatchSnapshot();
        expect(
            getClassNamesToRemove(
                ['dark', 'light', 'default'],
                'light',
                'color-scheme'
            )
        ).toMatchSnapshot();
    });
});
