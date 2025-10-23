document.getElementById('iniciar').addEventListener('click', () => {
  const grupo = document.getElementById('grupo').value.trim();
  if (!grupo) {
    alert("Por favor ingrese el nombre de su grupo antes de continuar.");
    return;
  }

  // Guarda el nombre del grupo y hora de inicio
  localStorage.setItem('nombreGrupo', grupo);
  localStorage.setItem('inicioTiempo', Date.now());

  // Efecto tipo terminal antes de pasar al siguiente nivel
  const terminal = document.getElementById('terminal');
  terminal.innerHTML += "<p>> Iniciando sesión de investigación...</p>";

  setTimeout(() => {
    terminal.innerHTML += "<p>> Accediendo a Nivel 1...</p>";
  }, 1000);

  setTimeout(() => {
    window.location.href = "nivel1/nivel1_intro.html";
  }, 2500);
});
