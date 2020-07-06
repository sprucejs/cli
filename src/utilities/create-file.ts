import fs from 'fs';

export const createFile = (fileLocation: string, content: string) => {
  fs.writeFileSync(fileLocation, content);
};
