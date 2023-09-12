let punto2 = document.querySelector("#punto2")
class Vehículo {
    constructor(Marca, Modelo) {
        this.Marca = Marca;
        this.Modelo = Modelo;
    }
    arrancar() {
        return "estoy arrancando"
    }
    detener() {
        return "estoy deteniendo"

    }
}

class Coche extends Vehículo {
    constructor(Marca, Modelo, torque) {
        super(Marca , Modelo)
        this.torque = torque
    }
    acelerar() {
        return "estoy acelerando"
    }
}

let Carrito = new Coche("Nissan", "carritolindo", "buentorque")
let Carrogrande = new Coche("Duster", 2017, 270)
punto2.innerHTML += `
<div class="card" style="width: 18rem;">
<ul class="list-group list-group-flush">
  <li class="list-group-item cosas">El carrito de Marca ${Carrito.Marca} Modelo ${Carrito.Modelo}, tiene un torque de ${Carrito.torque} y ahora mismo ${Carrito.acelerar()}</li>
  <li class="list-group-item cosas">La Camioneta de Marca ${Carrogrande.Marca} Modelo ${Carrogrande.Modelo}, tiene un torque de ${Carrogrande.torque} y ahora mismo ${Carrogrande.acelerar()} y tambien puede ${Carrogrande.detener()}</li>
    `
