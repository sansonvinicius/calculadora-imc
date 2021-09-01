//buscar os nomes cadastrados na tabela 
var campoFiltro = document.querySelector("#filtrar-tabela");

//verifica o nome digitado na busca
campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");


    //se o campo não estiver vazio faz a busca
    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];            
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            //Use Expressão regular para compara o nome digitado com o valor no campo de busca
            //o "i" é que a busca não é case sensitive
            var expressao = new RegExp(this.value, "i");

            //Compara os valores e oculta os que não correposndem com a busca
            if (expressao.test(nome)) {
                paciente.classList.remove("invisivel");
            } else {
                paciente.classList.add("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});