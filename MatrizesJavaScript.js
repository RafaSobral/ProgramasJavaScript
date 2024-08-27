valor1 = +(prompt('Digite um valor:'))
valor2 = +(prompt('Digite um valor:'))
let resultado 
operacao = prompt('Selecione a operação desejada:')

switch(operacao) {
 case '+':
   resultado= valor1 + valor2
   document.write(`O resultado da operacao é ${resultado}`)
 break;
 case '-':
    resultado= valor1 - valor2
    document.write(`O resultado da operacao é ${resultado}`)
 break;
 case '*':
    resultado= valor1 * valor2
    document.write(`O resultado da operacao é ${resultado}`)
 break;
 case '/':
    resultado= valor1 / valor2
    document.write(`O resultado da operacao é ${resultado}`)
 break;
 default:
    alert('Digite uma operacao valida!!')



}
