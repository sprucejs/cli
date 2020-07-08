import fs from 'fs';
import path from 'path';

export class Files {
  static createFile(fileLocation: string, content: string): void {
    fs.writeFileSync(fileLocation, content);
  }

  static createFolderPathFromSrc(name: string): void {
    const fullPath: string = path.join('src', name);

    Files.createFolder(fullPath);
  }

  static createFolder(name: string): void {
    if (!fs.existsSync(name)) {
      fs.mkdirSync(name, { recursive: true });
    }
  }

  static exists(name: string): boolean {
    return fs.existsSync(name);
  }

  static getCurrentDir: () => string = process.cwd;
}
