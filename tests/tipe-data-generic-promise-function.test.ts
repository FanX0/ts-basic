describe('promise function', () => {
    it('should handle promise resolution and rejection', async () => {
        async function fetchData(value: string): Promise<string> {
            return new Promise<string>((resolve, reject) => {
                setTimeout(() => {
                    if (value === 'Farid') {
                        resolve('Hello ' + value);
                    } else {
                        reject('Not Found');
                    }
                }, 1000);
            });
        }

        const result = await fetchData('Farid');
        console.info(result);
        expect(result).toBe('Hello Farid');

        try {
            await fetchData('Joko');
        } catch (e) {
            console.info(e);
            expect(e).toBe('Not Found');
        }
    });
});