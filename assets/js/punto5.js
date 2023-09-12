let punto5 = document.querySelector("#punto5")

class Direccion {
    constructor (calle , ciudad , codigoPostal){
        this.calle = calle
        this.ciudad = ciudad
        this.codigoPostal = codigoPostal
    }
}
class Persona75 {
    constructor (Nombre , Edad){
        this.Nombre = Nombre
        this.Edad = Edad
    }
}

let direcc57 = new Direccion ("Pajaritos", "Bogota" , 11011)
let persona57 = new Persona75 ("Javier", 20)
punto5.innerHTML += `
<div class="card" style="width: 18rem;">
<ul class="list-group list-group-flush">
<li class="list-group-item cosas">${persona57.Nombre} de ${persona57.Edad} años esta ubicado en ${direcc57.ciudad} en la calle ${direcc57.calle}</li>
`