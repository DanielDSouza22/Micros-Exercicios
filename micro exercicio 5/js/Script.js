/*
var num;

num = Math.floor (Math.random() * 10);

alert (num);
*/

/*
var num;

num = Math.floor (Math.random() * 10);

do {
chute = prompt("Insira um número entre 0 e 9");
} while (chute < 0 || chute > 9);

for (var cont = 1; chute != num; cont++){
  do {
chute = prompt("Insira um número entre 0 e 9");
} while (chute < 0 || chute > 9);
}

alert ("você acertou na tentativa " + cont);
*/
var idade;
 idade = prompt ('Insira sua idade');
 while (idade < 1) {
idade = prompt  ('Idade inválida. insira novamente');
}
alert ("Sua idade é" + idade);