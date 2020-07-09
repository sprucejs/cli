import { IGeneratedFile } from '../interfaces/generated-file.interface';

export function generate(): IGeneratedFile {
  return {
    fileName: 'src/app.module.ts',
    file: `import { injectable } from 'tsyringe';

import { IModule } from '@sprucejs/core';

export const AppModule: IModule = {
  imports: [],
  providers: [],
  routes: []
}`
  };
}
