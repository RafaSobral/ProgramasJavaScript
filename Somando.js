n = +(prompt("digite um numero:"))
let contador = 0
let soma = 0

while(contador < n){
    contador++
    soma+=contador
}

document.write(`${soma}`)
