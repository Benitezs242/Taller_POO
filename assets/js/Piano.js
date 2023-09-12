class TeclaPiano {
    constructor(Notas) {
        this.Notas = Notas
    }
    toca() {
        let audio = new Audio(this.Notas)
        audio.play()
    }
}

let nota1 = new TeclaPiano("assets/Notas/nota1.mp3")
let tecla1 = document.querySelector(`#tecla1`)
tecla1.addEventListener('click', () => {
    console.log(nota1.toca())
})

let nota2 = new TeclaPiano("assets/Notas/nota2.mp3")
let tecla2 = document.querySelector(`#tecla2`)
tecla2.addEventListener('click', () => {
    console.log(nota2.toca())
})

let nota3 = new TeclaPiano("assets/Notas/nota3.mp3")
let tecla3 = document.querySelector(`#tecla3`)
tecla3.addEventListener('click', () => {
    console.log(nota3.toca())
})

let nota4 = new TeclaPiano("assets/Notas/nota4.mp3")
let tecla4 = document.querySelector(`#tecla4`)
tecla4.addEventListener('click', () => {
    console.log(nota4.toca())
})

let nota5 = new TeclaPiano("assets/Notas/nota5.mp3")
let tecla5 = document.querySelector(`#tecla5`)
tecla5.addEventListener('click', () => {
    console.log(nota5.toca())
})

let nota6 = new TeclaPiano("assets/Notas/nota6.mp3")
let tecla6 = document.querySelector(`#tecla6`)
tecla6.addEventListener('click', () => {
    console.log(nota6.toca())
})

let nota7 = new TeclaPiano("assets/Notas/nota7.mp3")
let tecla7 = document.querySelector(`#tecla7`)
tecla7.addEventListener('click', () => {
    console.log(nota7.toca())
})

let nota8 = new TeclaPiano("assets/Notas/nota2.mp3")
let tecla8 = document.querySelector(`#tecla8`)
tecla8.addEventListener('click', () => {
    console.log(nota8.toca())
})