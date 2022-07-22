import type { P } from 'pino';
import { default as Pino } from 'pino';

type LoggingOptions = {
    destination: P.DestinationStream;
};

export class Logger {
    private _logger: P.Logger;
    constructor(config?: LoggingOptions) {
        this._logger = Pino({level: 'info'}, config?.destination!);
    }

    public info(message: string | Record<string, unknown> | Error, ...args: any[]): void {
        this._logger.info(message, ...args);
    }
}
