import path from 'path';

export const currentDir = process.cwd;

//@ts-ignore
export const serverRootDir = () => path.dirname(require.main.filename);
