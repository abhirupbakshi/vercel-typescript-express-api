import 'dotenv/config';
import 'reflect-metadata';

import gracefulShutdown from './shared/events/gracefulShutdown';

import { PORT } from './shared/constants/app.constants';

import application from './app/application';
import logger from './shared/helpers/utils/Logger';

import { ShutdownEnum } from './shared/enums/shutdown.enum';

((): void => {
  const server = application.listen(PORT, (): boolean =>
    process.stdout.write(`Server running at port http://localhost:${PORT}\n`)
  );
  process.on('SIGINT', gracefulShutdown(server, 'SIGINT'));
  process.on('SIGTERM', gracefulShutdown(server, 'SIGTERM'));
  process.on('exit', (code) => {
    logger.info(`Exit signal received. Code: ${code}`);
  });
  process.on(ShutdownEnum.uncaughtException, (error, origin) => {
    logger.info(`\n${origin} signal received.\n${error}`);
  });
  process.on(ShutdownEnum.unhandledRejection, (error, origin) => {
    if (error) logger.error(JSON.stringify(error));
    logger.error(`\n${origin} signal received.\n${error}`);
    logger.error(
      `\n${ShutdownEnum.unhandledRejection} signal received.\n${error}`
    );
  });
})();
