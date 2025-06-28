let student ={
    name:"Nitesh",
    age:21,
    eng:97,
    math:99,
    hindi:98,
    
    get avg(){
        let avg=(this.eng+ this.math + this.hindi)/3
        console.log(`${this.name} got avg marks = ${avg}`)
    }
}

