import chalk from 'chalk';

// tslint:disable: no-console
export class Logger {
  static blue(content: string): void {
    console.log(chalk.blue(content));
  }

  static error(content: any): void {
    console.log(chalk.red(content));
  }

  static success(content: string): void {
    console.log(chalk.green(content));
  }

  static log(content: string): void {
    console.log(content);
  }
}

// tslint:enable
