import path from 'path';

import { IGeneratedFile } from '../../templates/interfaces/generated-file.interface';
import { IGeneratorModule } from '../../templates/interfaces/generator-module.interface';
import { appmodule, gitignore, main, packagejson, tsconfig } from '../../templates/static-named';
import { createFile } from '../../utilities/create-file';
import { currentDir } from '../../utilities/directory-locations';

export const generateStarterFiles = (appName: string) => {
  generateFile(packagejson, appName);
  generateFile(tsconfig, appName);
  generateFile(gitignore, appName);
  generateFile(main, appName);
  generateFile(appmodule, appName);
};

const generateFile = (generator: IGeneratorModule, appName: string) => {
  const data: IGeneratedFile = generator.generate(appName),
    fileLocation: string = path.join(currentDir(), appName, data.fileName);

  createFile(fileLocation, data.file);
};
