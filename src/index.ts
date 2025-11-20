declare const require: any
const path = require("path")
const fs = require("fs")

function loadAllJS(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      loadAllJS(fullPath)
    } else if (entry.isFile() && path.extname(entry.name) === ".js" && entry.name !== "index.js") {
      require(fullPath)
    }
  }
}

loadAllJS(__dirname)
console.log("Hello")