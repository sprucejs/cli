import { Command } from 'commander';
import { last } from 'lodash';
import path from 'path';

import { IGeneratedFile } from '../../templates/interfaces/generated-file.interface';
import { Files } from '../../utilities/files';
import { Logger } from '../../utilities/logger';
import { FileType } from './interfaces/file-type.constant';
import { IGeneratorDetails } from './interfaces/generator-details.interface';
import { getGeneratorFn } from './lib/get-generator-fn';
import { addAndImportProviderToModule } from './lib/provider-to-module';
import { addAndImportRouterToModule } from './lib/router-to-module';

export function generateFile(command: Command): void {
  if (notInRoot()) {
    Logger.error(
      'This command needs to be executed from the root of your project.'
    );
    return;
  }

  const [fileType, fileTarget]: Array<string> = command.args;
  const { type, generate }: IGeneratorDetails = getGeneratorFn(fileType);

  const name: string = last(fileTarget.split('/')) as string;
  const { fileName, file }: IGeneratedFile = generate(name);

  let fullPath: string;

  if (type === FileType.MODULE) {
    fullPath = path.join('src', fileTarget, fileName);
    Files.createFolderPathFromSrc(fileTarget);
    Files.createFile(fullPath, file);
  } else {
    fullPath = path.join('src', fileTarget, type, fileName);
    Files.createFolderPathFromSrc(path.join(fileTarget, type));
    Files.createFile(fullPath, file);
  }

  Logger.success(`Created new ${type} at ${fullPath}`);

  if (type === FileType.ROUTER) {
    const lowestPotentialModuleDir: string = path.join('src', fileTarget),
      fileLocation: string = path.join('src', fileTarget, type, fileName);

    addAndImportRouterToModule(lowestPotentialModuleDir, fileLocation, name);
  }

  if ([FileType.CONTROLLER, FileType.SERVICE].includes(type)) {
    const lowestPotentialModuleDir: string = path.join('src', fileTarget),
      fileLocation: string = path.join('src', fileTarget, type, fileName);

    addAndImportProviderToModule(
      lowestPotentialModuleDir,
      fileLocation,
      name,
      type
    );
  }
}

function notInRoot(): boolean {
  return !Files.exists('src');
}
