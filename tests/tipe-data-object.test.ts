describe("Tipe Data Object Type", () => {
    it ("should must Object", () => {

        const person: { id: string, name: string } = {
            id: "1",
            name: "Farid"
        };
        console.info(person);

        person.id = "2";
        person.name = "Joko";

        console.info(person);

    })

    it ("should must optional object", () => {
        const person: { id: string, name: string, hobbies?: string[] } = {
            id: "1",
            name: "Farid"
        };

        console.info(person);

        person.id = "2";
        person.name = "Joko";

        console.info(person);
    })
})