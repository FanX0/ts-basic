import {CustomerType,Customer} from "../src/tipe-data-enum";

describe ("Enum", () => {
    it ("should must enum", () => {

        const customer: Customer = {
            id: 1,
            name: "Farid",
            type: CustomerType.GOLD
        };

        console.info(customer);
    })
})