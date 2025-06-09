describe("Tipe Data Any", () => {
    it ("should must declared", () => {

        const name: any = "Farid";
        console.info(name);

        const person: any = {
            id: 1,
            name: "Farid Ahmad",
            age: 30
        };
        person.age = 31;
        console.info(person);

    })
})