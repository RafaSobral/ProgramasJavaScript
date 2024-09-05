function potencia(base, expoente){
    let resultado = 1
    let contador = 0

    while (contador < expoente){
        resultado *= base 
        contador++
    }

    return resultado
    
}

document.write(potencia(4,4))
