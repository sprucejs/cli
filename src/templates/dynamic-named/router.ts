import { kebabToPascal } from '../../utilities/kebab-to-pascal';
import { IGeneratedFile } from '../interfaces/generated-file.interface';

export function generate(name: string): IGeneratedFile {
  return {
    fileName: `${name}.router.ts`,
    file: `import { injectable } from 'tsyringe';
import { CoreRouter, RouterService } from '@sprucejs/core';

@injectable()
export class ${kebabToPascal(name)}Router extends CoreRouter {
  constructor(routerService: RouterService) {
    super(routerService);
  }

  public generateRoutes(): void {
    this.routerService.get('/hello', () => {
      return 'hello!';
    })
  }
}
`
  };
}
