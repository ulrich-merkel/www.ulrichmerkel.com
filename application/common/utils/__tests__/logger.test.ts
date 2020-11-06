import { logger } from '../logger';

describe('logger', function fnDescribe() {
    logger.enable(true);

    it('should call basic log functions', function fnIt() {
        const spyCall = jest.spyOn(logger, '_log');
        logger.log('log', 'message');
        expect(spyCall).toHaveBeenCalled();
        spyCall.mockRestore();
    });
    it('should call basic info functions', function fnIt() {
        const spyCall = jest.spyOn(logger, '_info');
        logger.info('info', 'message', 'foo');
        expect(spyCall).toHaveBeenCalled();
        spyCall.mockRestore();
    });
    it('should call basic warn functions', function fnIt() {
        const spyCall = jest.spyOn(logger, '_warn');
        logger.warn('warn', 'message', 'bar');
        expect(spyCall).toHaveBeenCalled();
        spyCall.mockRestore();
    });
    it('should call basic error functions', function fnIt() {
        const spyCall = jest.spyOn(logger, '_error');
        logger.error('warn', 'message', 'bar');
        expect(spyCall).toHaveBeenCalled();
        spyCall.mockRestore();
    });
    it('should be able to set a name', function fnIt() {
        logger.setName('test');
        expect(logger.name).toEqual('test');
    });
    it('should return the correct result for isEnabled', function fnIt() {
        expect(logger.isEnabled()).toBeTruthy();
    });
    it('should use fallback if there is no console', function fnIt() {
        global.console = undefined; // eslint-disable-line immutable/no-mutation
        const spyCall = jest.spyOn(logger, 'write');
        logger.log('log', 'message');
        expect(spyCall).toHaveBeenCalled();
        spyCall.mockRestore();
        global.console = {}; // eslint-disable-line immutable/no-mutation
    });
    it('should log noting if disabled', function fnIt() {
        const spyCall = jest.spyOn(global.console, 'log');
        logger.enable(false);
        logger.log('log', 'message');
        expect(spyCall).not.toHaveBeenCalled();
        spyCall.mockRestore();
    });
});
