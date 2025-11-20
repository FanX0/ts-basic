// Plain object literal
const o1 = { a: 1, b: 2 };
console.log(o1);
// Object with no prototype
const o2 = Object.create(null) as Record<string, unknown>;
o2.x = 1;
console.log(o2);
// Build object from key-value pairs
console.log(
  Object.fromEntries([
    ["k", 3],
    ["z", 4],
  ])
);

// Inspect keys/values/entries
console.log(Object.keys({ a: 1, b: 2 }));
console.log(Object.values({ a: 1, b: 2 }));
console.log(Object.entries({ a: 1, b: 2 }));
console.log(Object.hasOwn({ a: 1 }, "a"));
console.log(({ a: 1 } as Record<string, unknown>).hasOwnProperty("a"));
console.log("a" in { a: 1 });

// Merge objects
console.log(Object.assign({}, { a: 1 }, { b: 2 }));
console.log({ ...{ a: 1 }, ...{ b: 2 } });

// Shallow vs deep clone
const src = { a: 1, nested: { x: 10 } };
const shallow = { ...src };
console.log(shallow.nested === src.nested);
const deep =
  typeof (globalThis as any).structuredClone === "function"
    ? (globalThis as any).structuredClone(src)
    : JSON.parse(JSON.stringify(src));
console.log(deep.nested === src.nested);

// Freeze/Seal/PreventExtensions
const f = { a: 1 };
Object.freeze(f);
console.log(Object.isFrozen(f));
const s = { a: 1 };
Object.seal(s);
console.log(Object.isSealed(s));
const e = { a: 1 };
Object.preventExtensions(e);
console.log(Object.isExtensible(e));

// Define properties and descriptors
const d: Record<string, unknown> = {};
Object.defineProperty(d, "hidden", {
  value: 123,
  writable: false,
  enumerable: false,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(d, "hidden")!.enumerable);
Object.defineProperties(d, { a: { value: 1 }, b: { value: 2 } });
console.log(Object.getOwnPropertyDescriptors(d).a.value);

// Prototypes and instances
function C(this: any) {}
(C as any).prototype.greet = function () {
  return "hi";
};
const inst = new (C as any)();
console.log(Object.getPrototypeOf(inst) === (C as any).prototype);
const p = {
  hello() {
    return "world";
  },
};
const objP = Object.create(p);
console.log(objP.hello());

// Object.is for equality semantics
console.log(Object.is(NaN, NaN));
console.log(Object.is(+0, -0));
console.log(Object.is(1, 1));

// JSON stringify/parse
const jsonStr = JSON.stringify({ a: 1, b: 2 }, null, 2);
console.log(typeof jsonStr === "string");
console.log(JSON.parse("{" + '"a":1}').a);
