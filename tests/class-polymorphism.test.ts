describe('class-polymorphism', () => {
    it('should must class-polymorphism', () => {
        class Person {
            constructor(public name: string = "") {
            }
        }

        const person = new Person();
        person.name = "Farid";
        console.info(person);

        class Employee {
            constructor(public name: string) {
            }
        }

        class Manager extends Employee {
        }

        class VicePresident extends Manager {
        }

        let employee: Employee = new Employee('Farid');
        console.info(employee);

        employee = new Manager('Asep');
        console.info(employee);

        employee = new VicePresident('Joko');
        console.info(employee);

    })
})