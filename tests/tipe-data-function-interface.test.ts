import {AddFunction} from "../src/tipe-data-function-interface";

describe("Function Interface", () => {
    it ("should must Function Interface", () => {

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };

        console.info(add(1, 2));
    })

})