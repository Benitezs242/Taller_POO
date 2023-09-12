let divPiano = document.querySelector("#Piano2")
let aNotas = []
let contador = ""
let lasnotas = [
    {id: 1 , nota: "/assets/Notas/nota1.mp3" },
    {id: 2 , nota: "/assets/Notas/nota2.mp3" },
    {id: 3 , nota: "/assets/Notas/nota3.mp3" },
    {id: 4 , nota: "/assets/Notas/nota4.mp3" },
    {id: 5 , nota: "/assets/Notas/nota5.mp3" },
    {id: 6 , nota: "/assets/Notas/nota6.mp3" },
    {id: 7 , nota: "/assets/Notas/nota7.mp3" },
    {id: 8 , nota: "/assets/Notas/nota8.mp3" },
]

class TeclaPiano2 {
    constructor(Notas) {
        this.Notas = Notas
    }
    toca() {
        let audio = new Audio(this.Notas)
        audio.play()
    }
}
let notas = new TeclaPiano2(aNotas)
lasnotas.forEach((e) => {
    aNotas = e.nota
    contador = e.id
    divPiano.innerHTML += `
    <button id="tecla" class="aud acorde" onclick="notasarray('${aNotas}')"></button>
    `
})
function notasarray (aNotas){
let nota2 = new TeclaPiano(aNotas)
    nota2.toca()
}