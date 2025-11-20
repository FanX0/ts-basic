// Function declaration (hoisted)
function add(a: number, b: number) {
  return a + b;
}
// Result: 5
console.log(add(2, 3));

// Function expression (not hoisted)
const mul = function (a: number, b: number) {
  return a * b;
};
// Result: 12
console.log(mul(3, 4));

// Arrow function (concise syntax)
const inc = (x: number) => x + 1;
// Result: 6
console.log(inc(5));

// Default parameters
function greet(name: string = "world") {
  return "hello " + name;
}
// Result: "hello world"
console.log(greet());
// Result: "hello ts"
console.log(greet("ts"));

// Optional parameter
function maybeJoin(a: string, b?: string) {
  return b ? a + b : a;
}
// Result: "A"
console.log(maybeJoin("A"));
// Result: "AB"
console.log(maybeJoin("A", "B"));

// Rest parameters
function sum(...nums: number[]) {
  return nums.reduce((a, b) => a + b, 0);
}
// Result: 10
console.log(sum(1, 2, 3, 4));

function format(x: number): string;
function format(x: string): string;
function format(x: number | string): string {
  return typeof x === "number" ? x.toFixed(2) : x.toUpperCase();
}
// Result: "3.14"
console.log(format(3.14159));
// Result: "TS"
console.log(format("ts"));

function getX(this: { x: number }) {
  return this.x;
}
const obj = { x: 42 };
// Result: 42
console.log(getX.call(obj));
const bound = getX.bind(obj);
// Result: 42
console.log(bound());

const double = (fn: (n: number) => number, x: number) => fn(fn(x));
const square = (n: number) => n * n;
// Result: 81
console.log(double(square, 3));
