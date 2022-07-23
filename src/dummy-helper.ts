import { Logger } from './logger.js';

export const iAcceptLoggers = (logger: Logger): number => {
    logger.info('I accept loggers');
    return 42;
};
