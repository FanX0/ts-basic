export function sayHello(name: string = "Guest"): string {
    return `Hello ${name}`;
}

export function printHello(name: string): void {
    console.info(`Hello ${name}`);
}