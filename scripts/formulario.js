const produtos = [
  {
    id: "fc-1888",
    nome: "capacitor de fluxo",
    classificacaomedia: 4.5
  },
  {
    id: "fc-2050",
    nome: "fios elétricos",
    classificacaomedia: 4.7
  },
  {
    id: "fs-1987",
    nome: "circuitos de tempo",
    classificacaomedia: 3.5
  },
  {
    id: "ac-2000",
    nome: "reator de baixa tensão",
    classificacaomedia: 3.9
  },
  {
    id: "jj-1969",
    nome: "equalizador de distorção",
    classificacaomedia: 5.0
  }
];

document.addEventListener("DOMContentLoaded", () => {
    const selectProduto = document.getElementById("produto");

    // Gerar as opções dinamicamente com base no array
    produtos.forEach(produto => {
        const option = document.createElement("option");
        option.value = produto.id; // Define o id do array no atributo value
        option.textContent = produto.nome; // Define o nome do array no texto visível
        selectProduto.appendChild(option);
    });
});