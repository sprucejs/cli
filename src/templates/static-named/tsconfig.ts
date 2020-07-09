import { IGeneratedFile } from '../interfaces/generated-file.interface';

export function generate(): IGeneratedFile {
  return {
    fileName: 'tsconfig.json',
    file: `{
      "compilerOptions": {
        "moduleResolution": "node",
        "sourceMap": true,
        "baseUrl": ".",
        "incremental": true,
        "target": "es6",
        "module": "commonjs",
        "lib": ["ES2015"],
        "declaration": true,
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "noImplicitAny": true,
        "forceConsistentCasingInFileNames": true,
        "noUnusedParameters": true,
        "esModuleInterop": true,
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
      },
      "include": ["src/**/*"],
      "exclude": ["node_modules", "**/*.spec.ts", "**/*.stub.ts"]
    }
    `
  };
}
