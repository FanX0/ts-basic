import { Employee, Manager } from "../src/tipe-data-extends-interface";

describe ("Extends Interface", () => {
    it ("should must Extends", () => {

        const employee: Employee = {
            id: "1",
            name: "Eko",
            division: "IT"
        };

        const manager: Manager = {
            id: "2",
            name: "Kurniawan",
            division: "IT",
            numberOfEmployees: 10
        };

        console.info(employee);
        console.info(manager);
    })
})