turmas = +(prompt("Qual a quantioade de turmas?:"))

let media=0,totalAlunos=0 

for (let i = 1; i <= turmas; i++){
    alunos = +(prompt("Qual a quantidade de alunos por turma?:"))

    while( alunos > 40){
        alunos = +(prompt("Excedeu a quantidade de alunos,tenta novamente:"))
    }

    totalAlunos += alunos

}

media = totalAlunos / turmas

document.write(`media ${media}`)
document.write(`turmas ${turmas}`)
document.write(`alunos ${totalAlunos}`)



