export class Greeter {
  constructor(private greeting: string) {}

  greet(): string {
    return `Hello, ${this.greeting}!`;
  }
}
