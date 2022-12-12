const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Água Sanitária", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.8 },
];

const nomeProdutosLimpeza = [];
const produtosLimpeza = (produtos) => {
  for (const item of produtos) {
    if (item.categoria === "Limpeza") {
      //console.log(item.categoria);
      nomeProdutosLimpeza.push(item.nome);
    }
  }
  return nomeProdutosLimpeza;
};

produtosLimpeza(produtos);

console.log(nomeProdutosLimpeza);

// if (produtos.categoria === "Limpeza") {
// }
