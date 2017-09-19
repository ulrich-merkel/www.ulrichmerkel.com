/* eslint-disable func-names, import/no-extraneous-dependencies */
import { spy } from 'sinon';
import logger from '../logger';

describe('common/utils/logger', function () {
    it('should call basic log functions', function () {
        const spyCall = spy(console, 'log');

        logger.log('log', 'message');
        expect(spyCall.calledOnce);
        expect(spyCall.calledWith('log', 'message'));
        console.log.restore(); // eslint-disable-line no-console
    });
    it('should call basic info functions', function () {
        const spyCall = spy(console, 'info');

        logger.info('info', 'message', 'foo');
        expect(spyCall.calledOnce);
        expect(spyCall.calledWith('info', 'message', 'foo'));
        console.info.restore(); // eslint-disable-line no-console
    });
    it('should call basic warn functions', function () {
        const spyCall = spy(console, 'warn');

        logger.warn('warn', 'message', 'bar');
        expect(spyCall.calledOnce);
        expect(spyCall.calledWith('warn', 'message', 'bar'));
        console.warn.restore(); // eslint-disable-line no-console
    });
    it('should call basic error functions', function () {
        const spyCall = spy(console, 'error');

        logger.error('error', 'message', 'alert');
        expect(spyCall.calledOnce);
        expect(spyCall.calledWith('error', 'message', 'alert'));
        console.error.restore(); // eslint-disable-line no-console
    });
});
