import { IGeneratedFile } from '../interfaces/generated-file.interface';

export function generate(): IGeneratedFile {
  return {
    fileName: 'src/main.ts',
    file: `import 'reflect-metadata';
import { SpruceApp, SpruceFactory } from '@sprucejs/core';

import { appModule } from './app.module';

function bootstrap(): void {
  const app: SpruceApp = SpruceFactory.create(appModule);
  app.setBaseUrl('/api/v1');

  app.listen(3000);
}

bootstrap();
  `
  };
}
