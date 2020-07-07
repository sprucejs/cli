import { Command } from 'commander';
import path from 'path';

import { createFolder } from '../../utilities/create-folder';
import { Logger } from '../../utilities/logger';
import { generateStarterFiles } from './generate-starter-files';

export const generateApplication = (command: Command) => {
  const applicationName: string = command.args[0];

  Logger.log('\nCreating SpruceJS project, sit tight...');

  createFolder(path.join(applicationName, 'src'));

  Logger.log('\nGenerating starter files...');
  generateStarterFiles(applicationName);
};
