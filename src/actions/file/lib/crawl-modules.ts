import path from 'path';

import { Files } from '../../../utilities/files';

export function crawlModules(
  potentialModuleDir: string,
  callback: (
    moduleFileName: string,
    moduleFile: string,
    moduleFileLocation: string
  ) => void
): void {
  const filesInDir: Array<string> = Files.readDir(potentialModuleDir);

  const moduleFileName: string | undefined = filesInDir.find(
    (dirFileName: string) => {
      return dirFileName.includes('.module.ts');
    }
  );

  if (moduleFileName) {
    const moduleFileLocation: string = path.join(
      potentialModuleDir,
      moduleFileName
    );
    const moduleFile: string = Files.readFile(moduleFileLocation);

    callback(moduleFileName, moduleFile, moduleFileLocation);
  } else {
    const upperLevel: string = potentialModuleDir
      .split('/')
      .slice(0, -1)
      .join('/');

    crawlModules(upperLevel, callback);
  }
}
