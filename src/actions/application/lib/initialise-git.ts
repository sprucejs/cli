import simpleGit, { SimpleGit } from 'simple-git/promise';

export async function initialiseGit(appName: string): Promise<void> {
  const git: SimpleGit = simpleGit(appName);

  await git.init();
  await git.add('*');
  await git.commit('Initial commit');
}
