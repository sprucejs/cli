import { IGeneratedFile } from '../interfaces/generated-file.interface';

export const generate = (name: string): IGeneratedFile => {
  return {
    fileName: 'package.json',
    file: `
    {
      "name": "${name}",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "dev": "tsc-watch --onSuccess \\"npm start\\"",
        "start": "node ./dist/main.js",
        "build": "tsc"
      },
      "author": "",
      "license": "ISC"
    }`
  };
};
