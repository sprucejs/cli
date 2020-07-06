import { IGeneratedFile } from '../interfaces/generated-file.interface';

export const generate = (): IGeneratedFile => {
  return {
    fileName: '.gitignore',
    file: `node_modules
dist`
  };
};
