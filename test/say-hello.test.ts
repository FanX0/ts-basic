import {sayHello} from "../src/say-hello";

describe ("Hello", function () {
    it ("Should say hello", function () {

        expect(sayHello("Farid")).toBe("Hello Farid");
    })
})