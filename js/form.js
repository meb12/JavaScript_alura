var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", mostraMensagem);

function mostraMensagem(event) {
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");

  var paciente = obtemInformacao(form);

  var erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeMensagensDeErro(erros);

    return;
  }
  adionaPacienteNaTabela(paciente);
  form.reset();

  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
}
function obtemInformacao(form) {
  // objeto
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };
  return paciente;
}

function montaTr(paciente) {
  var trPaciente = document.createElement("tr");
  trPaciente.classList.add("paciente");

  trPaciente.appendChild(montaTd(paciente.nome, "info-nome"));
  trPaciente.appendChild(montaTd(paciente.peso, "info-peso"));
  trPaciente.appendChild(montaTd(paciente.altura, "info-altura"));
  trPaciente.appendChild(montaTd(paciente.gordura, "info-gordura"));
  trPaciente.appendChild(montaTd(paciente.imc, "info-imc"));

  return trPaciente;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {
  var erros = [];
  if (paciente.nome.length == 0) erros.push("o Nome está vazio");
  if (!validaPeso(paciente.peso)) erros.push("o Peso é inválido");

  if (!validaAltura(paciente.altura)) erros.push("a Altura é inválida");
  if (paciente.gordura.length == 0) erros.push("a gordura está vazia");
  if (paciente.peso.length == 0) erros.push("o peso está vazio");
  if (paciente.altura.length == 0) erros.push("a altura está vazia");

  return erros;
}

function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function adionaPacienteNaTabela(paciente) {
  var trPaciente = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(trPaciente);
}
