describe("Tipe Data Union", () => {
    it ("should must union", () => {

        let sample: number | string | boolean = "Farid";
        sample = 100;
        sample = true;

        console.info(sample);

    })

    it ("should must typeof operator", () => {
        function process(value: number | string | boolean) {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value + 2;
            } else {
                return !value;
            }
        }

        expect(process(100)).toBe(102);
        expect(process("Farid")).toBe("FARID");
        expect(process(true)).toBe(false);
    })
})