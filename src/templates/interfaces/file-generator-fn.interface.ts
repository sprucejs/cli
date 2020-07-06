import { IGeneratedFile } from './generated-file.interface';

export type fileGeneratorFn = (name: string) => IGeneratedFile;
