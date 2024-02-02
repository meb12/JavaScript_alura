var botao = document.querySelector("#adicionar-paciente");


botao.addEventListener("click", mostraMensagem);

function mostraMensagem(event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemInformacao(form);
   

    var trPaciente = document.createElement("tr");
    var tdNome = document.createElement("td");
    var tdAltura = document.createElement("td");
    var tdPeso = document.createElement("td");
    var tdGordura = document.createElement("td");
    var tdImc = document.createElement("td");

    tdNome.textContent = nome;
    tdPeso.textContent = peso;
    tdAltura.textContent = altura;
    tdGordura.textContent = gordura;
    tdImc.textContent = calculaImc(peso,altura);


    trPaciente.appendChild(tdNome);
    trPaciente.appendChild(tdPeso);
    trPaciente.appendChild(tdAltura);
    trPaciente.appendChild(tdGordura);
    trPaciente.appendChild(tdImc);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(trPaciente);
}

function obtemInformacao (form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
return paciente;
}