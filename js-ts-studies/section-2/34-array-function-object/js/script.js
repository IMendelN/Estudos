function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  function getFormValues() {
    return {
      nome: form.querySelector(".nome").value,
      sobrenome: form.querySelector(".sobrenome").value,
      peso: form.querySelector(".peso").value,
      altura: form.querySelector(".altura").value,
      idade: form.querySelector(".idade").value,
    };
  }

  function exibeResultado(msg) {
    resultado.innerHTML = "";
    const p = document.createElement("p");
    p.innerHTML = msg;
    resultado.appendChild(p);
  }

  function handleSubmit(evento) {
    evento.preventDefault();
    const dados = getFormValues();
    exibeResultado(
      `Nome: ${dados.nome} ${dados.sobrenome}, Peso: ${dados.peso}, Altura: ${dados.altura}, Idade: ${dados.idade}`
    );
  }

  form.addEventListener("submit", handleSubmit);
}

meuEscopo();
