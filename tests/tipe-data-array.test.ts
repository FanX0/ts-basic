describe("Tipe Data Array", () => {
    it ("should must declared", () => {

        const names: Array<string> = ["farid", "ahmad", "nina"];
        const values: Array<number> = [1, 2, 3];

        console.info(names);
        console.info(values);

        // Readonly Array
        const hobbies: ReadonlyArray<string> = ["coding", "reading", "traveling"];
        console.info(hobbies);

        // Tuple
        const person: readonly [string, string, number] = ["Farid", "Ahmad", 30];
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);

    })
})