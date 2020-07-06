import fs from 'fs';

export const createFolder = (name: string) => {
  fs.mkdirSync(name, { recursive: true });
};
