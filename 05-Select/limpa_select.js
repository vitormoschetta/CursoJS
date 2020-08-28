function AtualizaMunicipios(inputValue) {

    var url = '@Url.Action("CarregaMunicipios","Enquete")';                  
    $.get(url, { nome_cre:inputValue }, function (data)
    {            
        LimpaSelect("Municipio");

        var elSelect = document.getElementById('Municipio');

        for (var i = 0; i < data.length; i++) {
            var elOption = document.createElement('option');
            elOption.setAttribute('value', data[i].municipio);
            elOption.text = data[i].municipio;
            elSelect.appendChild(elOption);                
        }
    })
    .fail(function() {
        alert("Informações não encontradas...");
    }); 
}   


function LimpaSelect(selectId) {
    var select = document.getElementById(selectId);
    var length = select.options.length;
    for (i = length-1; i >= 0; i--) {
        select.options[i] = null;
    }
}
