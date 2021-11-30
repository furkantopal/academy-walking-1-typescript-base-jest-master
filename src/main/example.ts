export class Example {
  isLeapYear(a: number): boolean {
    //return a % 4 === 0
    if (a % 4 === 0) {
      if (a % 100 !== 0) {
        return true;
      }
      return false;
    }
    return false;
  }
}
