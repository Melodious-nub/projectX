interface User {
    name: string,
    age: number,
}

export class MyClass {

    user: User;

    addUser() {
        this.user.age = 12;
        this.user.name = 'Kashem'
    }
    
}