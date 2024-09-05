function calculadora(n1,n2,operacao){
    
    let resultado
   
    switch(operacao){
    case 1:
        resultado = n1 + n2
    break;
    case 2:
        resultado = n1 - n2
    break;
    case 3:
        resultado = n1 * n2     
    break;
    case 4:
        resultado = n1 / n2    
    break;
    default:
        alert("Digite uma operacao valida")

    }

    return resultado

}

alert(calculadora(2,4,5))
