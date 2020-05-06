const meuInput = document.getElementById("meu-input")
const minhaLista = document.getElementsByTagName("ul")[0]

function adicionarItem(){
    let item = meuInput.value
    minhaLista.innerHTML += `<li>${item}</li>`
    meuInput.value = ""
}

