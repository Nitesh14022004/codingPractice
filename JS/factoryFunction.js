function PersonCreator(name , age){
    const person = {
    name : "Nitesh",
    age : 21,
    talk(){
        console.log(`Hi my name is ${this.name}`);
    },
};
return person;
}

let p1 = PersonCreator("si",20);//console
p1 //console
p1.talk(); //console