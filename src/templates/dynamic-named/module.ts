import { kebabToPascal } from '../../utilities/kebab-to-pascal';
import { IGeneratedFile } from '../interfaces/generated-file.interface';

export const generate = (name: string): IGeneratedFile => {
  return {
    fileName: `${name}.module.ts`,
    file: `import { injectable } from 'tsyringe';

import { IModule } from '@sprucejs/core';

@injectable()
export class ${kebabToPascal(name)}Module implements IModule {
  public imports = [];
  public providers = [];
  public routes = [];
}`
  };
};
