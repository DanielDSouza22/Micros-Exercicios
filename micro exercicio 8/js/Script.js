/*
// exemplo 1
var nome = [];
var email = [];
var telefone = [];

// exemplo 2
var nome = ['Daniel','Divaldo','Luciana'];
alert (nome[0]);

// exemplo 3
var nome = [];
//outros comandos
nome = ['Daniel','Divaldo','Luciana'];

// exemplo 4
var nome = [];
var resp = 's';
for (i=0; resp == 's'; i++){
   nome[i] = prompt ("Digite o nome do aluno");
   resp = prompt ("Deseja continuar? s/n");
}

// exemplo 5
var nome = [ ], email = [ ], tel = [ ];
for (i=0; i < 3; i++){
nome[i] = prompt ("Digite o nome da " + (i+1) + "a pessoa");
email[i] = prompt ("Digite o email da " + (i+1) + "a pessoa");
tel[i] = prompt ("Digite o telefone da " + (i+1) + "a pessoa");
alert ("\n");
}

// Micro Exercicio exemplo 1
var idade = [18, 19, 9, 28, 25, 46, 2, 55, 36, 14];
var achou = 'n';
for (i=0; (achou == 'n' && i == 10); i++){
if (idade[i] == 46){
achou = 's';
}
}
if (i == 10){
alert ("Não consta o cadastro dessa idade");
} else{
alert ("A idade 46 está cadastrada na posição " + i);
}

// Micro Exercicio exemplo 2
var idade = [];
var achou = 'n', resp = 's';
var idade_procurar;

for (i=0; resp == 's'; i++){
     idade[i] = prompt ("Digite uma idade");
     resp = prompt ("Deseja continuar? s/n");
}

 idade_procurar = parseInt (prompt ("Qual idade deseja procurar?"));

 for (i=0; (achou == 'n' && idade.length > i); i++){
     if (idade[i] == idade_procurar){
     achou = 's';
}
}

if (achou == 'n'){
alert ("Não consta o cadastro dessa idade");
} else{
alert ("A idade " + idade_procurar + " está cadastrada na posição " + i);
}

// Exemplo 6
if (resp == "SIM") {
  Alert ("Maravilha. Você está indo muito bem!");
  } else {
  Alert ("Tenha calma. Releia os capítulos e faça todos os exercícios.");
  }

  //exercicio terminado
  var nome = [], email = [], tel = [];
var resp = 's';
for (i=0; resp == 's'; i++){
nome[i] = prompt ("Digite o nome da " + (i+1) + "a pessoa");
email[i] = prompt ("Digite o email da " + (i+1) + "a pessoa");
tel[i] = prompt ("Digite o telefone da " + (i+1) + "a pessoa");
alert ("\n");
resp = prompt ("Deseja continuar? s/n");
alert ("\n");
}

 alert ("Essas são as pessoas cadastradas em nosso sistema:\n");
for (i=0; nome.length > i; i++){
alert ("O(A) sr(a) " + nome[i] + " possui o telefone: " + tel[i] +
" e email: " + email[i] + "\n");
}

// Exercicio DESAFIO! (Algoritmos e Vetores)
var idade = [];

for (var i = 0; i < 5; i++);{
  idade[i] = prompt('Digite uma idade');
}
*/
var idade = [], aux;

for (var i = 0; i < 5; i++) {
  idade[i] = prompt('Digite uma idade');
}

for (var fixa = 0; fixa < 4; fixa++){
  for (var resto = (fixa+1); resto < 5; resto++){
    if (idade[fixa] > idade[resto]){
      aux = idade[fixa];
      idade[fixa] = idade[resto];
      idade[resto] = aux;
    }
  }
}

for (var i = 0; i < 5; i++){
  alert(idade[i]);
}