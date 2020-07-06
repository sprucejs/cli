import { fileGeneratorFn } from './file-generator-fn.interface';

export interface IGeneratorModule {
  generate: fileGeneratorFn;
}
