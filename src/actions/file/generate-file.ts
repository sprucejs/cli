import { Command } from 'commander';
import { existsSync } from 'fs';
import { last } from 'lodash';
import path from 'path';

import { IGeneratedFile } from '../../templates/interfaces/generated-file.interface';
import { createFile } from '../../utilities/create-file';
import { createFolderPath } from '../../utilities/create-folder-path';
import { Logger } from '../../utilities/logger';
import { getGeneratorFn } from './get-generator-fn';
import { FileType } from './interfaces/file-type.constant';

export const generateFile = (command: Command) => {
  if (notInRoot()) {
    return;
  }

  const [fileType, fileTarget]: Array<string> = command.args,
    name: string = last(fileTarget.split('/')) as string,
    { type, generate } = getGeneratorFn(fileType);

  const { fileName, file }: IGeneratedFile = generate(name);

  if (type === FileType.MODULE) {
    createFolderPath(fileTarget);
    createFile(path.join('src', fileTarget, fileName), file);
  } else {
    createFolderPath(path.join(fileTarget, type));
    createFile(path.join('src', fileTarget, type, fileName), file);
  }
};

const notInRoot = (): boolean => {
  if (!existsSync('src')) {
    Logger.error(
      'This command needs to be executed from the root of your project.'
    );

    return true;
  }

  return false;
};
