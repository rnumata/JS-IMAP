
// Copiar Objetos utilizando operador spread e incluir mais campos no objeto

let cantor = 
{
  nome: "Teste1",
  estilo: "Musica"
}

let copiaCantor = 
{
  ...cantor,
  valor: 1000
}

console.log(copiaCantor);  //{nome: "Teste1", estilo: "Musica", valor: 1000}


// Copiar Total/parte de um Objeto ou Lista para variaveis

let {nome, estilo} = cantor;

console.log(nome); //Teste1
console.log(estilo);  //Musica

let {valor} = copiaCantor;

console.log(valor); //1000


// 

let album = 
{
  nome: null,
  ano: 2021,
  Orgao: [{UO: "SMS"}, {Setor: "Alfa"}]
};

let checarNome = album?.nome;
console.log(checarNome); //null

let checarNome1 = album.nome??"Chave null";
console.log(checarNome1); //Chave null

