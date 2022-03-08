"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDatails() {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    logCharDetails() {
        console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}`);
    }
}
const will = new UserAccount("Willian", 30);
console.log(will);
console.log(will.age);
will.logDatails();
const john = new CharAccount("John", 45, "johnmaster", 80);
console.log(john);
john.logDatails();
john.logCharDetails();
console.log(john.level);
const wendell = new CharAccount("Wendell", 28, "Farrapito", 100);
console.log(wendell);
wendell.logDatails();
wendell.logCharDetails();
console.log(wendell.level);
