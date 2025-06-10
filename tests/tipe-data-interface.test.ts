import {Seller} from "../src/tipe-data-interface"

describe("Interface", () => {
    it ("should must Interface", () => {

    const seller: Seller = {
        id: 1,
        name: "Toko Farid",
    }
    console.info(seller);
    })

})