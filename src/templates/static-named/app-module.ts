import { IGeneratedFile } from '../interfaces/generated-file.interface';

export function generate(): IGeneratedFile {
  return {
    fileName: 'src/app.module.ts',
    file: `import { injectable } from 'tsyringe';

import { IModule } from '@sprucejs/core';

@injectable()
export class AppModule implements IModule {
  public imports = [];
  public providers = [];
  public routes = [];
}`
  };
}
