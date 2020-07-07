import { Command } from 'commander';
import path from 'path';

import { createFolder } from '../../utilities/create-folder';
import { Logger } from '../../utilities/logger';
import { generateStarterFiles } from './generate-starter-files';
import { initialiseGit } from './initialise-git';

export const generateApplication = async (command: Command) => {
  const applicationName: string = command.args[0];

  Logger.log('\nCreating SpruceJS project, sit tight...');

  createFolder(path.join(applicationName, 'src'));

  Logger.log('\nGenerating starter files...');
  generateStarterFiles(applicationName);

  Logger.log('\nInitialising Git repo...');
  await initialiseGit(applicationName);
  Logger.success('Git successfully initilised!');
};
