import type { P } from 'pino';
import { pino } from 'pino';

type LoggingOptions = {
    level: P.LevelWithSilent;
    destination?: P.DestinationStream;
};

export class Logger {
    private _logger: P.Logger;
    constructor(config?: LoggingOptions) {
        this._logger = pino({ ...config }, config?.destination!);
    }

    public info(message: string | Record<string, unknown> | Error, ...args: any[]): void {
        this._logger.info(message, ...args);
    }
}
