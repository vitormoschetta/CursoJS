
var elProcesso = document.querySelector('#processo');
var elSelect = document.querySelector('#comarca');

elProcesso.onblur = function() {
    LimpaSelect();
    for (var i = 0; i < data.length; i++){
        var elOption = document.createElement('option');
        elOption.value = data[i].id;
        elOption.text = data[i].nome;
        elSelect.appendChild(elOption);
    }
}

// Remove itens (menos item 0 - texto 'Selecione...'):
function LimpaSelect() {                
    for (var i = elSelect.length; i > 0; i--){
        elSelect.remove(i);
    }                
}

// lista de OBJETO simulando retorno json do backend:
var data = [
    {id:101, nome:'comarca01'},
    {id:102, nome:'comarca02'},
    {id:103, nome:'comarca03'}
]
console.log(data);