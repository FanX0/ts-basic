import {sum} from "../src/tipe-data-function-parameter-rest";

describe ("Function Type", () => {
    it ("should must Function Type sayHello", () => {

        console.log(sum(1, 2, 3, 4, 5));
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    })

})