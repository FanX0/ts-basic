import { Category, Product } from "../src/tipe-data-alias-opotional";

describe("Tipe Data Variable", () => {
    it ("should must declared", () => {

        const category: Category = {
            id: "1",
            name: "Handphone"
        };
        const product: Product = {
            id: "1",
            name: "Samsung S20",
            price: 20000000,
            category: category
        };
        console.info(category);
        console.info(product);

    })
})

