import fs from 'fs';
import path from 'path';

export const createFolderPath = (name: string): void => {
  const fullPath = path.join('src', name);

  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
};
