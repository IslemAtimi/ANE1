var etudiant=[
    {
        nom:'atchi',
        prenom:'islem',
        age:27,
        printName:function(){
            console.log("je suis ",this.prenom)
        }
    },
    {
        nom:'ferhat',
        prenom:'ferhat',
        age:21,
        printName:function(){
            console.log("je suis ",this.nom)
        }
    },
    {
    nom:'yasmine',
    prenom:'yasmine',
    age:21,
    printName:function(){
        console.log("je suis ",this.nom)
    }
    }
]

console.log(etudiant)

etudiant.forEach(x=>{
    let agelocal=x.age
    let chaine='mon age est :'+agelocal
    console.log(chaine)
    
})

etudiant.forEach(x=>x.printName())


const NAME='ATCHI'
age= 20
console.log(`je suis ${NAME} et jai ${age} ans`)
