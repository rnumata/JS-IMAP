// 1. Crie uma função chamada mais, que aceite 2 parâmetros e os some. Utilize as 3 sintaxes possíveis.

//1
function mais(param1, param2){
	return param1 + param2;
}
console.log(mais(2,2));

//2
const soma = function(param1, param2){
	return param1 + param2;
}
console.log(soma(1,1));

//3
const somar = (param1, param2) => param1 + param2;
console.log(somar(3,4));

//4 Extra
let funcoes = [mais, soma, somar];
funcoes.forEach((funcao, i)=>{
  console.log(`Index ${i} : ${funcao(2,2)}`);
})

/* 2. Crie uma função chamada menos. 
 - Caso seja passado apenas 1 parâmetro, retorne o valor negativo. 
 - Caso sejam passados 2 parametros, retorne a subtração dos dois */

const menos = (param1, param2) => (param2 === undefined) ? -param1 : param2 - param1;
console.log(menos(1));

//2.1 Crie uma função que tenha dois parametros. Porém, um deles deve ter um valor padrao caso nao seja passado na chamada
function valorPadrao(param1, param2 = 10){
  return param1 + param2;
} 
console.log(valorPadrao(1)); //11

//3. Crie a função maior, obtenha o maior valor da lista de parâmetros. Permita passar quantos valores quiser:

// a recebe 1o  parametro e os demais parametros sao incluidos numa lista
function imprimir(a, ...alunos){
  for(let aluno of alunos){
    console.log(`${a} : ${aluno}`);
  }
}

console.log((imprimir("Aluno", "x", "y", "z", "w")));

const listaAlunos = ["p", "q", "r"];
console.log(imprimir("Aluno", ...listaAlunos));

//4. Escreva a versão não-recursiva e a recursiva de uma função para calcular o n-ésimo termo da sequência de fibonnaci:
function fib1(n) {
  let termo = 0;
  let proximo = 1;
  for (let i = 0; i < n; i++) {
      let numero = termo + proximo;
     termo = proximo;
     proximo = numero;
  }
  return termo;
}
console.log(`Versao NAO recursiva : ${fib1(4)}`);

function fibonacci(n){
  if(n === 0){
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}
console.log(`Versao recursiva : ${fibonacci(4)}`);


//4.1 Escreva uma funcao recursiva de fatorial(n)
function fatorial(n) {
  return n === 1 ? 1 : n * (fatorial(n-1));
}
console.log(`Fatorial : ${fatorial(4)}`);

//5 Escreva uma funcao filtrar que recebe uma condicao e aplica na lista
function filtrar(condicao, lista){
  let novaLista = [];
  for(let item of lista){
    if(condicao(item)){
      novaLista.push(item);
    }
  }
  return novaLista;
}

const lista = [2,3,4,5,6,7,8,9,10];
console.log(filtrar((x)=> x < 5, lista));

//5. Crie uma função dobrar que aceite um array e uma função de transformação. Essa função recebe um elemento do array e retorna outro
function dobrar(lista, funcao){
  let novaLista = [];
  lista.forEach((item)=>{
    novaLista.push(funcao(item));
  })
  return novaLista;
}
console.log(dobrar([1,2,3,4,5], (x)=> x * 2));

//5.1 Crie uma funcao transformar que receba uma lista e uma funcao (Se item par dobra, senao item)
function transformar(lista, funcao){
  let novaLista = [];
  lista.forEach((item)=>{
    novaLista.push(funcao(item));
  })
  return novaLista;
}
console.log(transformar([1,2,3,4,5,6], (x)=> x%2 === 0 ? x * 2 : x));
