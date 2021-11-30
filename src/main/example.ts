export class Example {
  isLeapYear(a: number): boolean {
    return a % 4 === 0 && (a % 100 !== 0 || (a % 100 === 0 && a % 400 === 0));
  }
}
