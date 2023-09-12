let punto4 = document.querySelector("#punto4")

class Figura {
    constructor() {

    }
    calcularArea() {

    } 
}
class Circulo extends Figura {
    constructor (radio){
        super()
        this.radio = radio

    }
    calcularArea(){
    let areac = Math.PI * Math.pow(this.radio, 2)
    return areac.toFixed(2)
}  
}
class Rectangulo extends Figura {
    constructor (Largo , Ancho){
        super ()
        this.Largo = Largo
        this.Ancho = Ancho 
    }
    calcularArea(){
        return this.Largo * this.Ancho
    }
}
let Circulot = new Circulo (2)
let areas = new Rectangulo (9,8)
punto4.innerHTML +=`
<ul class="list-group list-group-flush">
<li class="list-group-item cosas">El area del circulo es ${Circulot.calcularArea()} 
<li class="list-group-item cosas">La area del Rectangulo es ${areas.calcularArea()}
</ul>
`
