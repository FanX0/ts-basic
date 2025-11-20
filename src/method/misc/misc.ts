// Schedule a one-time callback
setTimeout(() => console.log("timeout"), 0);
// Schedule repeated callbacks; then stop
const id = setInterval(() => {
  console.log("interval");
  clearInterval(id);
}, 0);
// Create settled promises
Promise.resolve(5).then((v) => console.log(v));
Promise.reject(new Error("x")).catch((e) => console.log("caught"));

// Map key-value collection
const m = new Map([
  ["a", 1],
  ["b", 2],
]);
console.log(m.get("a"));
// Set ensures uniqueness
const s = new Set([1, 2, 2, 3]);
console.log(s.size);
// WeakMap with object keys, not enumerable
const wm = new WeakMap<object, number>();
const o: object = {};
wm.set(o, 1);
console.log(wm.has(o));
// Current timestamp in milliseconds
console.log(Date.now() > 0);
