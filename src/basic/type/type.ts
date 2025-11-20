// Type alias for a point
type Point = { x: number; y: number }
// Union type for identifiers
type Id = string | number
const p: Point = { x: 1, y: 2 }
// Result: 3
console.log(p.x + p.y)
// Variable using union type
let id: Id = 5
// Result: "number"
console.log(typeof id)
id = "a"
// Result: "string"
console.log(typeof id)

// Utility type Readonly
type ReadonlyUser = Readonly<{ name: string }>
const ru: ReadonlyUser = { name: "Farid" }
// Result: "Farid"
console.log(ru.name)

// Tuple type with fixed positions
type Tuple = [string, number]
const t: Tuple = ["a", 1]
// Result: "a 1"
console.log(t[0], t[1])

// Enum values
enum Color { Red, Green, Blue }
const c: Color = Color.Green
// Result: 1
console.log(c)

// Type narrowing via typeof check
function narrow(x: Id) { if (typeof x === "string") { return x.toUpperCase() } else { return x + 1 } }
// Result: 3
console.log(narrow(2))
// Result: "B"
console.log(narrow("b"))