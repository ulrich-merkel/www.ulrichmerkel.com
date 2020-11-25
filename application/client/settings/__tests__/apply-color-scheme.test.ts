import { applyColorScheme } from '../apply-color-scheme';

describe('applyColorScheme', function fnDescribe() {
    it('should handle color scheme correctly', function fnIt() {
        expect(applyColorScheme('foo')).toMatchSnapshot();
        expect(applyColorScheme('dark')).toMatchSnapshot();
        expect(applyColorScheme('light')).toMatchSnapshot();
    });
});
