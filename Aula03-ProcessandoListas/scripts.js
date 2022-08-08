let albuns = [    
  {
    nome: "Como estão vocês",
    cantor: "Titãs",
    ano: 2003,
    nota: 7
  },
  {
    nome: "Troco Likes",
    cantor: "Thiago Iorc",
    ano: 2015,
    nota: 4.5
  },
  {
    nome: "Mais",
    cantor: "Marisa monte",
    ano: 1991,
    nota: 8.5
  },
  {
    nome: "A tempestade",
    cantor: "Legião Urbana",
    ano: 1996,
    nota: 9.5
  },
  {
    nome: "Domingo",
    cantor: "Titãs",
    ano: 1995,
    nota: 7.5
  },
  {
    nome: "Ouro de Minas",
    cantor: "Roupa Nova",
    ano: 2001,
    nota: 8
  },
  {
    nome: "Dois",
    cantor: "Legião Urbana",
    ano: 1986,
    nota: 10
  },
  {
    nome: "Radiola",
    cantor: "Skank",
    ano: 2004,
    nota: 6.5
  },
  {
    nome: "Roupa acústico",
    cantor: "Roupa Nova",
    ano: 2004,
    nota: 9
  },
  {
    nome: "Umbilical",
    cantor: "Thiago Iorc",
    ano: 2011,
    nota: 3.5
  },
  {
    nome: "Barulhinho bom",
    cantor: "Marisa monte",
    ano: 1996,
    nota: 7.5
  }
];

//1. Gere uma lista de objetos com o nome e ano de todos os álbuns da Marisa Monte
const listaMarisaMonte = albuns.filter((album)=> album.cantor === "Marisa monte").map((x)=>({nome: x.nome, ano: x.ano}));
console.log(listaMarisaMonte);    // !!! IMPORTANTE ({}) parenteses nas {}

//2. Gere uma lista contendo o nome de todos os cantores e álbuns. A lista deve conter só os textos, não objetos.
const listaCantores = albuns.flatMap((x)=>[x.cantor, x.nome]);
console.log(listaCantores);

//3. Calcule a média da nota dos discos anteriores ao ano de 2005
const listaAnterior = albuns.filter((item)=>item.ano < 2005)
const somatoriaNotas = listaAnterior.flatMap((x)=>x.nota).reduce((acum, valor)=> {return acum + valor},0);
console.log((somatoriaNotas / listaAnterior.length).toFixed(2));

//4. Gere uma lista contendo o nome de todos os cantores, sem repetições
const listaDosCantores = albuns.flatMap((cantor)=>[cantor.cantor]);
const listaUnicaDosCantores = listaDosCantores.filter((item, i)=>{
  return listaDosCantores.indexOf(item) === i;
})
console.log(listaUnicaDosCantores); 

//5. Gere uma lista contendo a quantidade de álbuns que cada cantor possui

let albuns = [    
  {
    nome: "Como estão vocês",
    cantor: "Titãs",
    ano: 2003,
    nota: 7
  },
  {
    nome: "Troco Likes",
    cantor: "Thiago Iorc",
    ano: 2015,
    nota: 4.5
  },
  {
    nome: "Mais",
    cantor: "Marisa monte",
    ano: 1991,
    nota: 8.5
  },
  {
    nome: "A tempestade",
    cantor: "Legião Urbana",
    ano: 1996,
    nota: 9.5
  },
  {
    nome: "Domingo",
    cantor: "Mamonas",
    ano: 1995,
    nota: 7.5
  },
  {
    nome: "Ouro de Minas",
    cantor: "Roupa Nova",
    ano: 2001,
    nota: 8
  },
  {
    nome: "Dois",
    cantor: "Legião Urbana",
    ano: 1986,
    nota: 10
  },
  {
    nome: "Radiola",
    cantor: "Skank",
    ano: 2004,
    nota: 6.5
  },
  {
    nome: "Roupa acústico",
    cantor: "Roupa Nova",
    ano: 2004,
    nota: 9
  },
  {
    nome: "Umbilical",
    cantor: "Thiago Iorc",
    ano: 2011,
    nota: 3.5
  },
  {
    nome: "Barulhinho bom",
    cantor: "Marisa monte",
    ano: 1996,
    nota: 7.5
  }
];

const lista = albuns.reduce((obj, album) => {
  
  if(obj[album.cantor]){
    throw("Já existe na lista: " + album.cantor);
  }
  
  obj[album.cantor] = true;
  
  return obj;
  
}, {});
