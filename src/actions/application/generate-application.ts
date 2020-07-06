import { Command } from 'commander';
import path from 'path';

import { createFolder } from '../../utilities/create-folder';
import { generateStarterFiles } from './generate-starter-files';

export const generateApplication = (command: Command) => {
  const applicationName: string = command.args[0];

  createFolder(path.join(applicationName, 'src'));

  generateStarterFiles(applicationName);
};
