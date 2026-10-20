/*const botaoteste = document.getElementById("teste")


botaoteste.addEventListener("click", () => {
alert("funciona!")


})

funciona ideia do botao deixar transparente
*/
const telaInicial = document.getElementById("telaInicial")
const botaoStart = document.getElementById("botaoStart")

botaoStart.addEventListener("click", () => {
telaInicial.classList.add("ocultar")
})