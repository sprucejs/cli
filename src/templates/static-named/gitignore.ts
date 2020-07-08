import { IGeneratedFile } from '../interfaces/generated-file.interface';

export function generate(): IGeneratedFile {
  return {
    fileName: '.gitignore',
    file: `node_modules
dist`
  };
}
