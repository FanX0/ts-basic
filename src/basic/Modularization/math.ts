// Named exports from a module
export function add(a: number, b: number) {
  return a + b;
}
export function mul(a: number, b: number) {
  return a * b;
}
// Default export from the module
const defaultVal = 7;
export default defaultVal;
