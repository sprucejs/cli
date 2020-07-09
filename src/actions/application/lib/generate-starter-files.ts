import { forEach } from 'lodash';
import path from 'path';

import { IGeneratedFile } from '../../../templates/interfaces/generated-file.interface';
import { IGeneratorModule } from '../../../templates/interfaces/generator-module.interface';
import * as starterFiles from '../../../templates/static-named';
import { Files } from '../../../utilities/files';
import { Logger } from '../../../utilities/logger';

export function generateStarterFiles(appName: string): void {
  forEach(starterFiles, (file: IGeneratorModule) => {
    generateFile(file, appName);
  });
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
