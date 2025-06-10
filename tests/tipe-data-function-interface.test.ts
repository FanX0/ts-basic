import {AddFunction} from "../src/tipe-data-function-interface";
import {Person} from "../src/tipe-data-function-interface";

describe("Function Interface", () => {
    it ("should must Function Interface", () => {

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };

        console.info(add(1, 2));
    })
    it("should must Function in Interface", () => {

        const person: Person = {
            name: "Farid",
            sayHello:function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        }
        console.info(person.sayHello("asep"));
    })


})