let numero=0,maior=0,menor=0,soma=0;

for(let i=0; i<10 ;i++){
    numero = +(prompt("Digite um valor:"))
    soma += numero

    if(numero > maior){
      maior = numero
    }
    if(numero < menor == 0){
      menor = numero
    }
}

document.write(`maior numero:${maior}`)
document.write(`menor numero:${menor}`)
document.write(`soma:${soma}`)
