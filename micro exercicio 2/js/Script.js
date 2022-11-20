/*var nome = prompt('Insira seu nome: ')
// formato sem else
if(nome == 'Daniel'){
    alert('Vá para Sala 1')
}
if(nome == 'Larissa'){
    alert('Vá para o Centro de Convernções')
}
if(nome == 'Divaldo'){
    alert('Vá para a Sala 2')
}
if((nome != 'Daniel') && (nome != 'Larissa') && (nome != 'Divaldo'))
{
    alert('Nome não encontrado')
}


// formato com else
var nome = prompt('Insira seu nome: ')

if(nome == 'Daniel'){
    alert('Vá para Sala 1')
}
else if(nome == 'Larissa'){
    alert('Vá para o Centro de Convernções')
}
else if(nome == 'Divaldo'){
    alert('Vá para a Sala 2')
}
else{
    alert('Nome não encontrado')
} */

var idade = parseInt(prompt('Insira a sua idade: '))

if(idade > 0){
  //alert('Idade válida')

  if(idade <= 130){
    if(idade >= 60){
      alert('Você é idos@')
    }
    else if(idade >= 18){
      alert('Você é adult@')
    }
    else if(idade >= 12){
      alert('Você é adolescente')
    }
    else{
      alert('Você é uma criança')
    }
  }
  else{
    alert('Limite de idade ultrapassado')
  }

  
}
else{
  alert('Idade inválida')
}