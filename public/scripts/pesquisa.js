var tabela = document.getElementById("contact__table");
var linhas = tabela.getElementsByTagName("tr");

for (var i = 0; i < linhas.length; i++) {
    var linha = linhas[i];
    linha.addEventListener("click", function () {
        selLinha(this);
    });
}


function selLinha(linha) {
    var linhas = linha.parentElement.getElementsByTagName("tr");
    for (var i = 0; i < linhas.length; i++) {
        var linha_ = linhas[i];
        linha_.classList.remove("selecionado");
    }
    linha.classList.toggle("selecionado");
}



var btnExcluir = document.getElementById("btnexcluir");


btnExcluir.addEventListener("click", function () {
    var selecionados = tabela.getElementsByClassName("selecionado");

    if (selecionados.length < 1) {
        alert("Por gentileza, selecione algum contato para excluir.");
        return false;
    } else {

        var dados = "";
        var selecionado = selecionados[0];
        selecionado = selecionado.getElementsByTagName("td");

        var http = new XMLHttpRequest();
        http.open('POST', '/delete');
        http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        http.onreadystatechange = function () {
            if (http.readyState === XMLHttpRequest.DONE && (http.status === 201 || http.status === 200)) {
                var http_post_response = JSON.parse(http.responseText);
       
                if (http_post_response.result == 'redirect'){
                    window.location.replace(http_post_response.url);
                }
                
            } else if (http.readyState === XMLHttpRequest.DONE && !(http.status === 201 || http.status === 200)) {
                console.log('Erro ao enviar requisição de exclusão. '+ 'codigo de erro: ' + http.status);
            }

        };
        var data = 'contactID=' + selecionado[0].innerHTML;
        http.send(data);
    }
});