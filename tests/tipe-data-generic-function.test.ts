describe("Tipe Data Generic", () => {
    it("should must Generic Function", () => {
        function create<T>(value: T): T {
            return value;
        }
            const result = create<string>('Hello');
            console.info(result);
            expect(result).toBe('Hello');

            const result2 = create<number>(42);
            console.info(result2);
            expect(result2).toBe(42);
    })
})