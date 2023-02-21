import { AnsiColors } from '../../enums/colors.enum';

export class Logger {
  constructor(private context?: string) {}
  public info(value: string) {
    process.stdout.write(
      AnsiColors.FgBlue + this.handleWithContext(value) + AnsiColors.Reset
    );
  }
  public log(value: string) {
    process.stdout.write(
      AnsiColors.FgWhite + this.handleWithContext(value) + AnsiColors.Reset
    );
  }
  public ok(value: string) {
    process.stdout.write(
      AnsiColors.FgGreen + this.handleWithContext(value) + AnsiColors.Reset
    );
  }
  public error(value: string) {
    process.stderr.write(
      AnsiColors.FgRed + this.handleWithContext(value) + AnsiColors.Reset
    );
  }
  private handleWithContext(value: string) {
    const context = `\n(${this?.context || Logger.name})`;
    const date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    const timestamp = `[${date}]`;
    return `${context} ${value} ${timestamp}`;
  }
}
export default new Logger();
