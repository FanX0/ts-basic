// Interface with optional property
interface Person {
  name: string;
  age?: number;
}
function greet(p: Person): string {
  return `Hello ${p.name}`;
}
// Result: "Hello Farid"
console.log(greet({ name: "Farid" }));

// Interface extension
interface HasId {
  id: string;
}
interface User extends HasId {
  name: string;
}
const u: User = { id: "1", name: "A" };
// Result: "1"
console.log(u.id);

// Class implements interface
interface Logger {
  log(msg: string): void;
}
class ConsoleLogger implements Logger {
  log(msg: string) {
    console.log(msg);
  }
}
// Result: "Logged"
new ConsoleLogger().log("Logged");
