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

  static readFile(name: string): string {
    return fs.readFileSync(name, 'utf-8');
  }

  static readDir(directory: string): Array<string> {
    return fs.readdirSync(directory);
  }

  static getCurrentDir: () => string = process.cwd;
}
