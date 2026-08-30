fetch("produtos.json")
    .then(resposta => resposta.json())
    .then(dados => {
        const container = document.getElementById("produtos");

        // Produto 1
        container.innerHTML += criarCard(dados.nome1, dados.preco1, dados.imagem1, dados.descricao1);
        // Produto 2
        container.innerHTML += criarCard(dados.nome2, dados.preco2, dados.imagem2, dados.descricao2);
        // Produto 3
        container.innerHTML += criarCard(dados.nome3, dados.preco3, dados.imagem3, dados.descricao3);
    });

function criarCard(nome, preco, imagem, descricao) {
    return `
        <div class="card">
            <img src="${imagem}">
            <h3>${nome}</h3>
            <p>${descricao}</p>
            <p><strong>${preco}</strong></p>
            <button onclick="alert('Você comprou: ${nome}')">Comprar</button>
        </div>
    `;
}