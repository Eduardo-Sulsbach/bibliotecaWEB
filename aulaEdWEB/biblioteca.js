const botaoRegistrar = document.getElementById("btnRegistrar");

botaoRegistrar.addEventListener("click", adicionarLivro);

function adicionarLivro() {
  const nomeInput = document.getElementById("nomeLivro");
  const atrasoInput = document.getElementById("diasAtraso");

  const nomeLivro = nomeInput.value;
  const diasAtraso = Number(atrasoInput.value);

  if (nomeLivro === "" || atrasoInput.value === "") {
    alert("Preencha todos os campos!");
    return;
  }

  const lista = document.getElementById("listaLivros");

  const item = document.createElement("li");

  // Verifica se está atrasado
  if (diasAtraso > 0) {
    item.classList.add("atrasado");
  }

  item.innerHTML = `
    <p><strong>Livro:</strong> ${nomeLivro}</p>

    <p><strong>Dias de atraso:</strong> ${diasAtraso}</p>

    ${
      diasAtraso > 0 ? <p class="status">ATRASADO</p> : <p>Entregue no prazo</p>
    }

    <button class="btn-remover">
      Confirmar Arquivamento
    </button>
  `;

  // Botão remover
  const botaoRemover = item.querySelector(".btn-remover");

  botaoRemover.addEventListener("click", function () {
    removerLivro(item);
  });

  lista.appendChild(item);

  // Limpa os campos
  nomeInput.value = "";
  atrasoInput.value = "";

  atualizarContadores();
}

function removerLivro(item) {
  item.remove();

  atualizarContadores();
}

function atualizarContadores() {
  const livros = document.querySelectorAll("#listaLivros li");

  const atrasados = document.querySelectorAll(".atrasado");

  document.getElementById("totalLivros").textContent = livros.length;

  document.getElementById("livrosMulta").textContent = atrasados.length;
}
