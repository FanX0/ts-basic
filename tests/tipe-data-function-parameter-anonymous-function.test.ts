import { sayHello } from "../src/tipe-data-function-parameter-anonymous-function";
describe ("Function parameter Function", () => {
    it("should must parameter Function", () => {

        console.info(sayHello("Farid", (name: string):string => {
            return name.toUpperCase();
        }));

        expect(sayHello("Farid", function(name: string):string {
            return name.toUpperCase();
        })).toBe("Hello FARID");
    })
})