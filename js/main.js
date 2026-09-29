import { iniciarTema } from "./tema.js";
import { criarGestor } from "./tarefas.js";
import { validarTitulo } from "./validadores.js";

function atualizarProgresso(tarefas) {
  const total = tarefas.length;
  const concluidas = tarefas.filter(t => t.status === "concluida").length;
  const percentagem = total > 0 ? Math.round((concluidas / total) * 100) : 0;

  document.querySelector("#preenchimento").style.width = `${percentagem}%`;
  document.querySelector("#texto-progresso").textContent = `${percentagem}%`;
}

iniciarTema();

const gestor = criarGestor();

const form = document.querySelector("#adicionar-tarefa");
const inputTitulo = document.querySelector("#titulo-tarefa");
const selectPrioridade = document.querySelector("#prioridade-tarefa");
const textoErro = document.querySelector("#erro-tarefa");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const titulo = inputTitulo.value.trim();
  const prioridade = selectPrioridade.value;
  const erro = validarTitulo(titulo);

  if (erro !== "") {
    textoErro.textContent = erro;
    return;
  }

  gestor.adicionarTarefa(titulo, prioridade);
  textoErro.textContent = "";
  form.reset();
  console.log(gestor.obterTarefas());
});
