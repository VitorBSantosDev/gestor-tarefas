export function validarTitulo(titulo) {
  if (titulo === "") {
    return "Escreve um título para a tarefa.";
  } else if (titulo.length < 3) {
    return "O título precisa de pelo menos 3 caracteres.";
  }
  return "";
}

export function dataDeHoje() {
  const hoje = new Date();
  return hoje.toISOString().slice(0, 10);
}
