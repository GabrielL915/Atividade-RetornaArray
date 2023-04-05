/*2 - Criar uma função que receba um array de obejtos (qualquer tamanho), 
e retorne um array com 3 objetos deste array, porém ele deve pegar esses 3 valores de forma aleatoria. 
Ex:valores da  posição 5, posição 7 e posição 3.*/

const persons = [
  { nome: "Joao", idade: 30 },
  { nome: "Kleber", idade: 25 },
  { nome: "Jucelino", idade: 40 },
  { nome: "Kleiton", idade: 40 },
  { nome: "Caio", idade: 40 },
  { nome: "Seu Ze", idade: 40 },
];

function randoArrayIndex(arr) {
  let randonIndexes = [];//armazenar index aleatorio

  for (let i = 0; i < 3; i++) {//tem que retornar 3 obj
    let randomNum = Math.floor(Math.random() * arr.length);//armazena um valor aleatorio na var baseado no tamanho do array
    randonIndexes.push(randomNum);//armazena os 3 randoNum no array
  }
  let result = randonIndexes.map((i) => arr[i]);//armazena o novo array gerado com os index aleatorios no result
  return result;
}

console.log(randoArrayIndex(persons));
