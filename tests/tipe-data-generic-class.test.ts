describe("Tipe Data Generic", () => {
    it("should must Tanpa Generic", () => {
        class Data {
            value: any;

            constructor(value: any) {
                this.value = value;
            }
        }

        const data = new Data(123);
        console.info(data.value.toUpperCase());
    })

    it("should must Dengan Generic", () => {
        class GenericData<T> {
            value: T;

            constructor(value: T) {
                this.value = value;
            }
        }

        const dataNumber = new GenericData<number>(123);
        const dataString = new GenericData<string>('farid');

        console.info(dataNumber)
        console.info(dataString.value.toUpperCase())
    })
})