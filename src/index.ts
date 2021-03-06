import { Command } from 'commander';

import { generateApplication } from './actions/application/generate-application';
import { generateFile } from './actions/file/generate-file';

function run(): void {
  const program: Command = new Command() as Command;

  program
    .command('new')
    .description('Generate a new application')
    .action(generateApplication);

  program
    .command('generate')
    .alias('g')
    .description('Generate files for your application')
    .action(generateFile);

  program.parse(process.argv);
}

run();
