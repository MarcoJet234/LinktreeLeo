// Pega o botão pelo id "tema-btn" e guarda na variável botaoTema
const botaoTema = document.getElementById("tema-btn");

// Pega o body da página (é nele que vamos adicionar/remover a classe)
const body = document.body;

// Adiciona um "ouvinte" de clique no botão
// Toda vez que o botão for clicado, a função dentro dele será executada
botaoTema.addEventListener("click", function() {

    // classList.toggle() adiciona a classe "claro" se ela não existir
    // e remove a classe "claro" se ela já existir
    // É como um interruptor: liga e desliga
    body.classList.toggle("claro");

});


// ===== CONTADOR DE CLIQUES =====
const botoes = document.querySelectorAll(".btn");
const contadorTexto = document.getElementById("contador");
let cliques = 0;

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        cliques = cliques + 1;
        contadorTexto.textContent = "Cliques totais: " + cliques;
    });
});
