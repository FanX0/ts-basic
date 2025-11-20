// Example object to serialize
const obj = { a: 1, b: 2 };
console.log(obj);
// Convert object to JSON string
const s = JSON.stringify(obj);
console.log(typeof s === "string");
console.log(s);

// Parse JSON string back to object
const obj2 = JSON.parse(s) as { a: number; b: number };
console.log(obj2);
console.log(obj2.a);

// Replacer function transforms values during stringify
const s2 = JSON.stringify({ a: 1 }, (k, v) =>
  k === "a" ? (v as number) * 10 : v
);
console.log(s2);

// Reviver transforms values during parse
const revived = JSON.parse('{"date":"2020-01-02T00:00:00.000Z"}', (k, v) =>
  k === "date" ? new Date(v as string) : v
) as { date: Date };
console.log(revived.date instanceof Date);

// Handle parse errors
try {
  JSON.parse("{bad json}");
} catch (e) {
  console.log("error");
}
