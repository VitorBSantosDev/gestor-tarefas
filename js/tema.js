const botaoTema = document.getElementById("tema");

function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  botaoTema.textContent = tema === "dark" ? "☀️" : "🌙";
  localStorage.setItem("tema", tema);
}

function alternarTema() {
  const atual = document.documentElement.getAttribute("data-theme");
  aplicarTema(atual === "dark" ? "light" : "dark");
}

export function iniciarTema() {
  const guardado = localStorage.getItem("tema");
  const prefereEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
  aplicarTema(guardado ?? (prefereEscuro ? "dark" : "light"));

  botaoTema.addEventListener("click", alternarTema);
}