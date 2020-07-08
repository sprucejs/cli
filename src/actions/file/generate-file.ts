import { Command } from 'commander';
import { existsSync } from 'fs';
import { last } from 'lodash';
import path from 'path';

import { IGeneratedFile } from '../../templates/interfaces/generated-file.interface';
import { Files } from '../../utilities/files';
import { Logger } from '../../utilities/logger';
import { getGeneratorFn } from './get-generator-fn';
import { FileType } from './interfaces/file-type.constant';

export function generateFile(command: Command): void {
  if (notInRoot()) {
    return;
  }

  const [fileType, fileTarget]: Array<string> = command.args,
    name: string = last(fileTarget.split('/')) as string,
    { type, generate } = getGeneratorFn(fileType);

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
  if (!existsSync('src')) {
    Logger.error(
      'This command needs to be executed from the root of your project.'
    );

    return true;
  }

  return false;
}
