nota = +(prompt("insira a sua media:"))
 switch((nota)){
  case 10:
    document.write(`Excelente`)
  break;
  case 9: 
    document.write(`Otimo`)
  break;
  case 8:
    document.write(`Bom`)
  break;
  case 7:
    document.write(`Regular`)
  break;
  case 6:
    document.write(`Ruim`)
  break;
  case 5:
    document.write(`Nos vemos no ano que vem`)
  break;
  default:
    document.write("Nota inválida ou fora da faixa esperada");
  break;


 }