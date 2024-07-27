//creation dun tableau T1 de type number
//cree une fonction qui prendre en entrer un elemnt a ajouter
//cree une fonction supprimer un elemnt en entrer
//filteriw le tableu quiva contient des elemnt superiere a 100
//copier le tableu T1 vers T2
//afficher les elemnt du rtableau T2 enchaine avec une chaine de cerectere 'je suis ...'


var T=[1,5,7,8,9,10,88,78,956,234,621,59,11,0]

function addToTable(x){
    T.push(x)
}

console.log(T)

function deleteFromTable(y){
    var index=T.findIndex(x=>x==y)
    if(index==-1){
        console.log("lelmemnt nexiste pas")
    }
    else{
        console.log('lendex de lelemnt est ',index)
        T.splice(index,1)
    }
    
}


addToTable(6)

console.log(T)

deleteFromTable(9)
console.log(T)

var T2=T.filter(x=>x>100)
console.log(T2)

var table2=[...T]
table2.forEach(el=>console.log('je suis lelemnt :',el))
