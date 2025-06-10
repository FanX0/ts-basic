import {sayHello} from "../src/tipe-data-function-parameter-default";

describe ("Function Type", () => {
    it ("should must Function Type sayHello", () => {

        console.info(sayHello());
        expect(sayHello()).toBe("Hello Guest");
    })

})