var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll(".paciente");


for (var i = 0; i < paciente.length; i++) {
    var peso = paciente[i].querySelector(".info-peso").textContent;
    var altura = paciente[i].querySelector(".info-altura").textContent;
    var tdImc = paciente[i].querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if (peso < 0 || peso >= 1000) {
        console.log("Peso inválido");
        pesoValido = false;
        tdImc.textContent = "peso inválido";
        paciente[i].classList.add("paciente-invalido");
    }
    if (altura < 0 || altura >= 3.00) {
        console.log("Altura inválida");
        alturaValida = false;
        paciente[i].classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
        
    }
}

function calculaImc(peso, altura) {

    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}






