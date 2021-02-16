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

var thdealgumlucar = document.querySelectorAll('TD')[1];
console.log(thdealgumlucar.textContent);

btnExcluir.addEventListener("click", function () {
    var selecionados = tabela.getElementsByClassName("selecionado");

    if (selecionados.length < 1) {
        alert("Por gentileza, selecione algum contato para excluir.");
        return false;
    }

    var dados = "";

    for (var i = 0; i < selecionados.length; i++) {
        var selecionado = selecionados[i];
        selecionado = selecionado.getElementsByTagName("td");
        dados += "ID: " + selecionado[0].innerHTML + " - Nome: " + selecionado[1].innerHTML + " - Idade: " + selecionado[2].innerHTML + " - Telefone: " + selecionado[3].innerHTML + "\n";
    }

    alert(dados);
});