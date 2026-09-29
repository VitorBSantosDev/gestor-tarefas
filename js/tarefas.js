import { dataDeHoje } from "./validadores.js";

export function criarGestor() {
  let tarefas = [];

  function obterTarefas() {
    return [...tarefas];
  }

  function adicionarTarefa(titulo, prioridade) {
    const novaTarefa = {
      titulo: titulo,
      prioridade: prioridade,
      status: "pendente",
      dataCriacao: dataDeHoje()
    };
    tarefas = [...tarefas, novaTarefa];
  }

  return { obterTarefas, adicionarTarefa };
}
