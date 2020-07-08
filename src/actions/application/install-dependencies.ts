import { Spinner } from 'cli-spinner';

import { execShellCommand } from '../../utilities/exec-shell-command';

export async function installDependencies(appName: string): Promise<void> {
  const spinner: Spinner = new Spinner('\nInstalling dependencies... %s');
  spinner.setSpinnerString('|/-\\');
  spinner.start();

  process.chdir(`./${appName}`);

  await execShellCommand('npm i');
  spinner.stop();
}
