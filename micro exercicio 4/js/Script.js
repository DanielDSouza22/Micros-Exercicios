
//enquanto (while)


/*var cont = 0

while(cont < 10){
  //bloco de instrução a ser executado
  alert('Contador: ' + cont)

  //sintaxe de incremento de 1
  //cont++
  cont+=1
  //incremento de 2
  //cont = cont + 2

  //cont+=2
}*/


/*
var opcao

do{

  alert('1 - Gerar relatório')
  alert('2 - Cadastrar Cliente')
  alert('3 - Remover Cliente')
  alert('0 - Sair')


  opcao = parseInt(prompt('Digite sua opção: '))
  
  alert('Opcao digitada: ' + opcao)

  switch(opcao){
    case 1:
      alert('Relatório Gerado!')
      break
    case 2:
      alert('Cliente Cadastrado com Sucesso!')
      break
    case 3:
      alert('Remover cliente!')
      break
    case 0:
      alert('Até logo!')
      break
    default:
      alert('Opção inválida!')
  }
  alert('')

}while(opcao != 0)

*/

//exemplos de for

for(var i=0;i<10;i=i+1){
  alert('Valor de i: '+ i)
}

/*for(var i=10;i>=0;i-=2){
  alert('Valor de i: '+ i)

}*/
