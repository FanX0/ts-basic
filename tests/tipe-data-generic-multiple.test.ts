describe ("Generic Multiple", () => {
    it ("should must Generic Multiple", () => {
        class Entry<K, V> {
            constructor(public key: K, public value: V) {}
        }

        class Triple<K, V, T> {
            constructor(
                public first: K,
                public second: V,
                public third: T
            ) {}
        }

        const entry = new Entry<number, string>(1, "value");
        console.info(entry);
        expect(entry.key).toBe(1);
        expect(entry.value).toBe("value");

        const triple = new Triple<number, string, boolean>(1, "value", true);
        console.info(triple);
        expect(triple.first).toBe(1);
        expect(triple.second).toBe("value");
        expect(triple.third).toBe(true);
    })
})