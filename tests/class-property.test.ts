describe ('class property', () => {
    it ('should must class property', () => {
        class Customer {
            readonly id: number;
            firstName: string;
            lastName: string;
            balance: number = 0;
            age?: number;

            constructor(id: number, firstName: string = "", lastName: string = "") {
                this.id = id;
                this.firstName = firstName;
                this.lastName = lastName;
            }

            sayHello(): void {
                console.log(`Hello ${this.id} ${this.firstName} ${this.lastName} ${this.balance}`);
            }
        }

        // Contoh penggunaan:
        const customer = new Customer(1); // Tanpa argumen tetap valid karena ada default ""
        customer.sayHello();

        const customer2 = new Customer(2,"azhari","nurcahyo");
        customer2.sayHello();
    })
})