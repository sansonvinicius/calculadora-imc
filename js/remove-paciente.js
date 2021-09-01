//Seleciona a tabela para remover o paciente
var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function(event) {

    //faz o efeito de fadeout antes de excluir a linha
    event.target.parentNode.classList.add("fadeOut");

    //função para timeout antes de excluir a linha
    setTimeout(function() {
        //verifica quem foi clicado (target) e remove o pai (parentNode), apenas os TDs
        if (event.target.tagName == 'TD') {
            event.target.parentNode.remove();
        } 
    }, 500)
  
});