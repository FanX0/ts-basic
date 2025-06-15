describe('Tipe Data Generic Map', () => {
    it('should must Generic Map', () => {
        const map = new Map<string, number>();
        map.set('Farid', 123);
        map.set('Joko', 456);

        console.info(map);
        expect(map.get('Farid')).toBe(123);
        expect(map.get('Joko')).toBe(456);
    });
})