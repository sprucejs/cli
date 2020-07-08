import { Command } from 'commander';
import path from 'path';

import { Files } from '../../utilities/files';
import { Logger } from '../../utilities/logger';
import { generateStarterFiles } from './generate-starter-files';
import { initialiseGit } from './initialise-git';
import { installDependencies } from './install-dependencies';

export async function generateApplication(command: Command): Promise<void> {
  const applicationName: string = command.args[0];

  Logger.log('\nCreating SpruceJS project, sit tight...');

  Files.createFolder(path.join(applicationName, 'src'));

  Logger.log('\nGenerating starter files...');
  generateStarterFiles(applicationName);

  Logger.log('\nInitialising Git repo...');
  await initialiseGit(applicationName);
  Logger.success('Git successfully initilised!');

  await installDependencies(applicationName);
  Logger.success('\nDependencies successfully installed!');
}
