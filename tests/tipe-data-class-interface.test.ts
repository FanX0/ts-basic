import {Animal} from "../src/tipe-data-class-interface";

describe("Tipe Data Class Interface", () => {
    it ("should must Class", () => {

        class Dog implements Animal {
            name = "Dog";
            speak() {
                console.log("Woof");
            }
        }

        const myDog = new Dog();
        console.log(myDog.name);
        myDog.speak();

    })
})