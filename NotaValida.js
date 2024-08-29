for (;;){
    nota = +(prompt("digite uma nota:"))

    if (nota > 0 && nota < 10){
        document.write(`nota valida!!`)
        break;
    }else{
        document.write(`nota invalida!!`)
    }

}
