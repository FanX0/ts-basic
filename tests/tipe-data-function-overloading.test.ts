import { callMe } from "../src/tipe-data-function-overloading";

describe ("Function Overloading", () => {
    it("should must Function overloading", () => {

        console.info(callMe(100));
        expect(callMe(100)).toBe(100);

        console.info(callMe("Farid"));
        expect(callMe("Farid")).toBe("Farid");
    })
})