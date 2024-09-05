function ehpalindromo(texto){
     
      let textoFormatado = texto.replace(/\s+/g, '').toLowerCase();
    
      let textoInvertido = textoFormatado.split('').reverse().join('');
      
      return textoFormatado === textoInvertido;
}

alert(ehpalindromo("ana"))
