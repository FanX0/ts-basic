export interface AddFunction {
    (value1: number, value2: number): number;
}

export interface Person {
    name: string;
    sayHello(name: string): string;
}