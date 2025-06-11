describe('Tipe Data Generic set', () => {
    it('should must Generic set', () => {
        const set = new Set<string>();
        set.add('Farid');
        set.add('Joko');

        console.info(set)
        expect(set.size).toBe(2);
        expect(set.has("Farid")).toBe(true);
        expect(set.has("Joko")).toBe(true);
    })
})