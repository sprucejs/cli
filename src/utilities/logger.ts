import chalk from 'chalk';

// tslint:disable: no-console
export class Logger {
  static blue(content: string): void {
    console.log(chalk.blue(content));
  }

  static newLine(): void {
    console.log(`\n`);
  }

  static error(keyword: string, content: any): void {
    console.log(chalk.red(keyword, content));
  }

  static success(keyword: string, content: string): void {
    console.log(chalk.green(keyword), content);
  }

  static log(keyword: string, content: string): void {
    console.log(chalk.blue(keyword), content);
  }
}

// tslint:enable
