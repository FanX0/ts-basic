describe("Tipe Data Undefined, Null", () => {
    it ("should must Undefined, Null", () => {

        function sayHello(name?: string | null) {
            if (name) {
                console.info(`Hello ${name}`);
            } else {
                console.info("Hello");
            }
        }
        sayHello("Farid");
        const name: string | undefined = undefined;
        sayHello(name);
        sayHello(null);
    })

})