let punto6 = document.querySelector("#punto6")

let Nuevacuenta = new CuentaBancaria (saldo = 7000)
punto6.innerHTML += `
<div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
    <li class="list-group-item cosas">Su saldo = ${Nuevacuenta.saldo}</li>
    <li class="list-group-item cosas"> Retiros valor = 5000</li>
    <li class="list-group-item cosas">Su saldo = ${Nuevacuenta.retirar(6000)}</li>
    <li class="list-group-item cosas"> Intento de Retiros valor = 3000</li>
    <li class="list-group-item cosas">Su saldo = ${Nuevacuenta.retirar(6000)}</li>
    </ul>
    `