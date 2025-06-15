describe ('class property', () => {
    it ('should must class property', () => {
        class Customer {
            firstName: string;
            lastName: string;
            balance: number = 0;

            constructor(firstName: string = "", lastName: string = "") {
                this.firstName = firstName;
                this.lastName = lastName;
            }

            sayHello(): void {
                console.log(`Hello ${this.firstName} ${this.lastName} ${this.balance}`);
            }
        }

        // Contoh penggunaan:
        const customer = new Customer(); // Tanpa argumen tetap valid karena ada default ""
        customer.sayHello();

        const customer2 = new Customer("farid","azhari");
        customer2.sayHello();
    })
})