import path from 'path';

import { IGeneratedFile } from '../../templates/interfaces/generated-file.interface';
import { IGeneratorModule } from '../../templates/interfaces/generator-module.interface';
import { appmodule, gitignore, main, packagejson, tsconfig } from '../../templates/static-named';
import { Files } from '../../utilities/files';
import { Logger } from '../../utilities/logger';

export function generateStarterFiles(appName: string): void {
  generateFile(packagejson, appName);
  generateFile(tsconfig, appName);
  generateFile(gitignore, appName);
  generateFile(main, appName);
  generateFile(appmodule, appName);
}

function generateFile(generator: IGeneratorModule, appName: string): void {
  const data: IGeneratedFile = generator.generate(appName),
    fileLocation: string = path.join(
      Files.getCurrentDir(),
      appName,
      data.fileName
    );

  Files.createFile(fileLocation, data.file);
  Logger.success(`Created ${data.fileName}`);
}
