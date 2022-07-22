import { format } from 'util';
import { Logger } from './logger.js';

let outStr;
const write = (message) => {
    outStr = message;
};

describe('Logger:', () => {

    describe('Level Functionality:', () => {
        beforeEach(() => {
            outStr = undefined;
        });

        test('should log to custom destination', () => {
            const level = 'info'; // implied default
            const log = new Logger({ level: 'info', destination: { write } });
            log.info('hello');
            
            expect(outStr).toBeDefined();
        });
    });
});
