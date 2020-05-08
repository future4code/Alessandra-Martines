//Descrevendo o objeto
let controlador = {
    valorReal: '',
    tipo: ['casa', 'viagem', 'rolê', 'outros'],
    descricao: '',
} 

//Capturando valores do HTML
function valoresDetalhado(){
    event.preventDefault()
    let valorRealImpresso = document.getElementById('valorReal').value
    let tipoImpresso = document.getElementById('tipo').value
    let descricaoImpresso = document.getElementById('descricao').value
    let array = []

    controlador.valorReal = valorRealImpresso
    controlador.tipo = tipoImpresso
    controlador.descricao = descricaoImpresso
  
    array.push(controlador)
    console.log(array)

    document.getElementById('impressaovalores').innerHTML += `<h1>${controlador.valorReal}</h1><br><h2>${controlador.tipo}</h2><br><b>${controlador.descricao}</b>`
}

