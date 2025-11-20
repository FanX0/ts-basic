// Generic identity function returns the same type it receives
function identity<T>(x: T): T {
  return x;
}
// Result: 5
console.log(identity<number>(5));
// Result: "Hello"
console.log(identity<string>("Hello"));

// Generic function for arrays returning the first element
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}
// Result: 1
console.log(first([1, 2, 3]));
// Result: "a"
console.log(first(["a", "b"]));

// Constrained generic: pick a property from an object
function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
// Result: 1
console.log(pluck({ a: 1, b: 2 }, "a"));

// Generic class holding a value of type T
class Box<T> {
  value: T;
  constructor(v: T) {
    this.value = v;
  }
  get(): T {
    return this.value;
  }
}
const nb = new Box<number>(10);
const sb = new Box<string>("x");
// Result: 10
console.log(nb.get());
// Result: "x"
console.log(sb.get());
