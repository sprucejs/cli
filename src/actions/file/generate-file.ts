import { Command } from 'commander';
import { last } from 'lodash';
import path from 'path';

import { IGeneratedFile } from '../../templates/interfaces/generated-file.interface';
import { Files } from '../../utilities/files';
import { Logger } from '../../utilities/logger';
import { getGeneratorFn } from './get-generator-fn';
import { FileType } from './interfaces/file-type.constant';
import { IGeneratorDetails } from './interfaces/generator-details.interface';

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

  if (type === FileType.MODULE) {
    Files.createFolderPathFromSrc(fileTarget);
    Files.createFile(path.join('src', fileTarget, fileName), file);
  } else {
    Files.createFolderPathFromSrc(path.join(fileTarget, type));
    Files.createFile(path.join('src', fileTarget, type, fileName), file);
  }
}

function notInRoot(): boolean {
  return !Files.exists('src');
}
