import { IGeneratedFile } from '../interfaces/generated-file.interface';

export function generate(name: string): IGeneratedFile {
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
        "build": "tsc",
        "lint": "tslint --project tsconfig.json"
      },
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "@types/express": "^4.17.7",
        "@types/node": "^14.0.18",
        "tsc-watch": "^4.2.9",
        "typescript": "^3.9.6",
        "tslint": "^6.1.2"
      },
      "dependencies": {
        "@danielc7150/sprucejs": "^1.3.0",
        "tsyringe": "^4.3.0"
      }
    }`
  };
}
