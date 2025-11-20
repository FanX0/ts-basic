// String with surrounding spaces
const strTrim = " Hello Farid ";
// Base string for checks
const str = "farid";
// String with space separator
const strSplit = "farid azhari";
// String with accented character for normalization
const strNormalize = "farid é";

// Remove leading and trailing spaces
console.log(strTrim.trim());
// Remove leading spaces only
console.log(strTrim.trimStart());
// Remove trailing spaces only
console.log(strTrim.trimEnd());
// Normalize to compare composed/decomposed Unicode
console.log(strNormalize.normalize() === "farid e\u0301".normalize());

// Pad string on the start
console.log("9".padStart(4, "0"));
// Pad with custom fill
console.log(str.padStart(9, "kun"));

// Replace first match
console.log("Hello World".replace("World", "Farid"));
// Replace all matches
console.log("ha ha ha".replaceAll("ha", "ho"));
// Lower/Upper casing
console.log("Mixed Case".toLowerCase());
console.log("Mixed Case".toUpperCase());

// Starts/Ends/Includes checks
console.log(str.startsWith("fa"));
console.log(str.endsWith("rid"));
console.log(str.includes("ari"));
console.log(str.includes("aid"));

// Find index positions
console.log(str.indexOf("rid"));
console.log("banana".lastIndexOf("a"));

// Split by delimiter into array
console.log(strSplit.split(" "));

// Access characters and codes
console.log(str.at(2));
console.log(str.charAt(2));
console.log(str.charCodeAt(0));
console.log("😀".codePointAt(0));

// Extract slices and substrings
console.log(str.slice(2, 5));
console.log("abcdef".substring(1, 4));
