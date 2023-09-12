let punto3 = document.querySelector("#punto3")

class CuentaBancaria {
    constructor(saldo) {
        this.saldo = saldo
    }
    depositar(NumDepositado) {
        return this.saldo += NumDepositado
    }
    retirar(Numretirado) {
        let retiro = this.saldo -= Numretirado
        if (retiro < 0) {
            return "Papi no tiene plata, quite de acá "
        } else return retiro
        
    }
}
let CuentaUsuario = new CuentaBancaria(saldo = 20000)

punto3.innerHTML += `
<div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
    <li class="list-group-item cosas">Su saldo = ${CuentaUsuario.saldo}</li>
    <li class="list-group-item cosas"> Retiros valor = 5000</li>
    <li class="list-group-item cosas">Su saldo = ${CuentaUsuario.retirar(5000)}</li>
    <li class="list-group-item cosas"> Depositos Valor = 5000</li>
    <li class="list-group-item cosas">Su saldo = ${CuentaUsuario.depositar(5000)}</li>
    </ul> 
    `