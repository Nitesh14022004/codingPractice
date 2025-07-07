class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`My name is ${this.name}`)
    };
};

let p1 = new Person("Nitesh", 21);