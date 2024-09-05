do{
    
    opcao = +(prompt("Selecione: (1)soma (2)subtracao (3)multiplicacao (4) sair"))
    var n1, n2, n3

    switch(opcao){
        case 1:
            document.write(`Voce selecionou: Soma <br>`)
            document.write(`Por favor, insira os valores <br>`)
            n1 = +(prompt("Qual o primeiro valor?"))
            n2 = +(prompt("Qual o segundo valor?"))
            n3 = n1 + n2
            document.write(`Resultado: <br>`)
            document.write(`${n3} <br>`)
        break;
        case 2:
            document.write(`Voce selecionou: Subtracaoa <br>`)
            document.write(`Por favor, insira os valores <br>`)
            n1 = +(prompt("Qual o primeiro valor?"))
            n2 = +(prompt("Qual o segundo valor?"))
            n3 = n1 - n2
            document.write(`Resultado: <br>`)
            document.write(`${n3} <br>`)
        break;
        case 3:
            document.write(`Voce selecionou: Multiplicacao <br>`)
            document.write(`Por favor, insira os valores <br>`)
            n1 = +(prompt("Qual o primeiro valor?"))
            n2 = +(prompt("Qual o segundo valor?"))
            n3 = n1 * n2
            document.write(`Resultado: <br>`)
            document.write(`${n3} <br>`)
        break;
        case 4:
            document.write(`Saindo`)
        break;
        default:
            document.write(`Digite uma opcao valida <br>`)
        break;

    }

}while(opcao !== 4)
