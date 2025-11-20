// Check if a value is an array
console.log(Array.isArray([1, 2, 3]));
// Create an array from arguments
console.log(Array.of(1, 2, 3));
// Create an array from an iterable/string
console.log(Array.from("abc"));

// Push/Pop add/remove at the end
const a1 = [1];
// Add 2 to the end
a1.push(2);
console.log(a1);
console.log(a1.pop());
console.log(a1);

// Unshift/Shift add/remove at the start
const a2 = [2];
a2.unshift(1);
console.log(a2);
console.log(a2.shift());
console.log(a2);

// Splice to remove or insert items
const a3 = [1, 2, 3];
console.log(a3.splice(1, 1));
console.log(a3);

// Iterate, transform, aggregate
const nums = [1, 2, 3];
nums.forEach((x) => process.stdout.write(String(x)));
process.stdout.write("\n");
console.log(nums.map((x) => x * 2));
console.log(nums.filter((x) => x % 2 === 1));
console.log(nums.reduce((sum, x) => sum + x, 0));
console.log([1, 2].reduceRight((acc, x) => acc - x));

// Search for items
const fruits = ["apple", "banana", "cherry", "banana"];
console.log(fruits.indexOf("banana"));
console.log(fruits.lastIndexOf("banana"));
console.log(fruits.includes("cherry"));
console.log(fruits.find((f) => f.startsWith("b")));
console.log(fruits.findIndex((f) => f.startsWith("c")));

// Sort and reverse order
console.log([3, 1, 2].sort());
console.log(["b", "a"].reverse());

// Slice, concat, flatten arrays
console.log([1, 2, 3].slice(1, 3));
console.log([1].concat([2, 3]));
console.log([1, [2, [3]]].flat(2));
console.log([1, 2, 3].flatMap((x) => [x, x * 10]));

// Join and stringify arrays
console.log(["a", "b", "c"].join("-"));
console.log([1, 2, 3].toString());
console.log([1000].toLocaleString());

// Modify elements in place
console.log([1, 2, 3, 4].copyWithin(1, 2));
console.log(new Array(3).fill(0));

// Check all or some elements
console.log([2, 4, 6].every((x) => x % 2 === 0));
console.log([1, 2, 3].some((x) => x > 2));

// Iterators for index, values, entries
console.log(Array.from([10, 20].keys()));
console.log(Array.from([10, 20].values()));
console.log(Array.from([10, 20].entries()));
