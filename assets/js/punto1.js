let punto1 = document.querySelector("#punto1")
class Persona {
    constructor(Nombre, Edad, Profesion) {
        this.Nombre = Nombre
        this.Edad = Edad
        this.Profesion = Profesion
    }
}
let persona1 = new Persona("Pablo", 28, "Profesor");
let persona2 = new Persona("Juana", 20, "Cajera");
punto1.innerHTML += `
<div class="card" style="width: 18rem;">
<ul class="list-group list-group-flush">
  <li class="list-group-item cosas">${persona1.Nombre}</li>
  <li class="list-group-item cosas">${persona1.Edad}</li>
  <li class="list-group-item cosas">${persona1.Profesion}</li>
</ul>
<ul class="list-group list-group-flush">
<li class="list-group-item cosas">${persona2.Nombre}</li>
<li class="list-group-item cosas">${persona2.Edad}</li>
<li class="list-group-item cosas">${persona2.Profesion}</li>
</ul>
</div>
    `