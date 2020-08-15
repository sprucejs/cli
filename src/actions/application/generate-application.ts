import { Command } from 'commander';
import path from 'path';

import { Files } from '../../utilities/files';
import { Logger } from '../../utilities/logger';
import { generateStarterFiles } from './lib/generate-starter-files';
import { initialiseGit } from './lib/initialise-git';
import { installDependencies } from './lib/install-dependencies';

export async function generateApplication(command: Command): Promise<void> {
  const applicationName: string = command.args[0];

  Logger.newLine();
  Logger.log('🌲', 'Planting the seed for your spruce application...');
  Logger.newLine();

  Files.createFolder(path.join(applicationName, 'src'));

  generateStarterFiles(applicationName);

  await initialiseGit(applicationName);
  Logger.success('SUCCESS', 'Initialised git');

  await installDependencies(applicationName);

  Logger.newLine();
  Logger.success('SUCCESS', 'Dependencies successfully installed!');
  Logger.newLine();
}
