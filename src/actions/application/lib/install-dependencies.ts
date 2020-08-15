import { Spinner } from 'cli-spinner';

import { execShellCommand } from '../../../utilities/exec-shell-command';
import { Logger } from '../../../utilities/logger';

export async function installDependencies(appName: string): Promise<void> {
  const spinner: Spinner = new Spinner('Installing dependencies... %s');
  Logger.newLine();
  spinner.setSpinnerString('|/-\\');
  spinner.start();

  process.chdir(`./${appName}`);

  try {
    await execShellCommand('npm i');
    // await execShellCommand('npm i @sprucejs/core');
  } finally {
    spinner.stop();
  }
}
