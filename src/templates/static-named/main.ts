import { IGeneratedFile } from '../interfaces/generated-file.interface';

export const generate = (): IGeneratedFile => {
  return {
    fileName: 'src/main.ts',
    file: `import 'reflect-metadata';
import { SpruceApp, SpruceFactory } from '@danielc7150/sprucejs';

import { AppModule } from './app.module.ts';

function bootstrap(): void {
  const app: SpruceApp = SpruceFactory.create(AppModule);
  app.setBaseUrl('/api/v1');
  
  app.listen(3000);
}

bootstrap();
  `
  };
};
