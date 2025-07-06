function Person(name, age ){
    this.name = name;
    this.age  = age;
}

Person.prototype.talk = function(){
    console.log(`My name is : ${this.name}`);
};

let p1 = new Person( "Si", 20);