class Person{
    Name
    Prenom
    Age
    constructor(name,prenom,age){
        this.Name=name
        this.Prenom=prenom
        this.Age=age
    }
    sayHello(){
        console.log("hello world")
    }

    printAge(){
        let chaine=`je suis ${this.Name} et jai ${this.Age} ans`
        console.log(chaine)
    }

}

var islem=new Person("islem","atchi",27)
islem.printAge()

var prenom=islem.Prenom
console.log(islem)
islem.Age=28
console.log(islem)


delete islem.Prenom
console.log(islem)


console.log('age' in islem)
let localobj={
    filiere:"info",
    specialite:"Full Stack"
}
var newObj={...islem,...localobj}
console.log(newObj)

console.log(Object.entries(newObj))