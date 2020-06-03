var ul = document.querySelector('#app ul');
var txtNome = document.querySelector('#app input');
var btnSalvar = document.querySelector('#app button');

var lista = []

btnSalvar.onclick = function () {
    var texto = txtNome.value;
    lista.push(texto);
    txtNome.value = '';
    MostraLista();
    SalvarListaStorage();
}

function MostraLista(){
    ul.innerHTML = '';

    for (item of lista){
        var li = document.createElement('li');
        var textoLi = document.createTextNode(item);
        var linkExluir = document.createElement('a');
        linkExluir.setAttribute('href','#');

        // pega posicao do item na lista:
        var pos = lista.indexOf(item);
        // setando onclick no item com posicao/indice pego anteriormente:
        linkExluir.setAttribute('onclick', 'DeleteItem('+ pos + ')');

        var textoLink = document.createTextNode('Excluir');        
        linkExluir.appendChild(textoLink);
        var separador = document.createTextNode(' | ');
        li.appendChild(textoLi);
        li.appendChild(separador);
        li.appendChild(linkExluir);
        ul.appendChild(li);
    }
}

function DeleteItem(pos){
    lista.splice(pos, 1);
    MostraLista();
    SalvarListaStorage();
}

function SalvarListaStorage(){

    localStorage.setItem('lista', JSON.stringify(lista));
}



