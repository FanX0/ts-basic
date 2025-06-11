describe("generic constraint", () => {
    it("should must generic constraint", () => {
        interface Employee {
            id: string;
            name: string;
        }

        interface Manager extends Employee {
            totalEmployee: number;
        }

        interface VP extends Manager {
            totalManager: number;
        }

        class EmployeeData<T extends Employee> {
            constructor(public employee: T) {}
        }

        const data1 = new EmployeeData<Employee>({
            id: "1",
            name: "Farid"
        })
        const data2 = new EmployeeData<Manager>({
            id: "2",
            name: "Joko",
            totalEmployee: 10
        })
        const data3 = new EmployeeData<VP>({
            id: "3",
            name: "Joko",
            totalEmployee: 100,
            totalManager: 10
        })

        // error
        // const data4 = new EmployeeData<string>("Farid");
        // const data5 = new EmployeeData<number>(10);
    })
})

