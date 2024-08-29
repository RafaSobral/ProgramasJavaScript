letra = prompt("Digite uma letra:")

switch(letra){
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
    case 'n':
    case 'p':
    case 'q':
    case 'r':
    case 's':
    case 't':
    case 'v':
    case 'x':
    case 'w':
    case 'y':
    case 'z':
     document.write(`Essa letra e uma consoante`)
    break;
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':                
     document.write(`Essa letra e uma vogal`)
    break;
    default:
        document.write(`insira uma LETRA`)
    break;       
}