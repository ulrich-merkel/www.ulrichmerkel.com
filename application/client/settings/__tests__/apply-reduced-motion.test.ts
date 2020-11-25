import { applyReducedMotion } from '../apply-reduced-motion';

describe('applyReducedMotion', function fnDescribe() {
    it('should handle reduced motion correctly', function fnIt() {
        expect(applyReducedMotion('foo')).toMatchSnapshot();
        expect(applyReducedMotion('reduce')).toMatchSnapshot();
        expect(applyReducedMotion('no-preference')).toMatchSnapshot();
    });
});
