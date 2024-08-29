for (;;) {
    let nome = prompt("Digite o usuário:");
    let senha = prompt("Digite a senha:");

    if (nome !== senha) {
        break; 
    } else {
        document.write("Nome e senha não podem ser iguais!<br>");
    }
}
