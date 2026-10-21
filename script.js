const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);
    function botaoClicado() {
        console.log("fui clicado");
        let texto = botao.querySelector("span");
        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
        } else {
            texto.textContent--;
            curtiu = false;
        }
    }
});
<p class="artigo-fonte">Fonte: <a href="https://www.tnmoc.org/colossus">The National Museum of Computing</a></p>
<a href="https://www.tnmoc.org/colossus" target="_blank">The National Museum of Computing</a>
<main>
    <!-- ... outros artigos ... -->

<button class="btn-tema-escuro">��</button>
</main>
.btn-tema-escuro {
    position: fixed;
    bottom: 16px; /* Distância da borda de baixo */
    right: 16px;  /* Distância da borda da direita */
    font-size: 32px; /* Tamanho do emoji */
    padding: 12px;   /* Espaço interno entre o emoji e a borda */
    background-color: var(--cor-primaria); /* Cor de fundo usando nossa variável */
    border-radius: 50%; /* Deixa o botão perfeitamente redondo */
    border: none; /* Remove a borda padrão do botão */
    cursor: pointer; /* Muda o mouse para a "mãozinha" ao passar por cima */
}
const btnTemaEscuro;
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");
btnTemaEscuro.addEventListener("click", mudaTema);
function mudaTema() {
    const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
    } else {
        corpoPagina.classList.add("tema-escuro");
    }
}
