/* eslint-disable func-names */
import logger from './../logger';

describe('common/utils/logger', function () {
    it('should call basic log functions', function () {
        logger.log('log');
        logger.info('info');
        logger.warn('warn');
        logger.error('error');
    });
});
