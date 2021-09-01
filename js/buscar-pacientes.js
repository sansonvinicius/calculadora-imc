
var botaoAdicionar = document.querySelector("#buscar-pacientes");
//Verifica quando o botão foi clicado
botaoAdicionar.addEventListener("click", function() {
    //Requisição para a API
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    //Carrega os resultados trazidos
    xhr.addEventListener("load", function() {

        //Caso a requisição retorne com erro aparecerá uma mensagem na tela 
        var erroAjax = document.querySelector("#erro-ajax");

        //Verifica se a requisição teve erro
        if (xhr.status == 200) {
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        //Percorre o array de pacientes para adicionar novos na tabela
        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });}else{
            //Caso ocorra o erro mostra a mensagem de erro
            erroAjax.classList.remove("invisivel");
        }
    });
    xhr.send();


});