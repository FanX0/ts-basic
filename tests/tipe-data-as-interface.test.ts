import { Person } from "../src/tipe-data-as-interface";

describe("Tipe Data Assertion Interface", () => {
    it ("should must Assertion", () => {

        const person: any = {
            id: 1,
            name: "Farid",
            age: 30
        };

        const person2 : Person = person as Person;

        console.info(person2);
    })
})