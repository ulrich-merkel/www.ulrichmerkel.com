/* eslint-disable func-names */
import {
    eventPreventDefault,
    eventStopPropagation
} from '../event';

describe('common/utils/event', function () {
    describe('eventPreventDefault', function () {
        it('should call event functions', function () {
            const event = {
                preventDefault: jest.fn()
            };
            eventPreventDefault(event);

            expect(event.preventDefault).toHaveBeenCalled();
        });
    });
    describe('eventStopPropagation', function () {
        it('should call event functions', function () {
            const event = {
                eventStopPropagation: jest.fn()
            };
            eventStopPropagation(event);

            expect(event.eventStopPropagation).toHaveBeenCalled();
        });
    });
});
