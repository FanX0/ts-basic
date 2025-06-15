describe('class constructor', () => {
    it('should must class constructor', () => {
        class Customer {
            constructor() {
                console.log("Hello");
            }
        }
        class Order {
        }

        const customer: Customer = new Customer();
        const order: Order = new Order();
    })
})