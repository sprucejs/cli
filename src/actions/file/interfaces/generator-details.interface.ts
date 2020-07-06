import { fileGeneratorFn } from '../../../templates/interfaces/file-generator-fn.interface';
import { FileType } from './file-type.constant';

export interface IGeneratorDetails {
  generate: fileGeneratorFn;
  type: FileType;
}
