import { Command } from 'commander';
import { last } from 'lodash';
import path from 'path';

import { IGeneratedFile } from '../../templates/interfaces/generated-file.interface';
import { createFile } from '../../utilities/create-file';
import { createFolderPath } from '../../utilities/create-folder-path';
import { getGeneratorFn } from './get-generator-fn';
import { FileType } from './interfaces/file-type.constant';

export const generateFile = (command: Command) => {
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
