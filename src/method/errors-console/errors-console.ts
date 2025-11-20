// Standard console logging
console.log("log");
console.info("info");
console.warn("warn");
console.error("error");
// Print a table of objects
console.table([{ a: 1 }, { a: 2 }]);

// Throw and catch an error to inspect
try {
  throw new Error("boom");
} catch (e: any) {
  console.log(e.message);
  console.log(typeof e.stack === "string");
}
