export function sayHello(name: string, filter: (name: string) => string) {
    return `Hello ${filter(name)}`;
}

export function toUpper(name: string): string {
    return name.toUpperCase();
}