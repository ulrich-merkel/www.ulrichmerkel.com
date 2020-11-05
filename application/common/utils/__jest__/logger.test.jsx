/* eslint-disable func-names, import/no-extraneous-dependencies */
import { stub } from 'sinon';
import { logger } from '../logger';

describe('common/utils/logger', function () {
    logger.enable(true);

    it('should call basic log functions', function () {
        const spyCall = stub(logger, '_log');
        logger.log('log', 'message');
        expect(spyCall.calledOnce).toBeTruthy();
        spyCall.restore();
    });
    it('should call basic info functions', function () {
        const spyCall = stub(logger, '_info');
        logger.info('info', 'message', 'foo');
        expect(spyCall.calledOnce).toBeTruthy();
        spyCall.restore();
    });
    it('should call basic warn functions', function () {
        const spyCall = stub(logger, '_warn');
        logger.warn('warn', 'message', 'bar');
        expect(spyCall.calledOnce).toBeTruthy();
        spyCall.restore();
    });
    it('should call basic error functions', function () {
        const spyCall = stub(logger, '_error');
        logger.error('warn', 'message', 'bar');
        expect(spyCall.calledOnce).toBeTruthy();
        spyCall.restore();
    });
    it('should be able to set a name', function () {
        logger.setName('test');
        expect(logger.name).toEqual('test');
    });
    it('should return the correct result for isEnabled', function () {
        expect(logger.isEnabled()).toBeTruthy();
    });
    it('should use fallback if there is no console', function () {
        global.console = undefined; // eslint-disable-line immutable/no-mutation
        const spyCall = stub(logger, 'write');
        logger.log('log', 'message');
        expect(spyCall.calledOnce);
        logger.write.restore();
        global.console = {}; // eslint-disable-line immutable/no-mutation
    });
    it('should log noting if disabled', function () {
        const spyCall = stub(logger, '_log');
        logger.enable(false);
        logger.log('log', 'message');
        expect(spyCall.calledOnce).toBeTruthy();
        expect(spyCall.calledWith('log', 'message'));
        spyCall.restore();
    });
});
