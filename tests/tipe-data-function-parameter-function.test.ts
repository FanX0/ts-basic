import { sayHello, toUpper } from "../src/tipe-data-function-parameter-function";
describe ("Function parameter Function", () => {
    it("should must parameter Function", () => {

        console.info(sayHello("Farid", toUpper));
        expect(sayHello("Farid", toUpper)).toBe("Hello FARID");
    })
})