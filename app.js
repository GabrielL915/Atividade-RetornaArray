/*2 - Criar uma função que receba um array de obejtos (qualquer tamanho), 
e retorne um array com 3 objetos deste array, porém ele deve pegar esses 3 valores de forma aleatoria. 
Ex:valores da  posição 5, posição 7 e posição 3.*/
const produtosNovos = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.99 },
  { nome: "Estojo", qtde: 7, preco: 9.99 },
  { nome: "Teclado", qtde: 2, preco: 609.99 },
  { nome: "Tenis", qtde: 3, preco: 350.99 },
  { nome: "Fone", qtde: 5, preco: 198.99 },
  { nome: "Mochila", qtde: 15, preco: 150.99 },
];

function randoArray(array) {
  let produtosSortidos = [];

  
  while (produtosSortidos.length < 3) {
    let randomNumber = Math.floor(Math.random() * array.length);
    let produtoSelecionado = array[randomNumber];

    
   let selecionado = false;  
    produtosSortidos.forEach((produtos) => {
      if (produtos === produtoSelecionado) {
        selecionado = true;
      }
    });

    if (!selecionado) {
      produtosSortidos.push(produtoSelecionado);
    }
  }

  return produtosSortidos;
}

for (let index = 0; index < 10; index++) {
  console.log(index);
  console.log(randoArray(produtosNovos));
}
