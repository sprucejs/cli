import { kebabToPascal } from '../../utilities/kebab-to-pascal';
import { IGeneratedFile } from '../interfaces/generated-file.interface';

export function generate(name: string): IGeneratedFile {
  return {
    fileName: `${name}.module.ts`,
    file: `import { injectable } from 'tsyringe';

import { IModule } from '@sprucejs/core';

export const ${kebabToPascal(name)}Module: IModule = {
  imports: [],
  providers: [],
  routes: []
}`
  };
}
