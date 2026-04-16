// HOME - mensagem de boas-vindas
const btnBoasVindas = document.getElementById("btnBoasVindas");

if (btnBoasVindas) {
    btnBoasVindas.addEventListener("click", function () {
        alert("Bem-vindo ao nosso site! Conheça nossos principais produtos.");
    });
}

// PRODUTOS - destacar produto ao clicar
const cardsProdutos = document.querySelectorAll(".produto-card");

cardsProdutos.forEach(function (card) {
    card.addEventListener("click", function () {
        cardsProdutos.forEach(function (item) {
            item.style.border = "2px solid transparent";
        });

        card.style.border = "2px solid #0071e3";
    });
});

// SOBRE - mostrar e esconder texto extra
const btnLerMais = document.getElementById("btnLerMais");
const textoExtraSobre = document.getElementById("textoExtraSobre");

if (btnLerMais && textoExtraSobre) {
    btnLerMais.addEventListener("click", function () {
        if (textoExtraSobre.style.display === "none" || textoExtraSobre.style.display === "") {
            textoExtraSobre.style.display = "block";
            btnLerMais.textContent = "Ler menos";
        } else {
            textoExtraSobre.style.display = "none";
            btnLerMais.textContent = "Ler mais";
        }
    });
}

// CONTATO - validação do formulário
const formContato = document.getElementById("formContato");

if (formContato) {
    formContato.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha os campos obrigatórios.");
        } else {
            alert("Mensagem enviada com sucesso!");
        }
    });
}

// NOVIDADES - trocar texto
const btnTrocarNovidade = document.getElementById("btnTrocarNovidade");
const tituloNovidade = document.getElementById("tituloNovidade");
const textoNovidade = document.getElementById("textoNovidade");

if (btnTrocarNovidade && tituloNovidade && textoNovidade) {
    btnTrocarNovidade.addEventListener("click", function () {
        tituloNovidade.textContent = "Projeto preparado para expansão";
        textoNovidade.textContent = "A estrutura atual facilita futuras melhorias com JavaScript e novos recursos visuais.";
    });
}