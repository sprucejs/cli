import { Spinner } from 'cli-spinner';

import { execShellCommand } from '../../../utilities/exec-shell-command';
import { Logger } from '../../../utilities/logger';

export async function installDependencies(appName: string): Promise<void> {
  Logger.log('\n');
  const spinner: Spinner = new Spinner('Installing dependencies... %s');
  spinner.setSpinnerString('|/-\\');
  spinner.start();

  process.chdir(`./${appName}`);

  await execShellCommand('npm i');
  spinner.stop();
}
