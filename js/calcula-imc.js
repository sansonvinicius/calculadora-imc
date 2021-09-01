
var titulo = document.querySelector(".titulo");
titulo.textContent = "Sanson Nutrição";

var nome_pagina = document.querySelector("title");	
nome_pagina.textContent = "Sanson Nutrição"; 

//Busca todos os pacientes para fazer os cálculos
var pacientes = document.querySelectorAll(".paciente");

//loop para realizar os cálculos para todos os pacientes
for(var i = 0; i < pacientes.length; i++){

    //verifica o paciente em cada posição do array
    var paciente = pacientes[i];

    //calcular o peso
    var td_peso = paciente.querySelector(".info-peso");
    var peso = td_peso.textContent;

    //calcular a altura
    var td_altura = paciente.querySelector(".info-altura");
    var altura = td_altura.textContent;

    //calcular o imc
    var td_imc = paciente.querySelector(".info-imc");


    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    //validação do peso
    if (!pesoValido){
        console.log('Peso inválido');
        validarPeso = false;
        td_imc.textContent = 'Peso Inválido'
        //Altera o background-color caso o peso seja inválido
        paciente.classList.add("paciente-invalido");

    }

    //validação da altura
    if (!alturaValida){
        console.log('Altura inválida');
        validarAltura = false;
        td_imc.textContent = 'Altura Inválida'
        //Altera o background-color caso a altura seja inválida
        paciente.classList.add("paciente-invalido");

    }
    //validação do imc
    if (pesoValido && alturaValida){
        var imc = calculaImc(peso, altura);
        td_imc.textContent = imc;
    }
}

//função para calcular imc
function calculaImc(peso, altura){
    var imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}


//função para validar peso
function validaPeso(peso) {
    if (peso > 0 && peso < 400) {
        return true;
    } else {
        return false;
    }
}
//função para validar altura
function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}