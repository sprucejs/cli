import { camelCase } from 'lodash';

import { Files } from '../../../utilities/files';
import { kebabToPascal } from '../../../utilities/kebab-to-pascal';
import { Logger } from '../../../utilities/logger';
import { addAndImportToModule } from './add-and-import-to-module';

export function addAndImportRouterToModule(
  moduleDir: string,
  fileLocation: string,
  fileName: string
): void {
  addAndImportToModule(
    moduleDir,
    (
      moduleFileName: string,
      moduleFile: string,
      moduleFileLocation: string
    ) => {
      const className: string = kebabToPascal(fileName);

      const moduleFileWithImports: string = importRoutesToModule(
        moduleFile,
        className,
        fileLocation
      );

      const moduleFileWithUpdatedRoutes: string = addRouterToModule(
        moduleFileWithImports,
        className
      );

      Files.createFile(moduleFileLocation, moduleFileWithUpdatedRoutes);
      Logger.success(`Updated ${moduleFileName}`);
    }
  );
}

function addRouterToModule(moduleFile: string, className: string): string {
  return moduleFile.replace(
    'routes: [',
    `routes: [\n\t\t{ url: '/${camelCase(
      className
    )}', router: ${className}Router },\n\t`
  );
}

function importRoutesToModule(
  moduleFile: string,
  className: string,
  fileTarget: string
): string {
  const fileNameWithoutExtension: string = fileTarget.replace('.ts', '');

  return moduleFile.replace(
    'import',
    `import { ${className}Router } from '${fileNameWithoutExtension}';\nimport`
  );
}
