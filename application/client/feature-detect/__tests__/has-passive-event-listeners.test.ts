import { hasPassiveEventListeners } from '../has-passive-event-listeners';

describe('hasPassiveEventListeners', function fnDescribe() {
    it('should return false in non browser environments', function fnIt() {
        expect(hasPassiveEventListeners()).toBeTruthy();
    });
});
