    //Adição de novo paciente para a tabrela 
    var botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener("click", function(event){
        event.preventDefault();

        //Extrai info do paciente do form 
        var form = document.querySelector("#form-adicionar")
        var paciente = obtemPacienteForm(form);

        //criar tr e td do novo paciente
        var pacienteTr = montaTr(paciente);

        //Exibir mensagens de erro ao cadastrar
        var erros = validaPaciente(paciente)

        if (erros.length > 0) {
            exibeMensagensDeErro(erros);
            return;
        }

        //inserindo tr do paciente na tabela
    
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);

        //limpa o form e a ul com as mensagens de erro
        form.reset();
        var mensagensErro = document.querySelector("#mensagens-erro");
        mensagensErro.innerHTML = "";
    });

    // Obter informações do paciente 
function obtemPacienteForm(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    //criando tr do novo paciente na tabela
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //inserindo tds na tr do novo paciente
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
        
    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td")
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

//função para validar dados do paciente
function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

//Cria li's para exibir as mensagens de erro
function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}