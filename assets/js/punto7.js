let punto7 = document.querySelector("#punto7")

class Animal {
    constructor(){
    }
    Hablar(){
    }
}
class Perro {
    constructor (){
    }
Hablar() {
    return   "Asi hace un perro" 
}

}
class gato {
    constructor () {

    }
    Hablar() {
    return "Asi hace un gato" 
}
}

let perrito = new Perro ()
let gatito = new gato ()

let Perris = document.querySelector("#Perro")
Perris.addEventListener ('click' , (e) => {
    alert(perrito.Hablar())
})
let gatis = document.querySelector("#Gato")
gatis.addEventListener ('click' , (e) => {
    alert(gatito.Hablar())
})


