class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const will = new UserAccount("Willian", 30);
console.log(will);