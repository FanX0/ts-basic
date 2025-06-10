import {sayHello, printHello} from '../src/tipe-data-function'

describe ("Function Type", () => {
    it ("should must Function Type sayHello", () => {

        console.info(sayHello("Asep"));
        expect(sayHello("Asep")).toBe("Hello Asep");

        printHello("Farid");
    })

})