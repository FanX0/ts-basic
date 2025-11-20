// Sample numeric values
const n = 42;
const f = 3.14159;
const hex = 255;
const big = 1000;

// Convert strings to numbers
console.log(Number("42"));
// Parse integer
console.log(parseInt("42"));
// Parse float
console.log(parseFloat("3.14"));
// Strict NaN check after conversion
console.log(Number.isNaN(Number("foo")));
console.log(Number.isNaN(NaN));
// Strict finite check after conversion
console.log(Number.isFinite(Number("10")));
console.log(Number.isFinite(10));
// Integer and safe-integer checks
console.log(Number.isInteger(5));
console.log(Number.isSafeInteger(2 ** 53 - 1));

// Format numbers as strings
console.log(f.toFixed(2));
console.log(f.toPrecision(4));
console.log(big.toLocaleString());
console.log(hex.toString(16));

// Rounding utilities
console.log(Math.round(4.4));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.trunc(4.7));

// Basic math helpers
console.log(Math.abs(-5));
console.log(Math.max(1, 8, 2));
console.log(Math.min(1, 8, 2));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(25));
console.log(Math.cbrt(27));

// Logs and exponentials
console.log(Math.exp(1));
console.log(Math.expm1(1));
console.log(Math.log(Math.E));
console.log(Math.log10(1000));
console.log(Math.log2(8));
console.log(Math.hypot(3, 4));

// Random helpers
function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(Math.random());
console.log(rand(1, 10));
console.log(Math.random() < 0.5);

// Trigonometry
console.log(Math.sin(Math.PI / 2));
console.log(Math.cos(0));
console.log(Math.tan(Math.PI / 4));
console.log(Math.asin(1));
console.log(Math.acos(1));
console.log(Math.atan(1));
console.log(Math.atan2(1, 1));

// Math constants
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);
