// selecionando tags e as atribuindo a variáveis:
var elementTitle = document.querySelector('title')
    .appendChild(document.createTextNode('FeraJS'));
var elementApp = document.querySelector('body #App');


// Criando elementos/tags e adicionando atributos a elas:
var elementTxtProcesso = document.createElement('input');
elementTxtProcesso.setAttribute('type','text');
elementTxtProcesso.setAttribute('id','processo');
elementTxtProcesso.setAttribute('class','form-control txt');
elementTxtProcesso.setAttribute('placeholder','Clique aqui, depois clique fora');
elementApp.appendChild(elementTxtProcesso);

// <br>
elementApp.appendChild(document.createElement('br'));

var elementSelectComarca = document.createElement('select');
elementSelectComarca.setAttribute('id','comarca');
elementSelectComarca.setAttribute('class','form-control txt');
elementApp.appendChild(elementSelectComarca);


// <br>
elementApp.appendChild(document.createElement('br'));

var elementSelectComarca2 = document.createElement('select');
elementSelectComarca2.setAttribute('id','comarca2');
elementSelectComarca2.setAttribute('class','form-control txt');
elementApp.appendChild(elementSelectComarca2);


// popula select com dados json (data):
elementTxtProcesso.onblur = function() {          
    LimpaSelect();
    var elementOption = document.createElement('option');
    elementOption.value = '0';
    elementOption.text = 'Selecione...'
    elementSelectComarca.appendChild(elementOption);
    // populando a partir de uma lista de  OBJETO json:
    for (var i = 0; i < data.length; i++){
        var processo = data[i];
        var elementOption = document.createElement('option');
        elementOption.value = processo.id;
        elementOption.text = processo.nome;
        elementSelectComarca.appendChild(elementOption);
    }

    LimpaSelect2();
    var elementOption = document.createElement('option');
    elementOption.value = '0';
    elementOption.text = 'Selecione...'
    elementSelectComarca2.appendChild(elementOption);
    // populando a partir de uma lista de  STRING json:
    for (var i = 0; i < data2.length; i++){
        var processo = data2[i];
        var elementOption = document.createElement('option');
        elementOption.value = processo;
        elementOption.text = processo;
        elementSelectComarca2.appendChild(elementOption);
    }
}

// Remover options de uma tag <select>
function LimpaSelect(){    
    for (i = elementSelectComarca.length - 1; i >= 0; i--) {
        elementSelectComarca.remove(i);
    }
}
function LimpaSelect2(){    
    for (i = elementSelectComarca2.length - 1; i >= 0; i--) {
        elementSelectComarca2.remove(i);
    }
}


// lista de OBJETO simulando retorno json do backend:
var data = [
    {id:101, nome:'comarca01'},
    {id:102, nome:'comarca02'},
    {id:103, nome:'comarca03'}
]
console.log(data);

// lista de STRING simulando retorno json do backend:
var data2 = [
   'comarca01',
   'comarca02',
   'comarca03'
]
console.log(data2);


// style
var elementTxt = document.querySelector('.txt');
elementTxt.style.width = '20em';