// Base class with static and private members
class Animal {
  static count = 0;
  #secret = "s";
  name: string;
  constructor(name: string) {
    this.name = name;
    Animal.count++;
  }
  speak() {
    return `${this.name} speaks`;
  }
  get secret() {
    return this.#secret;
  }
}
// Derived class overrides method
class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  speak() {
    return `${this.name} barks`;
  }
}
const a = new Animal("Ani");
const d = new Dog("Doggo");
// Result: "Ani speaks"
console.log(a.speak());
// Result: "Doggo barks"
console.log(d.speak());
// Result: 2
console.log(Animal.count);
// Result: "s"
console.log(d.secret);
