// Parse and manipulate a full URL
const url = new URL("https://example.com/page?foo=1");
// Read a query parameter
console.log(url.searchParams.get("foo"));
// Set or replace a parameter
url.searchParams.set("bar", "2");
// Append multiple values to same key
url.searchParams.append("list", "a");
url.searchParams.append("list", "b");
// Remove a parameter
url.searchParams.delete("foo");
// Serialize back to URL string
console.log(url.toString());

// Work with standalone query strings
const params = new URLSearchParams("a=1&b=2&a=3");
// Get first value and all values for a key
console.log(params.get("a"));
console.log(params.getAll("a"));
// Replace and delete entries
params.set("c", "x");
params.delete("b");
// Serialize back to query string
console.log(params.toString());
