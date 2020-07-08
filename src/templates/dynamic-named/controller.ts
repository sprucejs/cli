import { kebabToPascal } from '../../utilities/kebab-to-pascal';
import { IGeneratedFile } from '../interfaces/generated-file.interface';

export function generate(name: string): IGeneratedFile {
  return {
    fileName: `${name}.controller.ts`,
    file: `import { injectable } from 'tsyringe';

@injectable()
export class ${kebabToPascal(name)}Controller {
  constructor() {}
}
`
  };
}
