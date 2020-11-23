import { eventPreventDefault, eventStopPropagation } from '../event';

describe('eventPreventDefault', function fnDescribe() {
    it('should call event functions', function fnIt() {
        const event = {
            preventDefault: jest.fn()
        };
        eventPreventDefault(event);

        expect(event.preventDefault).toHaveBeenCalled();
    });
});

describe('eventStopPropagation', function fnDescribe() {
    it('should call event functions', function fnIt() {
        const event = {
            stopPropagation: jest.fn()
        };
        eventStopPropagation(event);

        expect(event.stopPropagation).toHaveBeenCalled();
    });
});
