describe('Tipe Data Generic Array', () => {
    it('should must Generic Array', () => {
        const array = new Array<string>();
        array.push('Farid');
        array.push('Joko');

        console.info(array);
        expect(array).toEqual(['Farid', 'Joko']);
    })
})