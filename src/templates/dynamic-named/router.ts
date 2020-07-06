import { kebabToPascal } from '../../utilities/kebab-to-pascal';
import { IGeneratedFile } from '../interfaces/generated-file.interface';

export const generate = (name: string): IGeneratedFile => {
  return {
    fileName: `${name}.router.ts`,
    file: `import { autoInjectable } from 'tsyringe';
import { CoreRouter, RouterService } from '@sprucejs/routing';

@injectable()
export class ${kebabToPascal(name)}Router extends CoreRouter {
  constructor(routerService: RouterService) {
    super(routerService);
    this._createRoutes();
  }

  private _createRoutes(): void {
    this.routerService.get('/hello', () => {
      return 'hello!';
    })
  }
}  
`
  };
};
