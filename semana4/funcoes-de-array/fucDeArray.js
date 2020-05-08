//Descrevendo o objeto
let controlador = {
    valorReal: '',
    tipo: '' ,
    descricao: '',
} 

let array = []

//Capturando valores do HTML
function valoresDetalhado(){
    event.preventDefault()
    let valorRealImpresso = document.getElementById('valorReal').value
    let tipoImpresso = document.getElementById('tipo').value
    let descricaoImpresso = document.getElementById('descricao').value
    
    controlador.valorReal = valorRealImpresso
    controlador.tipo = tipoImpresso
    controlador.descricao = descricaoImpresso
  
    array.push(controlador)
    console.log(array)

    document.getElementById('impressaovalores').innerHTML += `<h1>${controlador.valorReal}</h1><br><h2>${controlador.tipo}</h2><br><b>${controlador.descricao}</b>`

}


const captadorDeFiltro = () =>{
    event.preventDefault()
    let tipoFiltro = document.getElementById("tipoFiltro").value
    let valorMinimo = +document.getElementById("minimo").value
    let valorMaximo = +document.getElementById("maximo").value
    
    let caixaDeFiltro = []

    if(valorMinimo == '' || valorMaximo == ''){
        alert('Necessário preenchimento')
    } else {
        let filtro = array.filter((index) =>{
            if(valorMinimo <= index.valorReal && valorMaximo >= index.valorReal && tipoFiltro === index.tipo){
            caixaDeFiltro.push(index)
            console.log(caixaDeFiltro)
            } else {
                alert('Valores não declarados!')
            }
        })
        console.log(filtro)
    }
    for (i = 0; i < caixaDeFiltro.length; i++){
        document.getElementById("impressaofiltros").innerHTML += `<div>
        <h2>${caixaDeFiltro[i].descricao}</h2>
        <p>${caixaDeFiltro[i].tipo}</p>
        <p>${caixaDeFiltro[i].valorReal}</p>
        </div>`
    }    

}

const limparFiltro = () =>{
    let limpaInput = document.getElementsByTagName ("input").value = ""
}

