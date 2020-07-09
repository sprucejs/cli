import { Files } from '../../../utilities/files';
import { kebabToPascal } from '../../../utilities/kebab-to-pascal';
import { Logger } from '../../../utilities/logger';
import { FileType } from '../interfaces/file-type.constant';
import { addAndImportToModule } from './add-and-import-to-module';

export function addAndImportProviderToModule(
  moduleDir: string,
  fileLocation: string,
  fileName: string,
  fileType: FileType
): void {
  addAndImportToModule(
    moduleDir,
    (
      moduleFileName: string,
      moduleFile: string,
      moduleFileLocation: string
    ) => {
      const className: string =
        kebabToPascal(fileName) + getProviderExtension(fileType);

      const moduleFileWithImports: string = importProvidersInModule(
        moduleFile,
        className,
        fileLocation
      );

      const moduleFileWithAddedProviders: string = addProviderToModule(
        moduleFileWithImports,
        className
      );

      Files.createFile(moduleFileLocation, moduleFileWithAddedProviders);
      Logger.success(`Updated ${moduleFileName}`);
    }
  );
}

function importProvidersInModule(
  file: string,
  className: string,
  fileTarget: string
): string {
  const fileNameWithoutExtension: string = fileTarget.replace('.ts', '');
  return file.replace(
    'import',
    `import { ${className} } from '${fileNameWithoutExtension}';\nimport`
  );
}

function addProviderToModule(file: string, className: string): string {
  return file.replace('providers: [', `providers: [\n\t\t${className},\n\t`);
}

function getProviderExtension(fileType: FileType): string {
  if (fileType === FileType.CONTROLLER) {
    return 'Controller';
  } else {
    return 'Service';
  }
}
