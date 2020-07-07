import { Spinner } from 'cli-spinner';

import { execShellCommand } from '../../utilities/exec-shell-command';

export const installDependencies = async (appName: string): Promise<void> => {
  const spinner = new Spinner('\nInstalling dependencies... %s');
  spinner.setSpinnerString('|/-\\');
  spinner.start();

  process.chdir(`./${appName}`);

  await execShellCommand('npm i');
  spinner.stop();
};
