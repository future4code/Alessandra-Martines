//Descrevendo o objeto
let post = {
    nome: '',
    email: '',
    nicho: '',
    mensagem: '',
} 

//Capturando valores do HTML
function valoresPost(){
    event.preventDefault()
    let nomeImpresso = document.getElementById('nome').value
    let emailImpresso = document.getElementById('email').value
    let nichoImpresso = document.getElementById('nicho').value
    let mensagemImpresso = document.getElementById('mensagem').value
    let array = []

    post.nome = nomeImpresso
    post.email = emailImpresso
    post.nicho = nichoImpresso
    post.mensagem = mensagemImpresso

    array.push(post)
    console.log(array)

    document.getElementById('impressaovalores').innerHTML += `<h1>${post.nome}</h1><br><h2>${post.email}</h2><br><b>${post.nicho}</b><br><i>${post.mensagem}</i>`
}