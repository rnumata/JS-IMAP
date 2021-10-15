//a. Teste se existe um CEP no meio de um texto:
let cep = "Rua Francisco Fay Neves, 455B 82015-620";
let checkCep = (/(\d{5})-(\d{3})/).test(cep); //true

//b. Valide se o texto de uma String é um telefone, no formato: (xx) xxxxx-xxxx:
let cel = "(41)99176-1606";
let checkCel = (/\(\d{2}\)(\d{5})-(\d{4})/).test(cel);  //true

//c. Teste se um determinado texto é ou não uma placa de carro
let placa = "ABC1A14";
let checkPlaca = (/(^[A-Z]{3})(\d{1})([A-Z0-9]{1})(\d{2}$)/).test(placa);



//6.Use o replace para substituir todas as ocorrências de graus em farenheight por graus em celsius.A conversão é dada por:(f-32) * 5/9
let farenheight = "50F";
let celsius = farenheight.replace(/^(\d{2})/,(matche,grupo1)=>(grupo1-32)*5/9).replace(/.$/,"C");

//(matche,grupo1) -> matche sempre vai ser o 1o parametro.. em diante sao os grupos definidos no replace (Pex ^(\d{2}))