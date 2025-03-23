// function clicando(){

// document.querySelector("#texto").innerHTML = 'Texto alterado'

// }
// document.querySelector("#botao").addEventListener('click',clicando)

/////////////////////////////////////////////////
// Alterando a cor de fundo quando passar o mouse em cima 

// var a = document.querySelector("#area")

// function cor(){

//   a.style.background='blue'

// }
// a.addEventListener("mouseover",cor)

// Alterar a cor de fundo quando clicar



// function alterandocor(){

//   this.style.backgroundColor = 'orange'

// }

// document.querySelector("#botao").addEventListener("click",alterandocor)

// function trocarimagem(){

// document.querySelector("#imagem2").src="imagem2.jpg"

// }

// document.querySelector("trocar").addEventListener("click",trocarimagem)

// function ocultar(){

//   var texto = document.querySelector("#txt")
//   texto.style.display = texto.style.display == 'none' ? 'block' : 'none'

// }


// document.querySelector("#botao").addEventListener("click",ocultar)

// function paragrafo(){

// novoParagrafo = document.createElement('p')
// novoParagrafo.textContent = 'Novo Paragrafo'
// document.querySelector("#c").appendChild(novoParagrafo)

// }
// document.querySelector("#adicionar").addEventListener("click",paragrafo)

// function cliqueduplo(){

// document.querySelector("#mensagem").innerHTML = "ta quase na hora"

// }

// document.querySelector("#duploclique").addEventListener('dblclick'cliqueduplo)

// var m = document.querySelector("#msg")

// function funcao(){

//   this.innerText = 'voce pressionou o botao'
//   this.style.backgroundColor = 'orange'

// }

// function funcao1(){

//   this.innerText = 'voce pressionou o botao'
//   this.style.backgroundColor = 'orange'

// }



// m.addEventListener('mousedown',funcao)
// m.addEventListener('mouseup',funcao1)

// botao = document.querySelector("#btnaumenta")

// botao.addEventListener('mouseover',function(){

//   this.style.width= '150px'
//   this.style.width= '75px'

// })

// botao.addEventListener('mouseout',function(){

//   this.style.width= '100px'
//   this.style.width= '50px'

// })

var cx = document.querySelector("#d")
var isDragging = false 

cx.addEventListener('mousedown',function(){

isDragging = true
  
})

document.addEventListener('mousemove',function(e){

if(isDragging){
  cx.style.left = `${e.pageX - 50}px`
  cx.style.top = `${e.pageY - 50}px`
  }
})

  document.addEventListener('mouseup',function(){
    isDragging = false
  })
    
  




