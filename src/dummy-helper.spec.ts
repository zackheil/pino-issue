import { Logger } from './logger.js';
import { iAcceptLoggers } from './dummy-helper.js';

let logger = new Logger({ level: 'silent' });

describe('Logger will fail here:', () => {
    beforeAll(() => {
        // This doesn't matter
        // logger = new Logger({ level: 'silent' });
    });
    test(`Test logger being passed to a function`, () => {
        const result = iAcceptLoggers(logger);

        expect(result).toEqual(42);
    });
});
