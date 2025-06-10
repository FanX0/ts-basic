import {Seller} from "../src/tipe-data-interface"

describe("Interface", () => {
    it ("should must Interface", () => {

    const seller: Seller = {
        id: 1,
        name: "Toko Farid",
        nib: "231412",
        npwp: "1234567890"
    }
    console.info(seller);
    })

})