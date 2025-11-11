document.addEventListener("DOMContentLoaded", () => {
  // Botão da página inicial
  const explorarBtn = document.getElementById("explorarBtn");
  if (explorarBtn) {
    explorarBtn.addEventListener("click", () => {
      alert("Prepare-se para explorar o incrível mundo do Minecraft!");
    });
  }

  // Envio do formulário de contato
  const contatoForm = document.getElementById("contatoForm");
  if (contatoForm) {
    contatoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = document.getElementById("nome").value;
      alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada.`);
      contatoForm.reset();
    });
  }
});
// Galeria de mods - ampliar imagem ao clicar
const modCards = document.querySelectorAll(".mod-card img");
if (modCards) {
  modCards.forEach(img => {
    img.addEventListener("click", () => {
      const modal = document.getElementById("imagemModal");
      const imgAmpliada = document.getElementById("imgAmpliada");
      const legenda = document.getElementById("legenda");
      modal.style.display = "block";
      imgAmpliada.src = img.src;
      legenda.textContent = img.alt;
    });
  });
}
