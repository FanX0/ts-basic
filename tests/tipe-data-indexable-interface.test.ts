
describe ("Indexable Interface", () => {
    it ("should must Indexable Interface Array", () => {

        interface StringArray {
            [index: number]: string;
        }

        const names: StringArray = ["Farid", "Azhari", "Nurcahyo"];

        console.info(names[0]);
        console.info(names[1]);
        console.info(names[2]);
    })

    it ("should must Indexable Interface Object", () => {

        interface StringDictionary {
            [key: string]: string;
        }

        const dictionary: StringDictionary = {
            name: "Farid",
            address: "Subang"
        };

        console.info(dictionary["name"]);
        console.info(dictionary["address"]);

    })
})