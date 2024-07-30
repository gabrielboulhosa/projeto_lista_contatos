const form = document.getElementById('form_lista');
const img = '<img src="./images/caderno.png" alt="emoji de agenda">'
const nome = [];
const tel = [];
let listas = [];

form.addEventListener('submit', function (event) {
    event.preventDefault()

    enviarTabela()
})

function enviarTabela() {
    const inputNome = document.getElementById('input_nome');
    const inputTel = document.getElementById('input_telefone')


    if (nome.includes(inputNome.value) && tel.includes(parseFloat(inputTel.value))) {
        alert('Esse contato já existe na lista')
    } else {

        nome.push(inputNome.value);
        tel.push(parseFloat(inputTel.value));


         let lista = '<tr>'
    lista += `<td>${inputNome.value}</td>`
    lista += `<td>${inputTel.value}</td>`
    lista += `<td>${img}</td>`
    lista += '</tr>'


    listas += lista

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = listas

    }



    
}