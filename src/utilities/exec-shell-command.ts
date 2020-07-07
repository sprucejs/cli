import { exec } from 'child_process';

import { Logger } from './logger';

export const execShellCommand = (command: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        Logger.error(error);
        reject(error);
      } else {
        resolve(stdout ? stdout : stderr);
      }
    });
  });
};
