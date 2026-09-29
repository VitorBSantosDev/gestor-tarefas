import { iniciarTema,  } from "./tema.js";

function atualizarProgresso(tarefas) {
  const total = tarefas.length;
  const concluidas = tarefas.filter(t => t.status === "concluido").length;
  const percentagem = total > 0 ? Math.round((concluidas / total) * 100) : 0;

  document.querySelector("#preenchimento").style.width = `${percentagem}%`;
  document.querySelector("#texto-progresso").textContent = `${percentagem}%`;
}

iniciarTema();