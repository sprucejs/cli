import chalk from 'chalk';

export class Logger {
  static blue(content: string): void {
    console.log(chalk.blue(content));
  }

  static error(content: string): void {
    console.log(chalk.red(content));
  }

  static success(content: string): void {
    console.log(chalk.green(content));
  }

  static log(content: string): void {
    console.log(content);
  }
}
