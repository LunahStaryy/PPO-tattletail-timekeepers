const telaInicial = document.getElementById("telaInicial")

const botoesNext = document.querySelectorAll(".btNext")
const botaoStart = document.getElementById("botaoStart")
const botaoEsc1 = document.getElementById("btnEsc1")

const cena1 = document.getElementById("cena1")
const cena2 = document.getElementById("cena2")
const cena3 = document.getElementById("cena3")
const cena4 = document.getElementById("cena4")
const cena5 = document.getElementById("cena5")
const cena6 = document.getElementById("cena6")
const cena7 = document.getElementById("cena7")

const texto1 = document.querySelectorAll(".C1")
const texto2 = document.querySelectorAll(".C2")
const texto3 = document.querySelectorAll(".C3")
const texto4 = document.querySelectorAll(".C4")
const texto5 = document.querySelectorAll(".C5")
const texto6 = document.querySelectorAll(".C6")
const texto7 = document.querySelectorAll(".C7")

const dia1 = document.getElementById("dia1")

texto1.forEach(texto => {
    texto.style.display = 'none'
})
texto2.forEach(texto => {
    texto.style.display = 'none'
})
texto3.forEach(texto => {
    texto.style.display = 'none'
})
texto4.forEach(texto => {
    texto.style.display = 'none'
})
texto5.forEach(texto => {
    texto.style.display = 'none'
})
texto6.forEach(texto => {
    texto.style.display = 'none'
})
texto7.forEach(texto => {
    texto.style.display = 'none'
})

let indiceCena1 = 0
let indiceCena2 = 0
let indiceCena3 = 0
let indiceCena4 = 0
let indiceCena5 = 0
let indiceCena6 = 0
let indiceCena7 = 0

botaoStart.addEventListener("click", () => {
    telaInicial.style.display = 'none'
    cena1.style.display = 'block'
})

texto1[0].style.display = 'block';

botoesNext[0].addEventListener("click", () => {

    texto1[indiceCena1].style.display = 'none';

    indiceCena1++;

    if (indiceCena1 < texto1.length) {
        texto1[indiceCena1].style.display = 'block';
    }

    else {
        dia1.style.display = 'none'
        botoesNext[0].style.display = 'none'
        bt1.style.display = 'block'
    }
})