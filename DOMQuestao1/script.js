// function boasVindas() {
//   var nome = document.querySelector("#nome").value;

//   document.querySelector("#mensagem").innerHTML = "Bem Vindo " + nome;
// }


// function calculo(){
  
//   var valor = parseFloat(document.querySelector("#valor").value);
//   var valor2 = parseFloat(document.querySelector("#valor2").value);
  
//   var resultado1 = valor + valor2;
//   var resultado2 = valor * valor2;
//   var resultado3 = valor / valor2;
//   var resultado4 = valor - valor2;
  
//   document.querySelector("#resultado1").innerHTML = "Somar " + resultado1;
//   document.querySelector("#resultado2").innerHTML = "Multiplicacao " + resultado2;
//   document.querySelector("#resultado3").innerHTML = "Divisao " + resultado3;
//   document.querySelector("#resultado4").innerHTML = "Subtracao " + resultado4;
  
// }

// function calculo(){
  
//   var nota1 = parseFloat(document.querySelector("#nota1").value);
//   var nota2 = parseFloat(document.querySelector("#nota2").value);
//   var nota3 = parseFloat(document.querySelector("#nota3").value);
  
//   var resultado = (nota1 + nota2 + nota3) / 3;
  
//   document.querySelector("#resultado").innerHTML = "Resultado: " + resultado;
  
// }

// document.querySelector("#botao").addEventListener("click",calculo)

// function calcular(){
  
//   var valor1 = parseFloat(document.querySelector("#valor1").value);
//   var valor2 = parseFloat(document.querySelector("#valor2").value);
  
//   var resultado = valor1 - valor2;
  
//   document.querySelector("#resultado").innerHTML = `resultado: ${resultado}` 
  
// }

// document.querySelector("#botao").addEventListener("click",calcular);

// function tabuada(){
  
//   var resultado = [];
  
//   var valor = parseFloat(document.querySelector("#valor").value);
  
//   for(var i = 1; i < 11; i++){
    
//    resultado[i] = valor * i
    
//   }
  
//    for(var i = 1; i < 11; i++){
    
//    document.querySelector("#resultado").innerHTML +=  `${valor} x ${i} = ${resultado[i]} <br>`
    
//   }
  
  
// }

// document.querySelector("#botao").addEventListener("click",tabuada)

// function fatorial(){
  
//   var resultado = 1
  
//   var valor = parseFloat(document.querySelector("#valor").value);
  
//   for(i = 1; i <= valor; i++){
    
//    resultado *= i
    
//   }
  
//   document.querySelector("#resultado").innerHTML = `${resultado} <br>`
  
// }

//  document.querySelector("#botao").addEventListener("click",fatorial)
  
