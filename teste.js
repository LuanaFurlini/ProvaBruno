var NomeAlunos = [];
function Nomes() {
    var input = document.querySelector('#nome');
    if (input.value !== "") {
        var lista = document.querySelector('ul');
        var li = document.createElement('li');
        var card = document.createElement('article');
        var texto = document.createTextNode(input.value);
        li.appendChild(card);
        card.appendChild(texto);
        lista.appendChild(li);
        NomeAlunos.push(input.value);
    }
    input.value = "";
    console.log(NomeAlunos);
}
