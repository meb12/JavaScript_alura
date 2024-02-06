var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll(".paciente");

for (var i = 0; i < paciente.length; i++) {
  var peso = paciente[i].querySelector(".info-peso").textContent;
  var altura = paciente[i].querySelector(".info-altura").textContent;
  var tdImc = paciente[i].querySelector(".info-imc");

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if (!pesoValido) {
    console.log("Peso inválido");
    pesoValido = false;
    tdImc.textContent = "peso inválido";
    paciente[i].classList.add("paciente-invalido");
  }
  if (!alturaValida) {
    console.log("Altura inválida");
    alturaValida = false;
    tdImc.textContent = " altura inválida";
    paciente[i].classList.add("paciente-invalido");
  }

  if (pesoValido && alturaValida) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}

function validaPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}
