total = prompt('Digite o valor total da compra:')
cliente = +(prompt('Selecione: comum(1) funcionario(2) vip(3)'))
let resultado 


 switch(cliente) {
  case 1:
    resultado= total
    document.write(`Voce nao recebeu nenhum desconto ${resultado}`)
  break;
  case 2:
     resultado= (total * 0.5)/5
     document.write(`Voce recebeu 5% de desconto de funcionario ${resultado}`)
  break;
  case 3:
     resultado= (total * 0.10)/10
     document.write(`Voce recebeu 10% de desconto de VIP ${resultado}`)
  break;
  default:
     alert('Digite uma operacao valida!!')
 }