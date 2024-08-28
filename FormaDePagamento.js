valor = +(prompt('insira o valor do produto:'))
forma = +(prompt('Qual a forma de pagamento ?: (1)A vista (2)A prazo'))
let total


switch(forma){
 case 1:
  total = valor * 0.90
  document.write(`Voce ganhou um desconto de 10%, total: ${total}`)
  break;
 case 2:
  document.write(`O valor do produto e: ${valor}`)  
  break;
}