// Function declaration (hoisted)
function add(a: number, b: number) {
  return a + b;
}
console.log(add(2, 3));

// Function expression (not hoisted)
const mul = function (a: number, b: number) {
  return a * b;
};
console.log(mul(2, 3));

// Arrow function (concise syntax)
const inc = (x: number) => x + 1;
console.log(inc(5));

// Default parameters
function greet(name: string = "world") {
  return "hello " + name;
}
console.log(greet());

// Rest parameters
function sum(...nums: number[]) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3));

// call/apply/bind manipulate 'this'
const obj = {
  x: 1,
  getX() {
    return (this as any).x;
  },
};
const getX = obj.getX;
console.log(getX.call(obj));
const bound = getX.bind(obj);
console.log(bound());
console.log(getX.apply(obj));

// Closure captures outer scope
function outer() {
  let c = 0;
  return function () {
    c++;
    return c;
  };
}
const incC = outer();
console.log(incC());
console.log(incC());
